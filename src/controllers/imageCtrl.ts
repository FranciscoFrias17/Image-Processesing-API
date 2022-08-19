import { Request, Response } from 'express'
import ImageService from '../services/imageService'
import * as fs from 'fs'
import path from 'path'

const ImageCtrl = {
    imageGetAll: async (req: Request, res: Response): Promise<void> => {
        const errors: Array<string> = []
        fs.readdir(`./images`, (error, files) => {
            if (error) {
                errors.push(error.message)
            }
            res.send(files)
            // eslint-disable-next-line no-console, no-undef
            console.log('ImageGetAll', files)
        })
    },
    imageGetOne: async (req: Request, res: Response): Promise<void> => {
        let error = ''
        const { id } = req.params
        fs.existsSync(`./images/${id}`) ? res.sendFile(path.resolve(`./images/${id}`)) : (error = 'Image not found')
        if (error) {
            res.status(404).send(error)
        }
        // eslint-disable-next-line no-console, no-undef
        console.log('ImageGetOne', id)
    },

    imageCreate: async (req: Request, res: Response): Promise<void> => {
        let error = ''
        const imageName: string = req.params.id
        const width: number = req.query.width ? parseInt(req.query.width as string) : 0
        const height: number = req.query.height ? parseInt(req.query.height as string) : 0

        if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
            error = 'Invalid parameters provided. Positive integers for width and height are required'
            res.status(400).send(error)
        }
        if (imageName.length === 0) {
            error = 'Image name is required'
            res.status(400).send(error)
        } else {
            const editPath = path.resolve(`./images/${imageName}-${width}x${height}.jpg`)
            if (!fs.existsSync(editPath)) {
                // eslint-disable-next-line no-console, no-undef
                console.log('ImageCreate', imageName)

                const editedImage = await ImageService.resizeImage(editPath, imageName, width, height)

                if (!editedImage) {
                    error =
                        'Invalid parameters provided. Image name is required. Positive integers for width and height are required'
                    res.status(404).send(error)
                }
                res.status(200).sendFile(editPath)
            }
        }
    },
}

export default ImageCtrl

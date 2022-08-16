import { Request, Response } from 'express'
import ImageService from '../services/imageService'
import * as fs from 'fs'

const ImageCtrl = {
    imageGetAll: async (req: Request, res: Response) => {
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
    imageGetOne: async (req: Request, res: Response) => {
        let error = ''
        const { id } = req.params
        fs.readFile(`./images/${id}`, (err, data) => {
            if (err) {
                error = err.message
            }
            error ? res.status(404).json({ error }) : res.send(data)
        })
        // eslint-disable-next-line no-console, no-undef
        console.log('ImageGetOne', id)
    },

    imageCreate: async (req: Request, res: Response) => {
        const imageName = req.params.id
        const width = req.query.width ? parseInt(req.query.width as string) : 0
        const height = req.query.height ? parseInt(req.query.height as string) : 0

        const editPath = `./images/${imageName}-${width}x${height}.jpg`
        const editedImage = await ImageService.resizeImage(editPath, imageName, width, height)
        res.status(200).send(editedImage)
        // eslint-disable-next-line no-console, no-undef
        console.log('ImageCreate', imageName)
    },
}

export default ImageCtrl

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
        console.log('ImageGetOne', id)
    },

    imageCreate: async (req: Request, res: Response) => {
        const imageName = req.query.filename as string
        const width = req.query.width as unknown as number
        const height = req.query.height as unknown as number

        const editPath = `./images/${imageName}-${width}x${height}`
        const editedImage = await ImageService.resizeImage(editPath, imageName, width, height)
        res.send(editedImage)
        console.log('ImageCreate', imageName)
    },
}

export default ImageCtrl

import { Request, Response } from 'express'
import ImageService from '../services/imageService'
import * as fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const ImageCtrl = {
    imageGetAll: async (req: Request, res: Response) => {
        const errors: Array<string> = []
        fs.readdir(`../images`, (error, files) => {
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
        fs.readFile(`../images/${id}`, (err, data) => {
            if (err) {
                error = err.message
            }
            error ? res.status(404).json({ error }) : res.send(data)
        })
        console.log('ImageGetOne', id)
    },

    imageCreate: async (req: Request, res: Response) => {
        const filename = req.query.filename as string
        const width = req.query.width as unknown as number
        const height = req.query.height as unknown as number

        const editPath = path.resolve(`../images/${filename}-${width}-${height}.jpg`)

        const image = await ImageService.changeImage(filename, width, height)

        if (image) {
            res.send(image)
        } else {
            res.status(404).json({ error: 'Image not found' })
        }

        console.log('ImageCreate', editPath)

        sharp(editPath).toFile(editPath)

        fs.readFile(editPath, (err, data) => {
            if (err) {
                console.log(err.message)
            }
            res.send(data)
        })
    },
}

export default ImageCtrl

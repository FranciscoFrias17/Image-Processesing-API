import sharp, { OutputInfo } from 'sharp'
import path from 'path'

/* Service resizes the images */
export class ImageService {
    async changeImage(filename: string, width: number, height: number): Promise<OutputInfo | undefined> {
        const filePath = path.resolve(`../images/${filename}`)
        const newFilePath = path.resolve(`../images/${filename}-${width}-${height}.jpg`)

        const image = await sharp(filePath).resize(width, height).toFile(newFilePath)

        return image
    }
}

export default new ImageService()

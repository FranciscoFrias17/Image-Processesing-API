import sharp, { OutputInfo } from 'sharp'
import path from 'path'

/* Service resizes the images */
export class ImageService {
    async resizeImage(editPath: string, imageName: string, width: number, height: number) {
        try {
            const editedImage = await sharp(`../images/${imageName}`).resize(width, height).toFile(editPath)
            return editedImage
        } catch (error) {
            // eslint-disable-next-line no-console, no-undef
            console.log(error)
        }
    }
}

export default new ImageService()

import imageService from '../src/services/imageService'
import path from 'path'

describe('ImageService', () => {
    test('resizeImage, check if resize Image works with valid inputs', async () => {
        const editPath = path.resolve('./images/fjord-100x100.jpg')
        const editedImage = await imageService.resizeImage(editPath, 'fjord', 100, 100)
        expect(editedImage).toBeDefined()
    })
})

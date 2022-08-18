import imageService from '../src/services/imageService'

describe('ImageService', () => {
    test('resizeImage, check if resize Image works with valid inputs', async () => {
        const editPath = './images/fjord-100x100.jpg'
        const editedImage = await imageService.resizeImage(editPath, 'fjord', 100, 100)
        expect(editedImage).toBeDefined()
    })
})

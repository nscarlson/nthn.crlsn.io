import { FileUpload } from 'graphql-upload'
import uploadStream from '../util/uploadStream'

const uploadToS3 = async (
    root: object,
    args: {
        input: {
            file: FileUpload
        }
    },
) => {
    const { createReadStream } = await args.input.file

    const stream = createReadStream()

    // console.log('filename:', filename)
    // console.log('mimetype:', mimetype)

    // stream.on('data', (data) => {
    //     console.log('data:', data.toString())
    // })

    uploadStream(stream)

    return {
        id: 'ID',
    }
}

export default uploadToS3

import { FileUpload } from 'graphql-upload'
import { v4 as uuidv4 } from 'uuid'

import S3 from '../services/S3'

const s3 = new S3()

const { S3_IMAGES_BUCKET } = process.env

const uploadToS3 = async (
    root: object,
    args: {
        input: {
            file: FileUpload
        }
    },
) => {
    const { createReadStream, mimetype } = await args.input.file

    const stream = createReadStream()

    const uploadResult = await s3.upload({
        Bucket: S3_IMAGES_BUCKET || '',
        filename: uuidv4(),
        mimetype,
        stream,
    })

    console.log(uploadResult)
}

export default uploadToS3

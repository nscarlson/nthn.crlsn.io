import AWS from 'aws-sdk'
import fs from 'fs'
import path from 'path'

AWS.config.update({ region: '' })

interface CreateBucketParams {
    Bucket: string
    ACL: string
}

interface UploadParams {
    Bucket: string
    file: string
}

class S3 {
    constructor() {
        this.s3Client = new AWS.S3({ apiVersion: '2006-03-01' })
    }

    s3Client: AWS.S3

    createBucket = (createBucketParams: CreateBucketParams) => {
        this.s3Client.createBucket(createBucketParams, function (err, data) {
            if (err) {
                console.log('Error', err)
            } else {
                console.log('Success', data.Location)
            }
        })
    }

    listBuckets = () => {
        this.s3Client.listBuckets(function (err, data) {
            if (err) {
                console.log('Error', err)
            } else {
                console.log('Success', data.Buckets)
            }
        })
    }

    upload = (uploadParams: UploadParams) => {
        const filestream = fs.createReadStream(uploadParams.file)
        const Key = path.basename(uploadParams.file)

        this.s3Client.upload(
            {
                Bucket: uploadParams.Bucket,
                Body: filestream,
                Key,
            },
            function (err, data) {
                if (err) {
                    console.log('Error', err)
                }
                if (data) {
                    console.log('Upload Success', data.Location)
                }
            },
        )
    }
}

export default S3

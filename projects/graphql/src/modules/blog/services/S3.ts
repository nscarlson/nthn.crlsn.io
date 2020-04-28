import AWS from 'aws-sdk'
import fs from 'fs'

AWS.config.update({ region: '' })

interface CreateBucketParams {
    Bucket: string
    ACL: string
}

interface UploadParams {
    Bucket: string
    stream: fs.ReadStream
    filename: string
    mimetype: string
}

class S3 {
    constructor() {
        this.s3Client = new AWS.S3({ apiVersion: '2006-03-01' })
    }

    s3Client: AWS.S3
    bucket: string

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

    upload = ({ Bucket, filename, stream }: UploadParams) =>
        this.s3Client
            .upload({
                Bucket,
                Body: stream,
                Key: filename,
            })
            .promise()
}

export default S3

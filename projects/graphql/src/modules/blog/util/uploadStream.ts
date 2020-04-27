import { ReadStream } from 'fs-capacitor'

const uploadStream = (stream: ReadStream) => {
    let data = ''

    stream.setEncoding('UTF8')

    return new Promise((resolve, reject) =>
        stream
            .on('error', (error: Error) => {
                reject(error)
            })
            .on('data', (chunk: Buffer) => (data += chunk))
            .on('end', () => {
                console.log('#######')
                console.log(data)
                console.log('#######')
                resolve(data)
            }),
    )
}

export default uploadStream

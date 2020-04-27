import postById from './postById'
import uploadToS3 from './uploadToS3'

const resolvers = {
    Query: {
        postById,
    },
    Mutation: {
        uploadToS3,
    },
}

export default resolvers

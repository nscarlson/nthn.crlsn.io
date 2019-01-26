import { getArticle } from ''

const article = async (root, { slug }, context) => {
    const {
        title,
        content,
    } = await getArticle({ slug })
}

return {
    title,
    content,
}

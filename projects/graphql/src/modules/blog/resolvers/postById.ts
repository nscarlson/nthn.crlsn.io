import marked from 'marked'
import sanitizeHtml from 'sanitize-html'

const posts = [
    {
        id: '1234-1234-1234-1234',
        slug: 'lorem-ipsum',
        title: 'Lorem Ipsum',
        content: `
> Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla
> non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque
> nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo.

# Fusce Fringilla Dolor

Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula
porta felis euismod semper. Donec sed odio dui. Cras mattis
consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Sed posuere consectetur est at lobortis.

# Dolor Lorem Ornare Porta
Etiam porta sem malesuada magna mollis euismod. Sed posuere
consectetur est at lobortis. Cras mattis consectetur purus sit amet
fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit.

\`\`\`
try {
    const post = posts.find((post) => post.id === args.postId)

    const sanitizedMarkup = parseMarkdown(post?.content || '')

    return {
        ...post,
        content: sanitizedMarkup,
    }
} catch (err) {
    console.error(err)
    throw err
}
\`\`\`

# Malesuada Pellentesque Tellus Risus Vulputate

Maecenas sed diam eget risus varius blandit sit amet non magna.
Donec ullamcorper nulla non metus auctor fringilla. Nullam quis
risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh
ultricies vehicula ut id elit. Integer posuere erat a ante venenatis
dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.
`,
    },
]

const parseMarkdown = (markdown: string) => {
    const rawMarkup = marked(markdown)

    return sanitizeHtml(rawMarkup, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h1', 'h2']),
    })
}

const postById = (
    root: object,
    args: {
        postId: string
    },
) => {
    try {
        const post = posts.find((post) => post.id === args.postId)

        const sanitizedMarkup = parseMarkdown(post?.content || '')

        return {
            ...post,
            content: sanitizedMarkup,
        }
    } catch (err) {
        console.error(err)
        throw err
    }
}

export default postById

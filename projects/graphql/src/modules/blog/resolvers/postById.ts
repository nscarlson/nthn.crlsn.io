const posts = [
    {
        id: '1234-1234-1234-1234',
        slug: 'lorem-ipsum',
        title: 'Lorem Ipsum',
        content: `
            <p>
                Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula
                porta felis euismod semper. Donec sed odio dui. Cras mattis
                consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
                sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed posuere consectetur est at lobortis.
            </p>
            <p>
                Etiam porta sem malesuada magna mollis euismod. Sed posuere
                consectetur est at lobortis. Cras mattis consectetur purus sit amet
                fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
            <p>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
                Donec ullamcorper nulla non metus auctor fringilla. Nullam quis
                risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh
                ultricies vehicula ut id elit. Integer posuere erat a ante venenatis
                dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.
            </p>
        `,
    },
]

const postById = (
    root: object,
    args: {
        postId: string
    },
) => {
    try {
        return posts.find((post) => post.id === args.postId)
    } catch (err) {
        console.error(err)
        throw err
    }
}

export default postById

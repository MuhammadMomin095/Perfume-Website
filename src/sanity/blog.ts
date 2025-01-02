// sanity/pet.ts
export const blog = {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
        },
        {
            name: 'para',
            type: 'string',
            title: 'Para'
        },
        
        {
            name: 'read',
            type: 'string',
            title: 'Read'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                 hotspot: true, 
             }
    }

    ]
}
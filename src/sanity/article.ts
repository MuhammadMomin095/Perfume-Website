// sanity/pet.ts
export const article = {
    name: 'article',
    type: 'document',
    title: 'Article',
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
// sanity/pet.ts
export const perfume = {
    name: 'perfume',
    type: 'document',
    title: 'Perfume',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'price',
            type: 'string',
            title: 'Price'
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
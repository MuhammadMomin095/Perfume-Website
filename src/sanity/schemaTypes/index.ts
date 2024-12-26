import { type SchemaTypeDefinition } from 'sanity'
import { perfume } from '../perfume'
import { article } from '../article'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [perfume , article],
}

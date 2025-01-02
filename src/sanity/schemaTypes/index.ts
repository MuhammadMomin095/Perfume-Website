import { type SchemaTypeDefinition } from 'sanity'
import { perfume } from '../perfume'
import { article } from '../article'
import { blog } from '../blog'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [perfume , article, blog],
}

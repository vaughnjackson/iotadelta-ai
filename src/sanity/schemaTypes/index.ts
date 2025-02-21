import { type SchemaTypeDefinition } from 'sanity'
import blog from './blog'
import about from './about'

const schemaTypes = [blog, about]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}

export { schemaTypes }

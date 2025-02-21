export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'content', type: 'array', title: 'Content', of: [{ type: 'block' }] },
    { name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }] },
    { name: 'nudge', type: 'string', title: 'Try This Nudge' },
  ],
}; 
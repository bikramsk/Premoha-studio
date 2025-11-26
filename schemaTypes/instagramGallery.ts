export default {
  name: 'instagramGallery',
  title: 'Instagram Gallery Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'shopLink',
      title: 'Shop Instagram Link',
      type: 'url',
    },
    {
      name: 'posts',
      title: 'Instagram Posts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Post Image',
              type: 'image',
              options: { hotspot: true },
              validation: Rule => Rule.required(),
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'link',
              title: 'Post Link',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
}

export default {
  name: 'anniversaryCollections',
  title: 'Anniversary Collections Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Collection Title',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: Rule => Rule.required(),
            },
            {
              name: 'image',
              title: 'Collection Image',
              type: 'image',
              options: { hotspot: true },
              validation: Rule => Rule.required(),
            },
            {
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'buttonSlug',
              title: 'Button Slug (for internal links)',
              type: 'slug',
              options: {
                source: 'title',
                maxLength: 96,
              },
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
      validation: Rule => Rule.max(3),
    },
  ],
}

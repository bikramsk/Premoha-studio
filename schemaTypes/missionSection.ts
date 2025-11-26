export default {
  name: 'missionSection',
  title: 'Mission Section',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Main Title',
      type: 'text',
      validation: Rule => Rule.required(),
    },
   {
  name: 'learnMoreSlug',
  title: 'Learn More Slug',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 96,
  },
  validation: Rule => Rule.required(),
},
    {
      name: 'collections',
      title: 'Featured Collections',
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
              name: 'slug',
              title: 'Slug (for URL)',
              type: 'slug',
              options: {
                source: 'title',
                maxLength: 96,
              },
              validation: Rule => Rule.required(),
            },
            {
              name: 'image',
              title: 'Collection Image',
              type: 'image',
              options: { hotspot: true },
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}

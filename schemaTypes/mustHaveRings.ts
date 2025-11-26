export default {
  name: 'mustHaveRings',
  title: 'Must Have Rings Section',
  type: 'document',
  fields: [
    {
      name: 'buttonSlug',
      title: 'Button Slug (for URL)',
      type: 'slug',
      options: {
        source: 'mainBanner.title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },

    {
      name: 'mainBanner',
      title: 'Main Banner',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          validation: Rule => Rule.required(),
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        },
      ],
    },

    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },

    {
      name: 'ringItems',
      title: 'Ring Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              validation: Rule => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'slug',
              title: 'Slug (for URL)',
              type: 'slug',
              options: {
                source: 'label',
                maxLength: 96,
              },
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}

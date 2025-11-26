export default {
  name: 'giftsShopByOccasion',
  title: 'Gifts Shop by Occasion',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'occasionOptions',
      title: 'Occasion Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: { source: 'label', maxLength: 96 },
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().min(4).max(4),
      description: 'Add occasion options',
    },
    {
      name: 'rightImage',
      title: 'Right Side Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      occasionCount: 'occasionOptions.length',
    },
    prepare({ title, occasionCount }: any) {
      return {
        title: title || 'Gifts Shop by Occasion',
        subtitle: `${occasionCount || 0} occasion options`,
      }
    },
  },
}


export default {
  name: 'giftsShopByPrice',
  title: 'Gifts Shop by Price',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Title displayed at the top (e.g., "Shop Gifts by Price")',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'priceOptions',
      title: 'Price Options',
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
      validation: (Rule: any) => Rule.required().min(1).max(4),
      description: 'Add up to 4 price options',
    },
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      priceCount: 'priceOptions.length',
    },
    prepare({ title, priceCount }: any) {
      return {
        title: title || 'Gifts Shop by Price',
        subtitle: `${priceCount || 0} price options`,
      }
    },
  },
}


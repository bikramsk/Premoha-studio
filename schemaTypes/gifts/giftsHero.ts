export default {
  name: 'giftsHero',
  title: 'Gifts Hero Banner',
  type: 'document',
  fields: [
    {
      name: 'banners',
      title: 'Banners',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Banner Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'buttonSlug',
              title: 'Button Slug',
              type: 'slug',
              options: { source: 'title', maxLength: 96 },
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().min(2).max(2),
      description: 'Add exactly 2 banners for the gifts page',
    },
  ],
  preview: {
    select: {
      banner1: 'banners.0.title',
      banner2: 'banners.1.title',
    },
    prepare({ banner1, banner2 }: any) {
      return {
        title: 'Gifts Hero Banner',
        subtitle: `${banner1 || 'Banner 1'} | ${banner2 || 'Banner 2'}`,
      }
    },
  },
}


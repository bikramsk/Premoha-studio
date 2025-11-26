export default {
  name: 'earringsStandardsBanner',
  title: 'Earrings Standards Banner',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'slug',
          title: 'Button Slug',
          type: 'slug',
          options: { source: 'text', maxLength: 96 },
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'backgroundImage',
      title: 'Background Image (Desktop)',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'backgroundImageMobile',
      title: 'Background Image (Mobile)',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'subtitle',
    },
    prepare({ heading, subtitle }: any) {
      return {
        title: heading || 'Earrings Standards Banner',
        subtitle: subtitle || 'No subtitle',
      }
    },
  },
}


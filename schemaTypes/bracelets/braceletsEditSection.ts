export default {
  name: 'braceletsEditSection',
  title: 'Bracelets Edit Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Title displayed at the top left (e.g., "The Bracelet Edit")',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'leftSection',
      title: 'Left Section',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          validation: (Rule: any) => Rule.required(),
        },
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
          name: 'slug',
          title: 'Slug (for URL)',
          type: 'slug',
          options: { source: 'heading', maxLength: 96 },
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'middleSection',
      title: 'Middle Section',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          validation: (Rule: any) => Rule.required(),
        },
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
          name: 'slug',
          title: 'Slug (for URL)',
          type: 'slug',
          options: { source: 'heading', maxLength: 96 },
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'rightSection',
      title: 'Right Section',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          validation: (Rule: any) => Rule.required(),
        },
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
          name: 'slug',
          title: 'Slug (for URL)',
          type: 'slug',
          options: { source: 'heading', maxLength: 96 },
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
  ],
  preview: {
    select: {
      leftHeading: 'leftSection.heading',
      middleHeading: 'middleSection.heading',
      rightHeading: 'rightSection.heading',
    },
    prepare({ leftHeading, middleHeading, rightHeading }: any) {
      return {
        title: 'Bracelets Edit Section',
        subtitle: `${leftHeading} | ${middleHeading} | ${rightHeading}`,
      }
    },
  },
}


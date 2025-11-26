export default {
  name: 'pendantsEditSection',
  title: 'Pendants Edit Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Title displayed at the top left (e.g., "The Pendant Edit")',
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
      name: 'middleLeftSection',
      title: 'Middle Left Section',
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
      name: 'middleRightSection',
      title: 'Middle Right Section',
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
      middleLeftHeading: 'middleLeftSection.heading',
      middleRightHeading: 'middleRightSection.heading',
      rightHeading: 'rightSection.heading',
    },
    prepare({ leftHeading, middleLeftHeading, middleRightHeading, rightHeading }: any) {
      return {
        title: 'Pendants Edit Section',
        subtitle: `${leftHeading} | ${middleLeftHeading} | ${middleRightHeading} | ${rightHeading}`,
      }
    },
  },
}


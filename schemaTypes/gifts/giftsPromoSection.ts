export default {
  name: 'giftsPromoSection',
  title: 'Gifts Promo Section',
  type: 'document',
  fields: [
    {
      name: 'leftSection',
      title: 'Left Section',
      type: 'object',
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
        },
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
          validation: (Rule: any) => Rule.required().min(1),
        },
        {
          name: 'primaryButton',
          title: 'Primary Button',
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
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          description: 'Hex color code (e.g., #f5f5f5)',
          initialValue: '#f5f5f5',
        },
      ],
    },
    {
      name: 'middleSection',
      title: 'Middle Section',
      type: 'object',
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
        },
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
          validation: (Rule: any) => Rule.required().min(1),
        },
        {
          name: 'primaryButton',
          title: 'Primary Button',
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
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          description: 'Hex color code',
          initialValue: '#f5f5f5',
        },
      ],
    },
    {
      name: 'rightSection',
      title: 'Right Section',
      type: 'object',
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
        },
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
          validation: (Rule: any) => Rule.required().min(1),
        },
        {
          name: 'primaryButton',
          title: 'Primary Button',
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
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          description: 'Hex color code (e.g., #f5f5f5)',
          initialValue: '#f5f5f5',
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
        title: 'Gifts Promo Section',
        subtitle: `${leftHeading} | ${middleHeading} | ${rightHeading}`,
      }
    },
  },
}


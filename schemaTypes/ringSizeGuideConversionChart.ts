export default {
  name: 'ringSizeGuideConversionChart',
  title: 'Ring Size Guide - Conversion Chart',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Ring Size Conversion Chart',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rows',
      title: 'Conversion Rows',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'usSize',
              title: 'US Size',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'ukSize',
              title: 'UK Size',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'indiaSize',
              title: 'India Size',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'euSize',
              title: 'EU Size',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}


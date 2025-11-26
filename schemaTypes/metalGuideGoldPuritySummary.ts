export default {
  name: 'metalGuideGoldPuritySummary',
  title: 'Metal Guide - Gold Purity Summary',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Gold Purity Summary',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'items',
      title: 'Purity Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'karat',
              title: 'Karat',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'goldPercentage',
              title: 'Gold Percentage',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description (Optional)',
              type: 'text',
              rows: 2,
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}


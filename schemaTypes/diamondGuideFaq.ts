export default {
  name: 'diamondGuideFaq',
  title: 'Diamond Guide FAQs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Diamond Guide FAQs',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'array',
              of: [{ type: 'block' }],
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}


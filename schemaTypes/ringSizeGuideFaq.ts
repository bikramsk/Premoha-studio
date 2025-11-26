export default {
  name: 'ringSizeGuideFaq',
  title: 'Ring Size Guide FAQs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Frequently Asked Questions',
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


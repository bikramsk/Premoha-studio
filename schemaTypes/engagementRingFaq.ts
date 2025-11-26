export default {
  name: 'engagementRingFaq',
  title: 'Engagement Ring FAQs',
  type: 'document',
  fields: [
    {
      name: 'pageContext',
      title: 'Page Context',
      type: 'string',
      options: {
        list: [
          { title: 'Engagement Rings', value: 'engagement-rings' },
          { title: 'Silver Earrings', value: 'silver-earrings' },
          { title: 'Silver Pendants', value: 'silver-pendants' },
          { title: 'Silver Bracelets', value: 'silver-bracelets' },
        ],
        layout: 'radio',
      },
      initialValue: 'engagement-rings',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Engagement Ring FAQs',
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

export default {
  name: 'weddingRingGuideIntroduction',
  title: 'Wedding Ring Guide - Introduction',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}


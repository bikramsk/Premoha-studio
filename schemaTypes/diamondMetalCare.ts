export default {
  name: 'diamondMetalCare',
  title: 'Jewellery Care - Diamond and Metal Care',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'careTips',
      title: 'Care Tips',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Tip Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
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


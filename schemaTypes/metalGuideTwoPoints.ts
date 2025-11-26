export default {
  name: 'metalGuideTwoPoints',
  title: 'Metal Guide - Two Points',
  type: 'document',
  fields: [
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
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
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'alignment',
              title: 'Alignment',
              type: 'string',
              options: {
                list: [
                  { title: 'Left', value: 'left' },
                  { title: 'Right', value: 'right' },
                ],
                layout: 'radio',
              },
              initialValue: 'left',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().min(2).max(2),
    },
  ],
}


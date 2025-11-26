export default {
  name: 'showroomSection',
  title: 'Showroom Section',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Showroom Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
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
          validation: Rule => Rule.required(),
        },
        {
          name: 'slug',
          title: 'Button Slug',
          type: 'slug',
          options: {
            source: 'text',
            maxLength: 96,
          },
          validation: Rule => Rule.required(),
        },
      ],
    },
    {
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'slug',
          title: 'Button Slug',
          type: 'slug',
          options: {
            source: 'text',
            maxLength: 96,
          },
          validation: Rule => Rule.required(),
        },
      ],
    },
  ],
}

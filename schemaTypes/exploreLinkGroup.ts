export default {
  name: 'exploreLinkGroup',
  title: 'Explore Link Group',
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
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: Rule => Rule.required() },
            { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'label' }, validation: Rule => Rule.required() },
          ],
        },
      ],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required().min(0),
    },
  ],
}

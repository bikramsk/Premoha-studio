export default {
  name: 'engagementGuide',
  title: 'Engagement Guide',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }
  ],
  orderings: [
    {
      title: 'Order Ascending',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
}

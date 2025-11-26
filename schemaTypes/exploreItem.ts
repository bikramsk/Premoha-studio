export default {
  name: 'exploreItem',
  title: 'Explore Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: Rule => Rule.required(),
    },

    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required().min(0),
    },
  ],
}

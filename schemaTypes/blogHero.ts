export default {
  name: 'blogHero',
  title: 'Blog Hero Section',
  type: 'document',
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      media: 'backgroundImage',
    },
    prepare() {
      return {
        title: 'Blog Hero Image',
      }
    },
  },
}

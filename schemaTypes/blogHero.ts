export default {
  name: 'blogHero',
  title: 'Blog Hero Section',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Hero Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule: any) => Rule.required().min(1),
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

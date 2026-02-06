export default {
  name: 'blog',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Jewellery Care', value: 'JEWELLERY CARE' },
          { title: 'Style Guide', value: 'STYLE GUIDE' },
          { title: 'Trend Report', value: 'TREND REPORT' },
          { title: 'Education', value: 'EDUCATION' },
          { title: 'Behind the Scenes', value: 'BEHIND THE SCENES' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'blogSection',
      title: 'Header Navigation Section',
      description: 'Which section in the blog header should this post appear under?',
      type: 'string',
      options: {
        list: [
          { title: 'Engagement', value: 'Engagement' },
          { title: 'Wedding', value: 'Wedding' },
          { title: 'Proposal', value: 'Proposal' },
          { title: 'Fine Jewellery', value: 'Fine Jewellery' },
          { title: 'Diamond Rings', value: 'Diamond Rings' },
        ],
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Mark this post as featured to highlight it',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
}

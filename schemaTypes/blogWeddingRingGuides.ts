export default {
  name: 'blogWeddingRingGuides',
  title: 'Wedding Ring Guides',
  type: 'document',
  fields: [
    {
      name: 'guides',
      title: 'Wedding Ring Guides (4 Items)',
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
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: (doc: any, options: any) => options.parent.title,
                maxLength: 96,
              },
              validation: (Rule: any) => Rule.required(),
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
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
      validation: (Rule: any) => Rule.required().min(4).max(4),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Wedding Ring Guides',
      }
    },
  },
}

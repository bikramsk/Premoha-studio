import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faqPage',
  title: 'FAQ Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'FAQs'
    }),
    defineField({
      name: 'sidebarTitle',
      title: 'Sidebar Title',
      type: 'string',
      initialValue: 'Customer Service'
    }),
    defineField({
      name: 'sidebarLinks',
      title: 'Sidebar Links',
      type: 'array',
      of: [{ 
        type: 'object',
        fields: [
          { name: 'label', type: 'string', title: 'Label' },
          { name: 'url', type: 'string', title: 'URL' },
          { name: 'isActive', type: 'boolean', title: 'Is Active?', initialValue: false }
        ]
      }]
    }),
    defineField({
      name: 'categories',
      title: 'FAQ Categories',
      type: 'array',
      of: [{ type: 'faqCategory' }],
    }),
  ],
})

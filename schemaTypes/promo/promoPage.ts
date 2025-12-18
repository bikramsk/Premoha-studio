import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'promoPage',
  title: 'Promo Codes Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Page Description',
      type: 'text',
    }),
    defineField({
      name: 'offers',
      title: 'Offers',
      type: 'array',
      of: [{ type: 'promoOffer' }],
    }),
  ],
})

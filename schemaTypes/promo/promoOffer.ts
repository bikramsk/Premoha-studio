import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'promoOffer',
  title: 'Promo Offer',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'promoCode',
      title: 'Promo Code',
      type: 'string',
    }),
    defineField({
      name: 'terms',
      title: 'Terms',
      type: 'string',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color (Hex)',
      type: 'string',
      description: 'e.g. #183E40'
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Image Right', value: 'right' },
          { title: 'Image Left', value: 'left' },
        ],
      },
    }),
  ],
})

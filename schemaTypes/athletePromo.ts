export default {
  name: 'athletePromo',
  title: 'Athlete Promo Section',
  type: 'document',
  fields: [
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
  name: 'buttonSlug',
  title: 'Button Slug',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 96,
  },
  validation: Rule => Rule.required(),
},
    {
      name: 'image',
      title: 'Athlete Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
  ],
}

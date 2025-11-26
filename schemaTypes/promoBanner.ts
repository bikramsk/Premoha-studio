export default {
  name: 'promoBanner',
  title: 'Promo Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Promo Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
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
      name: 'value',
      title: 'Value Text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'code',
      title: 'Promo Code',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'termsLink',
      title: 'Terms Link',
      type: 'url',
    },
  ],
}

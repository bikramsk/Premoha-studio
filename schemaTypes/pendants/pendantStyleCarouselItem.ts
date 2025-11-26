export default {
  name: 'pendantStyleCarouselItem',
  title: 'Pendant Style Carousel Item',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'label', maxLength: 96 },
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
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


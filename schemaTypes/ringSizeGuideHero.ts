export default {
  name: 'ringSizeGuideHero',
  title: 'Ring Size Guide Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'backgroundImageMobile',
      title: 'Background Image (Mobile)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'backgroundImageDesktop',
      title: 'Background Image (Desktop)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}


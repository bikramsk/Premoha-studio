const braceletsHero = {
  name: 'braceletsHero',
  title: 'Bracelets Hero',
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
    },
    {
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
    },
    {
      name: 'ctaSlug',
      title: 'CTA Slug',
      type: 'slug',
      options: { source: 'title' },
      description: 'Slug  (e.g., bracelets/all-products)',
    },
    {
      name: 'backgroundImageDesktop',
      title: 'Background Image (Desktop)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'backgroundImageMobile',
      title: 'Background Image (Mobile)',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'backgroundImageDesktop',
      subtitle: 'ctaText',
    },
    prepare(selection: any) {
      const { title, media, subtitle } = selection
      return {
        title: title || 'Bracelets Hero',
        subtitle: subtitle ? `CTA: ${subtitle}` : 'Bracelet Banner',
        media,
      }
    },
  },
}

export default braceletsHero


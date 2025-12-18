export default {
  name: 'giftCardPromoBanner',
  title: 'Gift Card Promo Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Top Title (e.g., "ENDS SOON!")',
      type: 'string',
    },
    {
      name: 'highlight',
      title: 'Main Highlight (e.g., "Rs.100")',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'bgColor',
      title: 'Background Color (optional)',
      type: 'string',
      description: 'Hex code (e.g., #0d3c3c)',
    },
    
    {
      name: 'isActive',
      title: 'Active?',
      type: 'boolean',
      initialValue: true,
    },
  ],
}

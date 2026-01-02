export default {
  name: 'announcementBar',
  title: 'Announcement Bar',
  type: 'document',
  fields: [
    {
      name: 'textBeforeCode',
      title: 'Text Before Code',
      type: 'string',
      description: 'Text to display before the promo code.',
    },
    {
      name: 'promoCode',
      title: 'Promo Code',
      type: 'string',
      description: 'promo code eg- stud.',
    },
    {
      name: 'textAfterCode',
      title: 'Text After Code',
      type: 'string',
      description: 'Text to display after the promo code.',
    },
    {
      name: 'slug',
      title: 'Slug (Optional)',
      type: 'slug',
      description: 'Optional slug for announcement.',
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to show/hide the announcement bar.',
    },
  ],
}

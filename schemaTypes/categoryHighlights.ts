export default {
  name: 'categoryHighlights',
  title: 'Category Highlights',
  type: 'document',
  fields: [
    {
      name: 'pageContext',
      title: 'Page Context',
      type: 'string',
      description: 'Select the category page where you want to highlight products',
      options: {
        list: [
          // Main categories
          { title: 'Rings (Main)', value: 'rings' },
          { title: 'Earrings (Main)', value: 'earrings' },
          { title: 'Pendants (Main)', value: 'pendants' },
          { title: 'Bracelets (Main)', value: 'bracelets' },
          
          // Ring Styles
          { title: 'Solitaire Rings', value: 'solitaire-rings' },
          { title: 'Side Stone Rings', value: 'side-stone-rings' },
          { title: 'Halo Diamond Rings', value: 'halo-diamond-rings' },
          { title: 'Delicate Rings', value: 'delicate-rings' },
          { title: 'Statement Rings', value: 'statement-rings' },
          { title: 'Plain Bands', value: 'plain-bands' },
          { title: 'Daily Wear Ring', value: 'daily-wear-ring' },
          { title: 'Office Wear Ring', value: 'office-wear-ring' },
          { title: 'Party Wear Ring', value: 'party-wear-ring' },
          { title: 'Traditional Wear Ring', value: 'traditional-wear-ring' },
          { title: 'Rings For Him', value: 'rings-for-him' },
          { title: 'Rings For Her', value: 'rings-for-her' },

          // Earring Styles
          { title: 'Stud Earrings', value: 'stud-earrings' },
          { title: 'Hoop Earrings', value: 'hoop-earrings' },
          { title: 'Drop Earrings', value: 'drop-earrings' },
          { title: 'Daily Wear Earring', value: 'daily-wear-earring' },
          { title: 'Party Wear Earring', value: 'party-wear-earring' },
          { title: 'Office Wear Earring', value: 'office-wear-earring' },
          { title: 'Traditional Wear Earring', value: 'traditional-wear-earring' },
          { title: 'Men Earrings', value: 'men-earrings' },
          { title: 'Women Earrings', value: 'women-earrings' },
          { title: 'Earrings For Him', value: 'earrings-for-him' },
          { title: 'Earrings For Her', value: 'earrings-for-her' },

          // Pendant Styles
          { title: 'Solitaire Pendants', value: 'solitaire-pendants' },
          { title: 'Heart Pendants', value: 'heart-pendants' },
          { title: 'Halo Pendants', value: 'halo-pendants' },
          { title: 'Initial Pendants', value: 'initial-pendants' },
          { title: 'Daily Wear Pendant', value: 'daily-wear-pendant' },
          { title: 'Party Wear Pendant', value: 'party-wear-pendant' },
          { title: 'Office Wear Pendant', value: 'office-wear-pendant' },
          { title: 'Traditional Wear Pendant', value: 'traditional-wear-pendant' },
          { title: 'Men Pendants', value: 'men-pendants' },
          { title: 'Women Pendants', value: 'women-pendants' },
          { title: 'Pendants For Him', value: 'pendants-for-him' },
          { title: 'Pendants For Her', value: 'pendants-for-her' },

          // Bracelet Styles
          { title: 'Chain Bracelet', value: 'chain-bracelet' },
          { title: 'Bangle Bracelet', value: 'bangle-bracelet' },
          { title: 'Everyday Bracelet', value: 'everyday-bracelet' },
          { title: 'Daily Wear Bracelet', value: 'daily-wear-bracelet' },
          { title: 'Office Wear Bracelet', value: 'office-wear-bracelet' },
          { title: 'Party Wear Bracelet', value: 'party-wear-bracelet' },
          { title: 'Traditional Wear Bracelet', value: 'traditional-wear-bracelet' },
          { title: 'Women Bracelets', value: 'women-bracelets' },
          { title: 'Bracelets For Her', value: 'bracelets-for-her' },
          
          // Gift Styles
          { title: 'Gifts (Main)', value: 'gifts' },
          { title: 'Gift For Him', value: 'gift-for-him' },
          { title: 'Gift For Her', value: 'gift-for-her' },
          { title: 'Gift For Mother', value: 'gift-for-mother' },
          { title: 'Gift For Father', value: 'gift-for-father' },
          { title: 'Gift For Sister', value: 'gift-for-sister' },
          { title: 'Gift For Husband', value: 'gift-for-husband' },
          { title: 'Gift For Wife', value: 'gift-for-wife' },
          { title: 'Gift For Valentine', value: 'gift-for-valentine' },
          { title: 'Gift For Boyfriend', value: 'gift-for-boyfriend' },
          { title: 'Gift For Girlfriend', value: 'gift-for-girlfriend' },
          { title: 'Gift For Friend', value: 'gift-for-friend' },
          { title: 'Diwali Gifts', value: 'diwali' },
          { title: 'Christmas Gifts', value: 'christmas' },
          { title: 'New Year Gifts', value: 'new-year' },
          { title: 'Karwa Chauth Gifts', value: 'karwa-chauth' },
          { title: 'Dhanteras Gifts', value: 'dhanteras' },
          { title: 'Bhai Dooj Gifts', value: 'bhai-dooj' },
          { title: 'Eid Gifts', value: 'eid' },
          { title: 'Mothers Day Gifts', value: 'mothers-day' },
          { title: 'Fathers Day Gifts', value: 'fathers-day' },
          { title: 'Thanksgiving Gifts', value: 'thanksgiving' },
          { title: 'Graduation Gifts', value: 'graduation' },
          { title: 'Wedding Anniversary Gifts', value: 'wedding-anniversary' },
          { title: 'Engagement Anniversary Gifts', value: 'engagement-anniversary' },
          { title: 'Birthday Gifts', value: 'birthday' },
          { title: 'Wedding Gifts', value: 'wedding' },
          { title: 'Gifts for Men', value: 'men' },
          { title: 'Gifts for Women', value: 'women' },
          { title: 'Gifts for Kids', value: 'kids' },
          { title: 'Gifts for Girls', value: 'girls' },
          { title: 'Gifts for Boys', value: 'boy' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'highlightedProducts',
      title: 'Pinned Products',
      type: 'array',
      description: 'Add Product Handles (e.g. "claire-cluster-ring") in the order you want them to appear at the top.',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'pageContext',
      subtitle: 'highlightedProducts.0'
    },
    prepare({ title, subtitle }: any) {
      return {
        title: title ? title.toUpperCase().replace(/-/g, ' ') : 'No Category',
        subtitle: subtitle ? `Starts with: ${subtitle}...` : 'No products pinned'
      }
    }
  }
}

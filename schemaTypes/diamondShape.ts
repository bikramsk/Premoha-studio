export default {
  name: 'diamondShape',
  type: 'document',
  title: 'Diamond Shape',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Shape Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug (for URL)',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Shape Image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'hoverImage',
      type: 'image',
      title: 'Hover Image (Main Banner Replacement)',
      options: {
        hotspot: true,
      },
      description: 'changes image on hover',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}


// export default {
//   name: 'diamondShape',
//   type: 'document',
//   title: 'Diamond Shape',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Shape Name',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'slug',
//       type: 'slug',
//       title: 'Slug (for URL)',
//       options: {
//         source: 'name',
//         maxLength: 96,
//       },
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'image',
//       type: 'image',
//       title: 'Shape Image',
//       validation: Rule => Rule.required(),
//     },
//     {
//   name: 'order',
//   title: 'Display Order',
//   type: 'number',
//   validation: Rule => Rule.required()
// },
//   ],
// }

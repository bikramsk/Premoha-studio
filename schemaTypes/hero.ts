


export default {
 name: 'hero',
  title: 'Hero Section',
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "backgroundImageDesktop",
      title: "Background Image (Desktop)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "backgroundImageMobile",
      title: "Background Image (Mobile)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "primaryCtaText",
      title: "Primary CTA Text",
      type: "string",
    },
    {
      name: "primaryCtaSlug",
      title: "Primary CTA Slug",
      type: "slug",
      options: {
        source: "primaryCtaText",
        maxLength: 96,
      },
    },
    {
      name: "secondaryCtaText",
      title: "Secondary CTA Text",
      type: "string",
    },
    {
      name: "secondaryCtaSlug",
      title: "Secondary CTA Slug",
      type: "slug",
      options: {
        source: "secondaryCtaText",
        maxLength: 96,
      },
    },
  ],
}


// export default {
//   name: 'hero',
//   title: 'Hero Section',
//   type: 'document',
//   fields: [
//     {
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'subtitle',
//       title: 'Subtitle',
//       type: 'text',
//     },
//     {
//       name: 'backgroundImage',
//       title: 'Background Image',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'primaryCtaText',
//       title: 'Primary CTA Text',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'primaryCtaSlug',
//       title: 'Primary CTA Slug',
//       type: 'slug',
//       options: {
//         source: 'title', 
//         maxLength: 96,
//       },
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'secondaryCtaText',
//       title: 'Secondary CTA Text',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'secondaryCtaSlug',
//       title: 'Secondary CTA Slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//         maxLength: 96,
//       },
//       validation: (Rule) => Rule.required(),
//     },
//   ],
// }

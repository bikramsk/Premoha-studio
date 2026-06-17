export default {
  name: "popularProducts",
  title: "Popular Products Section",
  type: "document",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Popular Products",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "sectionSubtitle",
      title: "Section Subtitle",
      type: "string",
      initialValue: "Artistry and craftsmanship in every detail.",
    },
    {
      name: "productItems",
      title: "Product Items",
      type: "array",
      validation: (Rule: any) => Rule.required().min(4).max(4),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "slug",
              title: "Product Slug (URL handle)",
              type: "string",
              description: "The handle of the product from Medusa (e.g., maffei-diamond-ring)",
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}

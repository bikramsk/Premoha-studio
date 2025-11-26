
export default {
  name: "signatureCollections",
  title: "Signature Collection",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Collection Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    },
  ],
}

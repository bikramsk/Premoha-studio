import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'notFoundPage',
  title: '404 Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'backgroundImageDesktop',
          title: 'Background Image (Desktop)',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'backgroundImageMobile',
          title: 'Background Image (Mobile)',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'primaryButtonText',
          title: 'Primary Button Text',
          type: 'string',
        }),
        defineField({
          name: 'primaryButtonSlug',
          title: 'Primary Button Slug',
          type: 'slug', 
          options: {
             source: 'title', // This is dummy, usually we just type it
          }
        }),
        defineField({
          name: 'secondaryButtonText',
          title: 'Secondary Button Text',
          type: 'string',
        }),
        defineField({
          name: 'secondaryButtonSlug',
          title: 'Secondary Button Slug',
          type: 'slug',
        }),
      ],
    }),
    defineField({
      name: 'discoverSection',
      title: 'Discover Something New',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true },
                }),
                defineField({
                  name: 'slug',
                  title: 'Slug',
                  type: 'slug',
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.max(4),
        }),
      ],
    }),
    defineField({
      name: 'tipsSection',
      title: 'Tips & Ideas',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 2,
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true },
                }),
                defineField({
                  name: 'slug',
                  title: 'Slug',
                  type: 'slug',
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.max(4),
        }),
      ],
    }),
  ],
})

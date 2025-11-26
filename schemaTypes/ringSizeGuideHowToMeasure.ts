export default {
  name: 'ringSizeGuideHowToMeasure',
  title: 'Ring Size Guide - How To Measure',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}


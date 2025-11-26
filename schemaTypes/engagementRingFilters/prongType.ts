export default { 
  name: "engagementRingProngType",
  title: "Engagement Ring Prong Type",
  type: "document",
  fields: [
    { 
      name: "label", 
      title: "Label", 
      type: "string",
      description: "Example: 'Four Prong', 'Six Prong', 'Bezel'"
    },
    { 
      name: "value", 
      title: "Value", 
      type: "string",
      description: "(e.g. 'four-prong', 'six-prong', 'bezel')" 
    },
    { 
      name: "order", 
      title: "Order", 
      type: "number",
      description: "Controls display order" 
    }
  ],
}

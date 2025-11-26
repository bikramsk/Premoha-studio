export default { 
  name: "engagementRingWidth",
  title: "Engagement Ring Width",
  type: "document",
  fields: [
    { 
      name: "label", 
      title: "Label", 
      type: "string",
      description: "example- 'Under 2mm', '2-3mm', 'Over 3mm'" 
    },
    { 
      name: "value", 
      title: "Value", 
      type: "string",
      description: "(e.g. 'under-2', '2-3', 'over-3')" 
    },
    { 
      name: "order", 
      title: "Order", 
      type: "number",
      description: "Controls display order" 
    }
  ],
}

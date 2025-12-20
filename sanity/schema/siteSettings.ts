import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "brandName", title: "Brand Name", type: "string" }),
    defineField({ name: "heroTitle", title: "Hero Title", type: "string", initialValue: "engineering the way forward" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text" }),

    defineField({
      name: "drone",
      title: "Drone Services",
      type: "object",
      fields: [
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "body", type: "text" }),
        defineField({ name: "images", type: "array", of: [{ type: "image" }] }),
      ],
    }),

    defineField({
      name: "remodeling",
      title: "Remodeling Services",
      type: "object",
      fields: [
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "body", type: "text" }),
        defineField({ name: "images", type: "array", of: [{ type: "image" }] }),
      ],
    }),

    defineField({
      name: "nav",
      title: "Nav Links",
      type: "array",
      of: [{ type: "string" }],
      initialValue: ["Home", "About", "Services", "Contact"],
    }),

    defineField({ name: "email", title: "Contact Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
  ],
});
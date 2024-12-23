import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const worksType = defineType({
  name: "works",
  title: "Works",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "duration",
      type: "string",
    }),
    defineField({
      name: "cost",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});

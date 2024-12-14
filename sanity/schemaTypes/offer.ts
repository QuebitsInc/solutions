import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const offerType = defineType({
  name: "offer",
  title: "Offer",
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
      name: "image",
      type: "image",
    }),
    defineField({
      name: "category",
      type: "string",
    }),
  ],
});

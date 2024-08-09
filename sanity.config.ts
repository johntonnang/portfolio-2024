import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { schemaTypes } from "./schemas"

export default defineConfig({
  name: "portfolio",
  title: "Portfolio",
  projectId: "d98dd8af",
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})

"use client";

import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "../../../../sanity/schema";

const studioConfig = defineConfig({
  name: "default",
  title: "Bamworks Admin",
  basePath: "/admin",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});

export default function AdminPage() {
  return (
    <div className="min-h-screen">
      <NextStudio config={studioConfig} />
    </div>
  );
}

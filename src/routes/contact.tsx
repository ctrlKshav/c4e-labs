import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/contact")(
    {
        component: Contact
    }
)


export default function Contact() {
  return (
    <div>
      Hello
    </div>
  )
}

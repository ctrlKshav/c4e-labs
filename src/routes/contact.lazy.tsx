import { createLazyFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createLazyFileRoute("/contact")(
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

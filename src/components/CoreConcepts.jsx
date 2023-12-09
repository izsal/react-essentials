import React from "react";
import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concepItem) => (
          <CoreConcept key={concepItem.title} {...concepItem} />
        ))}
      </ul>
    </section>
  );
}

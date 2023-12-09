import React from "react";
import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((concepItem) => (
          <CoreConcept key={concepItem.title} {...concepItem} />
        ))}
      </ul>
    </Section>
  );
}

type DesignSystemDocs = {
  purpose: string;
  classification: "Atom" | "Molecule";
  implementation: "shadcn" | "custom";
  shadcn: string[];
  internal?: string[];
  contract: string;
};

function designSystemDocs({
  purpose,
  classification,
  implementation,
  shadcn,
  internal = [],
  contract,
}: DesignSystemDocs) {
  const implementationDetails =
    implementation === "shadcn"
      ? `- **Implementation:** shadcn/ui component\n- **Shadcn equivalent:** ${shadcn.join(", ")}`
      : `- **Implementation:** Custom component\n- **Shadcn composition:** ${shadcn.join(", ") || "None"}`;
  const internalDetails = internal.length
    ? `\n- **Internal composition:** ${internal.join(", ")}`
    : "";

  return `${purpose}

### Design-system mapping

- **Classification:** ${classification}
${implementationDetails}${internalDetails}

### Design contract

${contract}`;
}

export { designSystemDocs };

type DesignSystemDocs = {
  purpose: string;
  classification: "Atom" | "Molecule";
  shadcn: string[];
  contract: string;
};

function designSystemDocs({
  purpose,
  classification,
  shadcn,
  contract,
}: DesignSystemDocs) {
  return `${purpose}

### Design-system mapping

- **Classification:** ${classification}
- **Shadcn mapping:** ${shadcn.join(", ") || "Custom component"}

### Design contract

${contract}`;
}

export { designSystemDocs };

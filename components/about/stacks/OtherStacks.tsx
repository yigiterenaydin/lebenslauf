"use client";

interface Reference {
  name: string;
  email: string;
  phone: string;
  job: string;
}

const references: Reference[] = [
  {
    name: "Thomas Seinige",
    email: "thomas.seinige@schulen.zuerich.ch",
    phone: "Nach fragen",
    job: "Klassenlehrer",
  },
  {
    name: "Cyrill Lam",
    email: "zuerich@skema.ch",
    phone: "044 401 40 42",
    job: "Kung-Fu Lehrer",
  },
];

export const OtherStacks = () => (
  <div className="w-full max-w-2xl mx-auto my-0">
    <div className="flex flex-col gap-4">
      {references.map((ref) => (
        <div
          key={ref.email}
          className="border border-borderColor bg-tertiary rounded-md p-4 shadow hover:shadow-lg transition"
        >
          <p className="font-semibold text-xs text-white">{ref.name}</p>
          <p className="text-primary text-xs break-words mb-4">{ref.job}</p>
          <p className="text-gray-400 text-xs mt-2 break-all">
            <span className="font-medium">E-Mail:</span> {ref.email}
          </p>
          <p className="text-gray-400 text-xs">
            <span className="font-medium">Telefon:</span> {ref.phone}
          </p>
        </div>
      ))}
    </div>
  </div>
);

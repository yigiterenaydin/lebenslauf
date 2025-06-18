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

export const OtherStacks = () => {
  return (
    <div className="w-full flex flex-col gap-6 px-4">
      {references.map((ref) => (
        <div
          key={ref.email}
          className="flex flex-col gap-1 border border-borderColor bg-tertiary rounded-md p-4 shadow hover:shadow-lg transition w-full"
        >
          <div className="flex items-center gap-3">
            <span className="font-semibold text-base text-white">{ref.name}</span>
            <span className="text-sm text-gray-400 whitespace-nowrap">{ref.job}</span>
          </div>
          <div className="text-gray-400 text-sm break-all">
            <span className="font-medium">E-Mail:</span> {ref.email}
          </div>
          <div className="text-gray-400 text-sm">
            <span className="font-medium">Telefon:</span> {ref.phone}
          </div>
        </div>
      ))}
    </div>
  );
};

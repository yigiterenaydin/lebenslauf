"use client";

export const OtherStacks = () => {
  const references = [
    {
      name: "Thomas Seinige",
      job: "Klassenlehrer",
      email: "thomas.seinige@schulen.zuerich.ch",
      phone: "Nach fragen",
    },
    {
      name: "Cyrill Lam",
      job: "Kung-Fu Lehrer",
      email: "zuerich@skema.ch",
      phone: "044 401 40 42",
    },
  ];

  return (
    <div className="mt-10 w-full self-center flex flex-col items-center justify-center px-2">
      <div className="grid grid-cols-1 gap-8 w-full">
        {references.map((ref) => (
          <div
            key={ref.email}
            className="w-full max-w-xl mx-auto border border-borderColor bg-tertiary rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105 duration-300 hover:border-transparent group"
          >
            <div className="flex flex-col px-5 py-6">
              <p className="font-bold text-xl text-white mb-2">
                {ref.name}
              </p>
              <p className="text-primary text-base mb-2">{ref.job}</p>
              <p className="text-gray-400 text-sm break-all mb-1">
                <span className="font-medium">E-Mail:</span> {ref.email}
              </p>
              <p className="text-gray-400 text-sm">
                <span className="font-medium">Telefon:</span> {ref.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
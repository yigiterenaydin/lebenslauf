export const Journey = () => {
  const experiences = [
    {
      id: 1,
      title: "Kindergarten Döltschiweg",
      timespan: "Von August 2014 bis Juli 2016.",
      place: "Sammle meine ersten Erfahrungen",
    },
    {
      id: 2,
      place: "Lerne verschiedene Fächer kennen.",
      title: "Schule Küngenmatt",
      timespan: "Von August 2017 bis Juli 2023",
    },
     {
      id: 3,
      place: "Ich lerne schwierigere Fächer kennen.",
      title: "Schule Rebhügel",
      timespan: "Von August 2023 bis Heute",
    },
  ];

  return (
    <>
      <h1 className="text-base font-medium text-primary md:text-xl">
        Erfahrungen {" "}
        <span className="block font-bold text-transparent text-4xl mt-1 lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Meine Schulzeit und Zeugnisse
        </span>
      </h1>

      <hr className="w-58 my-3 p-1 bg-gradient-to-r from-purple-500 to-red-500 border-none rounded-sm" />

      <div className="grid lg:grid-cols-2 my-4 gap-4">
        {experiences.map((experience) => (
          <div
            key={experience.place}
            className="bg-tertiary border border-borderColor rounded-md p-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:shadow-lg cursor-pointer group">
            <p className="text-justify font-bold text-white text-lg col-span-2">
              {experience.place}
              <span className="block font-normal text-slate-200 mt-1 text-base group-hover:text-white">
                {experience.title}
              </span>
              <span className="block font-normal text-primary mt-1 text-sm group-hover:text-gray-200">
                {experience.timespan}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

"use client";

import Image from "next/image";
import { SiReact, SiPython, SiOpenai, SiSharp, SiUnity } from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoJava,
  BiLogoHtml5,
} from "react-icons/bi";

export const ProjectLists = () => {
  const projects = [
        {
      name: "Zürcher Kantonalbank Schnupperparcours KV Branche Bank",
      description:
        "Ich erhielt einen vielseitigen Einblick in die kaufmännische Ausbildung bei der Zürcher Kantonalbank, inklusive Tätigkeiten, Lehrablauf, Lernorte sowie Austausch mit Mitarbeitenden und Informationen zum Bewerbungsprozess..",
      link: "/certif/KBSP.pdf",
      img: "/project/KBSP.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-white w-7 h-7" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Zürcher Kantonalbank ",
      description:
        "Einblick in die Zürcher Kantonalbank und ihre Ausbildungswelt, erste Erfahrungen in der Informatik, Gestaltung einer einfachen Website mit HTML/CSS sowie Austausch mit Lernenden, Mitarbeitenden und Ausbildungsverantwortlichen.",
      link: "/certif/KB5.pdf",
      img: "/project/KB.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-white w-7 h-7" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-white w-7 h-7" />,
        },
      ],
    },
        {
      name: "UBS BANK ",
      description:
        "Ich erhielt einen spannenden Einblick in zentrale Aufgabenbereiche der UBS, lernte spielerisch bankspezifische Themen kennen und bekam Informationen zur Lehre und zum Rekrutierungsprozess, ergänzt durch Gespräche mit Lernenden und Mitarbeitenden.",
      link: "/certif/ubs.pdf",
      img: "/project/UBS.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-white w-7 h-7" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Kornhaus Verwaltungs AG ",
      description:
        "Ich erhielt einen spannenden Einblick in zentrale Aufgabenbereiche der Kornhaus Verwaltung.",
      link: "/certif/korn.pdf",
      img: "/project/KORN.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-white w-7 h-7" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Ergon Smart Software ",
      description:
        "Ich erhielt einen Einblick in die Applikationsentwicklung bei Ergon Informatik AG, lernte Projekte und Anforderungen kennen und konnte mich mit Lernenden austauschen.",
      link: "/certif/ergon.pdf",
      img: "/project/ERGON.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-white w-7 h-7" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "E. Weber & Cie AG  ",
      description:
        "Während des Schnuppertags erhielt ich einen vielseitigen Einblick in die kaufmännischen Abläufe eines großen Unternehmens – insbesondere in die Bereiche Kundendienst, Buchhaltung, Einkauf, Marketing und Verkauf.",
      link: "/certif/Eweber.pdf",
      img: "/project/EW.png",
      stacks: [
        {
          name: "C#",
          logo: <SiSharp className="text-white w-7 h-7" />,
        },
        {
          name: "Unity",
          logo: <SiUnity className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Zürcher KantonalbankInformationsveranstaltung KV Branche Bank Mediamatik.",
      description:
        "Ich erhielt einen Einblick in die Zürcher Kantonalbank, den Ablauf der KV- und Mediamatik-Lehre, lernte die drei Lernorte kennen und tauschte mich mit Lernenden und Ausbildungsverantwortlichen aus.",
      link: "/certif/KB4.pdf",
      img: "/project/KB4.png",
      stacks: [
        {
          name: "Java",
          logo: <BiLogoJava className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Sunrise GmbH",
      description:
        " Teilnahme am informationstag mit Fokus auf Einblicke in die Telekommunikationsbranche.",
      link: "/certif/Sun.pdf",
      img: "/project/SUN.png",
      stacks: [
        {
          name: "CSS",
          logo: <BiLogoCss3 className="text-white w-7 h-7" />,
        },
        {
          name: "JavaScript",
          logo: <BiLogoJavascript className="text-white w-7 h-7" />,
        },
        {
          name: "HTML",
          logo: <BiLogoHtml5 className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Zürcher Kantonalbank Informationsveranstaltung Informatik Entwicklung digitales Business",
      description:
        "Ich lernte die Zürcher Kantonalbank und ihre Ausbildungswelt kennen, erhielt Einblick in die IT- und EDB-Lehre, die drei Lernorte sowie den Bewerbungsprozess und konnte mich mit Lernenden und Ausbildungsverantwortlichen austauschen.",
      link: "/certif/KB2.pdf",
      img: "/project/KB3.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-white w-7 h-7" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-white w-7 h-7" />,
        },
      ],
    },
        {
      name: "EWZ Berufsinformations Veranstaltung",
      description:
        "Ich durfte einen spannenden Schnuppertag bei EWZ erleben. Dabei erhielt ich einen Einblick in die Tätigkeiten und Ausbildungswege des Unternehmens. Ich konnte Fragen stellen, mich mit Mitarbeitenden und Lernenden austauschen und habe ein besseres Verständnis für die verschiedenen Berufsmöglichkeiten bei EWZ gewonnen.",
      link: "/certif/EWZ.pdf",
      img: "/project/EWZ.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-white w-7 h-7" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Post Immobilien AG, Zürich",
      description:
        " Einblick in die kaufmännischen Abläufe eines grossen Unternehmens.",
      link: "/certif/kita.pdf",
      img: "/project/PO.png",
      stacks: [
        {
          name: "React",
          logo: <SiReact className="text-white w-7 h-7" />,
        },
        {
          name: "Tailwind CSS",
          logo: <BiLogoTailwindCss className="text-white w-7 h-7" />,
        },
        {
          name: "Javascript",
          logo: <BiLogoJavascript className="text-white w-7 h-7" />,
        },
        {
          name: "Typescript",
          logo: <BiLogoTypescript className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Kita Bärlis Oerlikon",
      description:
        " Unterstützung bei der Betreuung der Kinder (Baby bis 3 jährige). Hilfe beim Aufräumen und Organisieren von Materialien",
      link: "/certif/kita.pdf",
      img: "/project/KITA.png",
      stacks: [
        {
          name: "React",
          logo: <SiReact className="text-white w-7 h-7" />,
        },
        {
          name: "Tailwind CSS",
          logo: <BiLogoTailwindCss className="text-white w-7 h-7" />,
        },
        {
          name: "Javascript",
          logo: <BiLogoJavascript className="text-white w-7 h-7" />,
        },
        {
          name: "Typescript",
          logo: <BiLogoTypescript className="text-white w-7 h-7" />,
        },
      ],
    },

  ];

  // PDF ise direkt indir, değilse yeni sekmede aç
  const onHandleClick = (link: string) => {
    if (link.endsWith(".pdf")) {
      const aTag = document.createElement("a");
      aTag.href = link;
      aTag.setAttribute("download", "");
      aTag.setAttribute("target", "_blank");
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="mt-2 w-full self-center flex flex-col items-center justify-center">
      <span className="block font-bold text-transparent text-4xl mt-1 lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Portfolio
        </span>
     

      <hr className="w-96 my-3 p-1 bg-gradient-to-r from-purple-500 to-red-500 border-none rounded-sm" />

      <p className="text-primary text-base my-6 lg:text-xl text-center">
        Meine bisherigen Schnupperlehren
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 w-full lg:w-4/5">
        {projects.map((project) => (
          <div
            key={project.img}
            className="border border-borderColor bg-tertiary rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105 duration-300 hover:border-transparent hover:bg-orange-500 group">
            <div
              className="relative bg-black flex justify-center items-center border rounded-t-lg border-borderColor cursor-pointer group"
              onClick={() => onHandleClick(project.link)}>
              <Image
                src={project.img}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-72 object-cover rounded-t-lg group-hover:opacity-70 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
                  Dokument ansehen und herunterladen 🔗
                </span>
              </div>
            </div>
            <div className="flex flex-col px-5 py-4">
              <div className="flex items-center justify-between mb-4">
                <p className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {project.name}
                </p>
                <div className="flex gap-x-2">
                  {project.stacks.map((stack) => (
                    <div
                      key={stack.name}
                      className="w-10 h-10 bg-black border border-borderColor rounded-md flex items-center justify-center hover:border-pink-500 transition-all duration-300"
                      title={stack.name}>
                      {stack.logo}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-justify text-base">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
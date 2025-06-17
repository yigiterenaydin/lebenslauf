"use client";

import CustomButton from "../shared/CustomButton";
import Image from "next/image";

interface ICertif {
  name?: string;
  from?: string;
  issued?: string;
  credential?: string;
  img?: string;
  title: string;
  link: string;
}

export const Certificate = () => {
  const expertCerficiates = [
    {
      name: "Zweite Klasse der Sekundarschule",
      from: "Zeugnis des 1. Semesters der 2. Klasse der Sekundarschule",
      issued: "Ausgestellt im Februar 2025",
      credential: "",
      title: "Go to Credential Page💳",
      link: "/pdf/SekundarSchuleZeugnisse2sek.pdf",
      img: "/certif/Zeu21.png",
    },
    {
      name: "Erste Klasse der Sekundarschule",
      from: "Mein Zeugnisse des ersten Sekundarstufe",
      issued: "Ausgestellt im Jahr 2024",
      credential: "",
      title: "Go to Credential Page💳",
      link: "/pdf/SekundarSchuleZeugnisse1sek.pdf",
      img: "/certif/Zeu1.png",
    },
  ];

  // PDF veya linki direkt indir veya aç
  const handleDirectDownload = (certif: ICertif) => {
    const isPdf = certif.link.endsWith(".pdf");
    if (isPdf) {
      const aTag = document.createElement("a");
      aTag.href = certif.link;
      aTag.setAttribute("download", "");
      aTag.setAttribute("target", "_blank");
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    } else {
      window.open(certif.link, "_blank");
    }
  };

  return (
    <div className="mt-10 w-full self-center flex flex-col items-center justify-center">
      <h1 className="font-bold text-transparent text-3xl mt-3 lg:text-4xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        Meine Zeugnisse
      </h1>

      <p className="text-primary text-base my-3 lg:text-xl text-center">
        Zeugnisse, die ich während meiner Schulzeit erhalten habe.
      </p>

      <div className="grid md:grid-cols-2 my-3 w-full lg:w-5/6 gap-6">
        {expertCerficiates.map((expert) => (
          <div
            key={expert.img}
            className="md:mx-4 mb-6 md:mb-0 border border-borderColor bg-tertiary rounded-md hover:shadow-lg hover:border-transparent transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 group"
          >
            <div className="bg-black flex justify-center items-center border rounded-sm border-whites shadow-lg ">
              <Image
                src={expert.img}
                alt={expert.name || "Certificate"}
                width={400}
                height={300}
                className="w-full h-auto mx-auto rounded-sm"
              />
            </div>

            <div className="flex flex-col px-5">
              <p className="my-3 font-bold text-justify text-base lg:text-xl text-white group-hover:text-white">
                {expert.name}
              </p>
              <p className="mb-2 text-primary group-hover:text-white">
                {expert.from}
              </p>
              <p className="mb-2 text-primary group-hover:text-white">
                {expert.issued}
              </p>
              <p className="mb-2 text-primary group-hover:text-white">
                {expert.credential}
              </p>

              <CustomButton
                btnType="button"
                title="Zeugnis ansehen und herunterladen"
                containerStyles="w-full border-borderColor bg-black hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:shadow-lg trasition-all duration-300"
                textStyles="text-white"
                onClick={() => handleDirectDownload(expert)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
"use client";

import Swal from "sweetalert2";

import CustomButton from "../shared/CustomButton";

interface IContact {
  href: string;
  name: string;
  label: string;
}

export const Info = () => {
  const contacts = [
    {
      href: "https://github.com/yigiterenaydin",
      name: "GitHub",
      label: "Zu meinem Github-Profil gehen 🚀",
    },
    {
      href: "https://www.stadt-zuerich.ch/schulen/de/rebhuegel.html",
      name: "Rebhügel",
      label: "Zu meiner Schul-Webseite gehen⚡",
    },
  ];

  const instagram = {
    href: "https://www.instagram.com/eren_zhhh/",
    name: "Instagram",
    label: "Zu meinem Instagram-Profil gehen 🪐",
  };

  const onHandleClick = (contact: IContact) => {
    Swal.fire({
      title: contact.label,
      background: "#111",
      confirmButtonColor: "#000",
      showCloseButton: true,
      confirmButtonText: ` <a href=${contact.href} target="blank">  In neuem Tab öffnen!🔥 /a>`,
      icon: "info",
    });
  };

  return (
    <>
      <h1 className="text-base font-medium text-primary md:text-xl">
        Über mich{" "}
        <span className="block font-extrabold text-transparent text-4xl mt-1 lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Wer bin ich ?
        </span>
      </h1>

      <hr className="w-58 my-3 p-1 bg-gradient-to-r from-purple-500  to-red-500 border-none rounded-sm" />

      <div className=" lg:max-w-lg font-light text-primary text-lg leading-relaxed">
        <p className="my-3 text-gray-300 hover:text-white transition-colors duration-300">
          Ich bin Eren, zurzeit bin ich Schüler und besuche die zweite Klasse der Sekundarschule Zürich Rebhügel.
        </p>

        <p className="my-3 text-gray-300 hover:text-white transition-colors duration-300">
          Ich bin{" "}
          <span className=" text-pink-400  font-bold">
            {" "}
        Freundlich und höflich
          </span>{" "}
          mache zurzeit viele Schnupperlehren. Ich aktualisiere ständig meinen{" "}
          <span className="text-blue-400 font-bold">Lebenslauf </span> und{" "}
          <span className="text-green-400 font-bold">versuche, mir ein klares Bild von verschiedenen Berufen zu machen.</span>.
        Ich denke, dass mir der Beruf als KV-Mitarbeiter in einer Bank am meisten gefallen würde. {" "}
          <span className="text-yellow-400">Es wäre mein Wunsch,</span>,{" "}
          <span className="text-purple-400">in diesem Bereich</span>, eine Lehrstelle zu finden{" "}
          <span className="text-red-400">und diesen wichtigen Schritt</span>  in meinem Leben.
        </p>

        <p className="my-3 text-gray-300 hover:text-white transition-colors duration-300">
          <span>
            erfolgreich abzuschließen.{" "}
            <span className="text-teal-400 font-bold">
              Ich bin motiviert, 
            </span>
            . Neues zu lernen und freue mich auf die spannenden Möglichkeiten, die die Zukunft für mich bereithält. 🚀
          </span>
        </p>
      </div>

      <hr className="w-46 my-3 p-1 bg-gradient-to-r from-purple-500 to-red-500 border-none rounded-sm" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 lg:max-w-lg my-4 lg:my-0">
        {contacts.map((contact) => (
          <div key={contact.href}>
            <CustomButton
              btnType="submit"
              title={contact.name}
              containerStyles="!my-1 w-full border-none bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 shadow-md hover:shadow-lg transition-transform hover:scale-105"
              textStyles="text-white font-semibold"
              onClick={() => onHandleClick(contact)}
            />
          </div>
        ))}
        <div className="col-span-2 md:col-span-1">
          <CustomButton
            btnType="submit"
            title={instagram.name}
            to={instagram.href}
            containerStyles="!my-1 w-full border-none bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            textStyles="text-white font-semibold"
            onClick={() => onHandleClick(instagram)}
          />
        </div>
      </div>
    </>
  );
};

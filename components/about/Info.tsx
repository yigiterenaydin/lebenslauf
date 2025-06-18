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
    <div className="max-w-4xl">
      <h1 className="text-lg font-medium text-primary md:text-xl lg:text-2xl mb-2">
        Über mich{" "}
        <span className="block font-extrabold text-transparent text-5xl mt-3 mb-6 lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 leading-tight">
          Wer bin ich?
        </span>
      </h1>

      <div className="w-96 h-1 bg-gradient-to-r from-purple-500 to-red-500 rounded-full mb-8"></div>

      <div className="space-y-6 text-lg leading-relaxed">
        <p className="text-gray-300 hover:text-white transition-colors duration-300">
          Ich bin Eren, zurzeit bin ich Schüler und besuche die zweite Klasse der Sekundarschule Zürich Rebhügel.
        </p>

        <p className="text-gray-300 hover:text-white transition-colors duration-300">
          Ich bin{" "}
          <span className="text-pink-400 font-bold">
            freundlich und höflich
          </span>{" "}
          und mache zurzeit viele Schnupperlehren. Ich aktualisiere ständig meinen{" "}
          <span className="text-blue-400 font-bold">Lebenslauf</span> und{" "}
          <span className="text-green-400 font-bold">versuche, mir ein klares Bild von verschiedenen Berufen zu machen</span>.
          Ich denke, dass mir der Beruf als KV-Mitarbeiter in einer Bank am meisten gefallen würde.{" "}
          <span className="text-yellow-400 font-semibold">Es wäre mein Wunsch</span>,{" "}
          <span className="text-purple-400 font-semibold">in diesem Bereich</span>, eine Lehrstelle zu finden{" "}
          <span className="text-red-400 font-semibold">und diesen wichtigen Schritt</span> in meinem Leben.
        </p>

        <p className="text-gray-300 hover:text-white transition-colors duration-300">
          <span>
            erfolgreich abzuschließen.{" "}
            <span className="text-teal-400 font-bold">
              Ich bin motiviert,
            </span>{" "}
            Neues zu lernen und freue mich auf die spannenden Möglichkeiten, die die Zukunft für mich bereithält. 🚀
          </span>
        </p>
      </div>

      <div className="w-96 h-1 bg-gradient-to-r from-purple-500 to-red-500 rounded-full my-8"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl">
        {contacts.map((contact) => (
          <div key={contact.href}>
            <CustomButton
              btnType="submit"
              title={contact.name}
              containerStyles="!my-1 w-full border-none bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 shadow-md hover:shadow-lg transition-transform hover:scale-105 rounded-lg py-3"
              textStyles="text-white font-semibold"
              onClick={() => onHandleClick(contact)}
            />
          </div>
        ))}
        <div className="sm:col-span-2 lg:col-span-1">
          <CustomButton
            btnType="submit"
            title={instagram.name}
            to={instagram.href}
            containerStyles="!my-1 w-full border-none bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 rounded-lg py-3"
            textStyles="text-white font-semibold"
            onClick={() => onHandleClick(instagram)}
          />
        </div>
      </div>
    </div>
  );
};

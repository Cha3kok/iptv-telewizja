"use client";

import { useEffect, useState } from "react";

const notifications = [
  { flag: "🇵🇱", name: "Marek", city: "Warszawa", plan: "12 Miesięcy" },
  { flag: "🇵🇱", name: "Anna", city: "Kraków", plan: "6 Miesięcy" },
  { flag: "🇵🇱", name: "Piotr", city: "Gdańsk", plan: "24 Miesiące" },
  { flag: "🇵🇱", name: "Katarzyna", city: "Wrocław", plan: "3 Miesiące" },
  { flag: "🇵🇱", name: "Tomasz", city: "Łódź", plan: "12 Miesięcy" },
  { flag: "🇵🇱", name: "Monika", city: "Poznań", plan: "6 Miesięcy" },
  { flag: "🇵🇱", name: "Krzysztof", city: "Szczecin", plan: "24 Miesiące" },
  { flag: "🇵🇱", name: "Agnieszka", city: "Lublin", plan: "12 Miesięcy" },
  { flag: "🇵🇱", name: "Michał", city: "Katowice", plan: "3 Miesiące" },
  { flag: "🇵🇱", name: "Joanna", city: "Białystok", plan: "6 Miesięcy" },
  { flag: "🇬🇧", name: "Tomek", city: "Londyn", plan: "12 Miesięcy" },
  { flag: "🇬🇧", name: "Ola", city: "Manchester", plan: "24 Miesiące" },
  { flag: "🇩🇪", name: "Paweł", city: "Berlin", plan: "6 Miesięcy" },
  { flag: "🇩🇪", name: "Magda", city: "Hamburg", plan: "12 Miesięcy" },
  { flag: "🇳🇱", name: "Łukasz", city: "Amsterdam", plan: "12 Miesięcy" },
  { flag: "🇺🇸", name: "Radek", city: "Chicago", plan: "6 Miesięcy" },
  { flag: "🇨🇦", name: "Beata", city: "Toronto", plan: "12 Miesięcy" },
  { flag: "🇦🇺", name: "Bartek", city: "Sydney", plan: "24 Miesiące" },
];

function getMinutesAgo() {
  const options = [1, 2, 3, 5, 7, 10, 12, 15];
  return options[Math.floor(Math.random() * options.length)];
}

export default function SocialProof() {
  const [current, setCurrent] = useState<(typeof notifications)[0] | null>(null);
  const [visible, setVisible] = useState(false);
  const [minutesAgo, setMinutesAgo] = useState(3);

  useEffect(() => {
    let index = Math.floor(Math.random() * notifications.length);

    function showNext() {
      index = (index + 1) % notifications.length;
      setMinutesAgo(getMinutesAgo());
      setCurrent(notifications[index]);
      setVisible(true);

      // Hide after 4 seconds
      setTimeout(() => setVisible(false), 4000);
    }

    // First one after 5 seconds
    const first = setTimeout(showNext, 5000);

    // Then every 9 seconds
    const interval = setInterval(showNext, 9000);

    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  if (!current) return null;

  return (
    <div
      className={`fixed bottom-24 left-4 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-[#111111] border border-amber-500/20 rounded-2xl px-4 py-3 shadow-2xl shadow-black/60 flex items-center gap-3 max-w-[260px]">
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-lg flex-shrink-0">
          {current.flag}
        </div>

        <div className="min-w-0">
          <p className="text-white text-xs font-semibold leading-snug">
            {current.name} z {current.city}
          </p>
          <p className="text-amber-400 text-[11px] font-medium">
            zasubskrybował plan {current.plan}
          </p>
          <p className="text-zinc-500 text-[10px] mt-0.5">{minutesAgo} min temu</p>
        </div>

        {/* Pulse dot */}
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0 ml-auto" />
      </div>
    </div>
  );
}

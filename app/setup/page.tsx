import type { Metadata } from "next";
import SetupClient from "./SetupClient";

export const metadata: Metadata = {
  title: "Instrukcja instalacji — IPTV Telewizja",
  description:
    "Przewodniki krok po kroku dotyczące instalacji IPTV na Amazon Firestick, Smart TV, Android, iPhone, dekoderze MAG, Windows i Mac. Zacznij w mniej niż 5 minut.",
  openGraph: {
    title: "Instrukcja instalacji — IPTV Telewizja",
    description: "Uruchom IPTV w kilka minut na każdym urządzeniu.",
    url: "https://iptvtelewizja.com/setup",
  },
};

export default function SetupPage() {
  return <SetupClient />;
}

import type { Metadata } from "next";
import SetupClient from "./SetupClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { OG_IMAGE } from "../lib/site";

export const metadata: Metadata = {
  title: "Instrukcja instalacji IPTV",
  description:
    "Przewodniki krok po kroku dotyczące instalacji IPTV na Amazon Firestick, Smart TV, Android, iPhone, dekoderze MAG i Windows. Zacznij w mniej niż 5 minut.",
  alternates: { canonical: "/setup" },
  openGraph: {
    images: [OG_IMAGE],
    title: "Instrukcja instalacji IPTV — IPTV Telewizja",
    description: "Uruchom IPTV w kilka minut na każdym urządzeniu.",
    url: "/setup",
  },
};

export default function SetupPage() {
  return (
    <>
      <Navbar />
      <SetupClient />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

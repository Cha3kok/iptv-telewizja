import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Polityka zwrotów",
  description: "Polityka zwrotów IPTVTelewizja — poznaj swoje prawa i dowiedz się, jak złożyć wniosek o zwrot.",
  alternates: { canonical: "https://iptvtelewizja.com/refund-policy" },
};

export default function RefundPolicy() {
  return (
    <LegalPage
      badge="Prawne"
      title="Polityka zwrotów"
      subtitle="Chcemy, abyś był w pełni zadowolony. Oto jak działa nasz proces zwrotów."
      lastUpdated="1 stycznia 2025"
      sections={[
        {
          heading: "Najpierw darmowy test",
          body: "Gorąco zachęcamy wszystkich nowych klientów do skorzystania z darmowego testu 3-godzinnego przed zakupem subskrypcji. Pozwala to przetestować jakość strumienia, kompatybilność urządzeń i dostępność kanałów przed podjęciem decyzji. Do testu nie jest wymagana karta kredytowa.",
        },
        {
          heading: "Warunki zwrotu",
          body: [
            "Zwroty mogą być wnioskowane w ciągu 48 godzin od zakupu, jeśli usługa nie działa zgodnie z opisem.",
            "Zwroty nie będą udzielane w przypadku zmiany zdania po aktywacji i skorzystaniu z usługi.",
            "Zwroty nie będą udzielane, jeśli problem jest spowodowany Twoim połączeniem internetowym, niezgodnością urządzenia lub niezastosowaniem się do instrukcji konfiguracji.",
            "Odnowione zakupy są bezzwrotne po aktywacji.",
          ],
        },
        {
          heading: "Problemy z usługą",
          body: "Jeśli doświadczasz trwałych problemów technicznych, których nasz zespół wsparcia nie jest w stanie rozwiązać w ciągu 72 godzin od zgłoszenia, masz prawo do proporcjonalnego zwrotu za niewykorzystaną część subskrypcji. Poważnie traktujemy jakość usług i będziemy ciężko pracować, aby rozwiązać wszelkie problemy przed koniecznością zwrotu.",
        },
        {
          heading: "Jak złożyć wniosek o zwrot",
          body: [
            "Skontaktuj się z nami pod adresem goldengateiptv@gmail.com lub przez WhatsApp.",
            "Podaj dane swojego konta i opis problemu.",
            "Nasz zespół rozpatrzy Twój wniosek w ciągu 24 godzin.",
            "Zatwierdzone zwroty są przetwarzane w ciągu 5–10 dni roboczych na Twoją pierwotną metodę płatności.",
          ],
        },
        {
          heading: "Obciążenia zwrotne",
          body: "Zachęcamy do bezpośredniego kontaktu z nami przed wszczęciem procedury obciążenia zwrotnego w banku lub u dostawcy płatności. Dołożymy wszelkich starań, aby szybko i uczciwie rozwiązać wszelkie problemy. Fałszywe obciążenia zwrotne mogą skutkować trwałym zawieszeniem konta.",
        },
        {
          heading: "Kontakt",
          body: "W sprawie wniosków o zwrot lub pytań dotyczących rozliczeń skontaktuj się z naszym zespołem wsparcia pod adresem goldengateiptv@gmail.com lub przez WhatsApp: +212 707 711 512. Odpowiadamy w ciągu 24 godzin.",
        },
      ]}
    />
  );
}

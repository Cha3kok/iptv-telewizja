import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Przeczytaj warunki i zasady korzystania z usługi IPTVTelewizja.",
  alternates: { canonical: "https://iptvtelewizja.com/terms-of-service" },
};

export default function TermsOfService() {
  return (
    <LegalPage
      badge="Prawne"
      title="Regulamin"
      subtitle="Prosimy o uważne zapoznanie się z niniejszymi warunkami przed skorzystaniem z usługi."
      lastUpdated="1 stycznia 2025"
      sections={[
        {
          heading: "1. Akceptacja warunków",
          body: "Subskrybując lub korzystając z usługi IPTVTelewizja, wyrażasz zgodę na przestrzeganie niniejszego Regulaminu. Jeśli nie zgadzasz się, nie korzystaj z usługi.",
        },
        {
          heading: "2. Opis usługi",
          body: "IPTVTelewizja świadczy usługę strumieniowania telewizji internetowej (IPTV) zapewniającą dostęp do kanałów na żywo, treści wideo na żądanie i telewizji z możliwością odtwarzania przez internet. Usługa jest świadczona na zasadzie subskrypcji.",
        },
        {
          heading: "3. Dopuszczalne użytkowanie",
          body: [
            "Usługa jest przeznaczona wyłącznie do użytku osobistego, niekomercyjnego.",
            "Nie możesz odsprzedawać, redystrybuować ani sublicencjonować dostępu do usługi bez pisemnej zgody.",
            "Nie możesz używać usługi do nagrywania, kopiowania ani dystrybucji treści chronionych prawem autorskim.",
            "Nie możesz udostępniać danych uwierzytelniających konta użytkownikom spoza swojego gospodarstwa domowego.",
            "Nie możesz próbować obejść żadnych technicznych środków ochrony.",
          ],
        },
        {
          heading: "4. Subskrypcje i płatności",
          body: "Subskrypcje są rozliczane z góry za wybrany okres (1, 3, 6, 12 lub 24 miesiące). Wszystkie płatności są bezzwrotne, z wyjątkiem przypadków opisanych w naszej Polityce zwrotów. Zastrzegamy sobie prawo do zmiany cen z 30-dniowym wyprzedzeniem.",
        },
        {
          heading: "5. Dostępność usługi",
          body: "Dążymy do utrzymania 99,9% czasu sprawności, ale nie gwarantujemy nieprzerwanej usługi. Planowane konserwacje, zdarzenia siły wyższej lub okoliczności poza naszą kontrolą mogą powodować tymczasowe przerwy. Nie ponosimy odpowiedzialności za przerwy w świadczeniu usług wykraczające poza naszą kontrolę.",
        },
        {
          heading: "6. Bezpieczeństwo konta",
          body: "Jesteś odpowiedzialny za zachowanie poufności danych uwierzytelniających konta. Niezwłocznie powiadom nas, jeśli podejrzewasz nieautoryzowane użycie Twojego konta. Nie ponosimy odpowiedzialności za straty wynikające z nieautoryzowanego dostępu do konta.",
        },
        {
          heading: "7. Własność intelektualna",
          body: "Wszystkie treści strumieniowane przez usługę są własnością odpowiednich nadawców i właścicieli praw. IPTVTelewizja nie rości sobie własności do treści stron trzecich. Marka IPTVTelewizja, logo i treści strony internetowej stanowią naszą własność intelektualną.",
        },
        {
          heading: "8. Ograniczenie odpowiedzialności",
          body: "W maksymalnym zakresie dozwolonym przez prawo, IPTVTelewizja nie ponosi odpowiedzialności za żadne pośrednie, przypadkowe, szczególne ani wynikowe szkody wynikające z korzystania z usługi. Nasza całkowita odpowiedzialność wobec Ciebie nie przekroczy kwoty zapłaconej w ciągu 30 dni poprzedzających jakiekolwiek roszczenie.",
        },
        {
          heading: "9. Rozwiązanie umowy",
          body: "Zastrzegamy sobie prawo do zawieszenia lub zamknięcia Twojego konta bez powiadomienia w przypadku naruszenia niniejszych warunków. Możesz anulować subskrypcję w dowolnym momencie za pośrednictwem naszych kanałów wsparcia.",
        },
        {
          heading: "10. Prawo właściwe",
          body: "Niniejszy regulamin podlega prawu polskiemu i jest interpretowany zgodnie z nim. Wszelkie spory podlegają wyłącznej jurysdykcji sądów polskich.",
        },
      ]}
    />
  );
}

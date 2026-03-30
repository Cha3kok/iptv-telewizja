import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Dowiedz się, jak IPTVTelewizja zbiera, wykorzystuje i chroni Twoje dane osobowe.",
  alternates: { canonical: "https://iptvtelewizja.com/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      badge="Prawne"
      title="Polityka prywatności"
      subtitle="Jak zbieramy, wykorzystujemy i chronimy Twoje dane osobowe."
      lastUpdated="1 stycznia 2025"
      sections={[
        {
          heading: "1. Informacje, które zbieramy",
          body: [
            "Dane konta: imię i adres email przy rejestracji lub kontakcie z nami.",
            "Dane płatności: przetwarzane bezpiecznie przez naszych dostawców płatności. Nie przechowujemy danych kart.",
            "Informacje o urządzeniu i połączeniu: adres IP, typ urządzenia i wersja aplikacji do rozwiązywania problemów.",
            "Dane użytkowania: oglądane kanały i dzienniki połączeń, używane do poprawy jakości usługi.",
          ],
        },
        {
          heading: "2. Jak wykorzystujemy Twoje dane",
          body: [
            "Do świadczenia i utrzymania Twojej subskrypcji IPTV.",
            "Do wysyłania komunikatów związanych z usługą (aktywacja konta, odnowienia).",
            "Do rozwiązywania problemów technicznych i ulepszania naszej usługi.",
            "Do wypełniania obowiązków prawnych.",
          ],
        },
        {
          heading: "3. Udostępnianie danych",
          body: "Nie sprzedajemy, nie handlujemy ani nie wynajmujemy Twoich danych osobowych stronom trzecim. Możemy udostępniać dane zaufanym dostawcom usług, którzy pomagają w obsłudze naszej usługi (np. procesorzy płatności, dostawcy hostingu), na podstawie ścisłych umów poufności.",
        },
        {
          heading: "4. Okres przechowywania danych",
          body: "Przechowujemy Twoje dane osobowe tak długo, jak Twoje konto jest aktywne lub jak jest to potrzebne do świadczenia usług. Możesz w dowolnym momencie zażądać usunięcia swoich danych, kontaktując się z nami.",
        },
        {
          heading: "5. Pliki cookie",
          body: "Nasza strona używa niezbędnych plików cookie do prawidłowego działania oraz opcjonalnych plików cookie analitycznych, aby zrozumieć, jak odwiedzający korzystają z naszej strony. Możesz wyłączyć nieistotne pliki cookie w ustawieniach przeglądarki.",
        },
        {
          heading: "6. Twoje prawa (RODO)",
          body: [
            "Prawo dostępu: zażądaj kopii danych osobowych, które przechowujemy na Twój temat.",
            "Prawo do sprostowania: zażądaj korekty nieprawidłowych danych.",
            "Prawo do usunięcia: zażądaj usunięcia swoich danych.",
            "Prawo do ograniczenia przetwarzania: zażądaj ograniczenia sposobu wykorzystania Twoich danych.",
            "Prawo do przenoszalności: otrzymaj swoje dane w przenośnym formacie.",
            "Prawo do sprzeciwu: sprzeciwienie się przetwarzaniu opartemu na naszych uzasadnionych interesach.",
          ],
        },
        {
          heading: "7. Bezpieczeństwo",
          body: "Wdrażamy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych osobowych przed nieautoryzowanym dostępem, zmianą, ujawnieniem lub zniszczeniem. Wszystkie połączenia z naszą usługą są szyfrowane przez SSL/TLS.",
        },
        {
          heading: "8. Kontakt",
          body: "W przypadku pytań dotyczących prywatności lub chęci skorzystania ze swoich praw, skontaktuj się z nami pod adresem goldengateiptv@gmail.com. Odpowiemy w ciągu 30 dni.",
        },
      ]}
    />
  );
}

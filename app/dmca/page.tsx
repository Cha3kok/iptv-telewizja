import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { SUPPORT_EMAIL } from "../lib/contact";

export const metadata: Metadata = {
  title: "DMCA — zgłaszanie naruszeń praw autorskich",
  description:
    "Polityka DMCA IPTV Telewizja. Dowiedz się, jak zgłosić naruszenie praw autorskich lub złożyć kontrzgłoszenie.",
  alternates: { canonical: "/dmca" },
};

export default function DmcaPage() {
  return (
    <LegalPage
      badge="Prawne"
      title="Polityka DMCA"
      subtitle="Szanujemy prawa autorskie i reagujemy na każde prawidłowo złożone zgłoszenie naruszenia."
      lastUpdated="3 października 2026"
      sections={[
        {
          heading: "1. Nasze stanowisko",
          body: "IPTV Telewizja szanuje własność intelektualną innych i oczekuje tego samego od swoich użytkowników. Rozpatrujemy zgłoszenia naruszeń zgodnie z amerykańską ustawą Digital Millennium Copyright Act (DMCA, 17 U.S.C. § 512), unijnym aktem o usługach cyfrowych (DSA) oraz polską ustawą o prawie autorskim i prawach pokrewnych. Po otrzymaniu prawidłowego zgłoszenia niezwłocznie usuwamy lub blokujemy dostęp do wskazanych materiałów.",
        },
        {
          heading: "2. Jak złożyć zgłoszenie naruszenia",
          body: [
            "Własnoręczny lub elektroniczny podpis właściciela praw autorskich albo osoby upoważnionej do działania w jego imieniu.",
            "Wskazanie utworu chronionego prawem autorskim, którego dotyczy zgłoszenie (lub listy utworów, jeśli zgłoszenie obejmuje kilka z nich).",
            "Wskazanie materiału, który ma naruszać prawa, wraz z informacjami pozwalającymi nam go zlokalizować — np. adres URL, nazwa strumienia lub zrzut ekranu.",
            "Twoje dane kontaktowe: imię i nazwisko lub nazwa firmy, adres, numer telefonu i adres e-mail.",
            "Oświadczenie, że w dobrej wierze uważasz, iż korzystanie z materiału we wskazany sposób nie jest dozwolone przez właściciela praw, jego przedstawiciela ani przez prawo.",
            "Oświadczenie, że informacje w zgłoszeniu są prawdziwe oraz — pod rygorem odpowiedzialności za składanie fałszywych oświadczeń — że jesteś właścicielem praw lub jesteś upoważniony do działania w jego imieniu.",
          ],
        },
        {
          heading: "3. Gdzie wysłać zgłoszenie",
          body: `Zgłoszenia prosimy kierować na adres e-mail ${SUPPORT_EMAIL} z tematem „Zgłoszenie DMCA”. Potwierdzimy otrzymanie zgłoszenia w ciągu 48 godzin. Zgłoszenia niekompletne mogą wymagać uzupełnienia, zanim będziemy mogli podjąć działanie.`,
        },
        {
          heading: "4. Co dzieje się po zgłoszeniu",
          body: [
            "Weryfikujemy, czy zgłoszenie zawiera wszystkie wymagane elementy.",
            "Niezwłocznie usuwamy lub blokujemy dostęp do wskazanego materiału.",
            "Informujemy użytkownika lub dostawcę, którego dotyczy zgłoszenie, i przekazujemy mu jego kopię.",
            "Prowadzimy rejestr zgłoszeń, aby identyfikować powtarzające się naruszenia.",
          ],
        },
        {
          heading: "5. Kontrzgłoszenie",
          body: [
            "Jeśli uważasz, że materiał został usunięty omyłkowo lub w wyniku błędnej identyfikacji, możesz złożyć kontrzgłoszenie zawierające:",
            "Twój podpis własnoręczny lub elektroniczny.",
            "Wskazanie usuniętego materiału i miejsca, w którym był dostępny przed usunięciem.",
            "Oświadczenie, pod rygorem odpowiedzialności za składanie fałszywych oświadczeń, że w dobrej wierze uważasz, iż materiał został usunięty omyłkowo lub w wyniku błędnej identyfikacji.",
            "Twoje imię i nazwisko, adres, numer telefonu oraz zgodę na właściwość sądu dla Twojego miejsca zamieszkania.",
            "Po otrzymaniu prawidłowego kontrzgłoszenia przekażemy je osobie zgłaszającej. Materiał może zostać przywrócony po 10–14 dniach roboczych, chyba że zgłaszający poinformuje nas o wszczęciu postępowania sądowego.",
          ],
        },
        {
          heading: "6. Powtarzające się naruszenia",
          body: "Konta użytkowników, którzy wielokrotnie naruszają prawa autorskie, zostaną zawieszone lub trwale zamknięte, zgodnie z naszym Regulaminem.",
        },
        {
          heading: "7. Fałszywe zgłoszenia",
          body: "Osoba, która świadomie wprowadza w błąd, twierdząc, że materiał narusza prawa autorskie (lub że został usunięty omyłkowo), może ponosić odpowiedzialność za powstałe szkody, w tym koszty i wynagrodzenie pełnomocników. Przed złożeniem zgłoszenia upewnij się, że masz do tego podstawy — w razie wątpliwości skonsultuj się z prawnikiem.",
        },
      ]}
    />
  );
}

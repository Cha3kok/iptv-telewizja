export type WhoIsItForItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  text: string;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  period: string;
  badge?: string;
  highlight: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  whatsappMessage: string;
  whoIsItFor: WhoIsItForItem[];
  faq: FaqItem[];
  testimonials: Testimonial[];
};

export const products: Product[] = [
  {
    slug: "1-miesiac-iptv-telewizja",
    name: "1 Miesiąc IPTV Telewizja",
    price: 15,
    period: "jednorazowa płatność",
    highlight: false,
    metaTitle: "1 Miesiąc IPTV Telewizja — €15 | 50 000+ kanałów, 4K | IPTVTelewizja",
    metaDescription:
      "Uzyskaj 1 miesiąc IPTV Telewizja za zaledwie €15. 50 000+ kanałów na żywo, 4K Ultra HD, 7-dniowy catch-up, zero zacięć. Bez umowy. Natychmiastowa aktywacja. Dostępny darmowy test 3h.",
    h1: "1 Miesiąc IPTV Telewizja — €15 jednorazowa płatność",
    heroSubtitle:
      "Idealny sposób na wypróbowanie IPTV Telewizja bez ryzyka. Pełny dostęp do 50 000+ kanałów na żywo, streaming 4K i 7-dniowy catch-up TV za zaledwie €15. Bez umów, bez opłat cyklicznych.",
    whatsappMessage: "iptvtelewizja.com - Chciałbym subskrybować plan 1 Miesiąc IPTV Telewizja (€15)",
    whoIsItFor: [
      {
        title: "Nowi użytkownicy IPTV",
        description:
          "Nie jesteś pewien, czy IPTV jest dla Ciebie? Plan miesięczny daje Ci pełny miesiąc na poznanie 50 000+ kanałów, przetestowanie strumieni 4K i odkrycie, jak IPTV wypada w porównaniu z obecną konfiguracją TV — bez żadnego zobowiązania.",
      },
      {
        title: "Polacy za granicą na krótki pobyt",
        description:
          "Przyjechałeś do pracy lub na wakacje i chcesz oglądać polską telewizję? Uzyskaj pełny dostęp do polskich kanałów — TVP, Polsat, TVN i wszystkich głównych kanałów sportowych — przez cały czas pobytu. Bez konieczności rejestracji w drogich pakietach kablowych.",
      },
      {
        title: "Widzowie sezonowi lub eventowi",
        description:
          "Chcesz dostępu na konkretne wydarzenie — turniej sportowy, finale serialu lub świąteczną ramówkę? Jeden miesiąc IPTV Telewizja idealnie Cię obsługuje, bez wiązania się z dłuższym zobowiązaniem.",
      },
    ],
    faq: [
      {
        q: "Czy plan miesięczny naprawdę nie ma umowy?",
        a: "Tak, całkowicie. Płacisz €15 jednorazowo i uzyskujesz dostęp dokładnie na 30 dni. Nie ma automatycznego odnawiania, opłaty cyklicznej ani potrzeby anulowania. Gdy miesiąc wygaśnie, po prostu się kończy — Ty decydujesz, czy odnowić.",
      },
      {
        q: "Czy mogę przejść na dłuższy plan po zakończeniu miesiąca?",
        a: "Oczywiście. Po zakończeniu okresu miesięcznego możesz subskrybować dowolny z naszych dłuższych planów — 3, 6, 12 lub 24 miesiące. Wyślij do nas wiadomość na WhatsApp, a skonfigurujemy Ci wybrany plan.",
      },
      {
        q: "Czy plan miesięczny obejmuje te same kanały co dłuższe plany?",
        a: "Tak — wszystkie plany obejmują pełną ofertę kanałów. Otrzymujesz 50 000+ kanałów na żywo, 200 000+ filmów VOD, jakość 4K, 7-dniowy catch-up i wszystkie funkcje. Jedyna różnica między planami to czas trwania i cena miesięczna.",
      },
      {
        q: "Jak szybko uzyskam dostęp po płatności?",
        a: "Aktywacja jest natychmiastowa. Po potwierdzeniu płatności wysyłamy Twoje dane M3U i przewodnik konfiguracji przez WhatsApp w ciągu kilku minut — zazwyczaj poniżej 10 minut, przez całą dobę.",
      },
      {
        q: "Czy jest zwrot, jeśli nie jestem zadowolony?",
        a: "Tak. Oferujemy 7-dniową gwarancję zwrotu na wszystkich planach. Jeśli z jakiegokolwiek powodu nie jesteś zadowolony w ciągu pierwszych 7 dni, skontaktuj się z nami na WhatsApp, a dokonamy zwrotu bez pytań.",
      },
    ],
    testimonials: [
      {
        name: "Marek W.",
        city: "Warszawa",
        rating: 5,
        text: "Chciałem przetestować IPTV przed podjęciem decyzji i plan miesięczny był idealny. Jakość obrazu na Polsat Sport była naprawdę lepsza niż moja stara kablówka. Od tamtej pory przeszedłem na plan 6-miesięczny.",
      },
      {
        name: "Kasia S.",
        city: "Kraków",
        rating: 5,
        text: "Zarejestrowałam się na miesiąc, będąc za granicą. Konfiguracja zajęła około 5 minut i miałam setki kanałów do oglądania. Świetna wartość za €15 — na pewno subskrybuję ponownie.",
      },
      {
        name: "Piotr H.",
        city: "Gdańsk",
        rating: 5,
        text: "Używałem planu miesięcznego do oglądania Ligi Mistrzów. Zero zacięć na każdym meczu. Wsparcie było szybkie, gdy miałem pytanie w pierwszym dniu.",
      },
    ],
  },
  {
    slug: "3-miesiace-iptv-telewizja",
    name: "3 Miesiące IPTV Telewizja",
    price: 35,
    period: "jednorazowa płatność",
    highlight: false,
    metaTitle: "3 Miesiące IPTV Telewizja — €35 | Oszczędź vs miesięczny | IPTVTelewizja",
    metaDescription:
      "3 miesiące IPTV Telewizja za €35 — to mniej niż €12/miesiąc. 50 000+ kanałów, 4K Ultra HD, 7-dniowy catch-up. Bez umowy, natychmiastowa aktywacja. Wypróbuj za darmo przez 3 godziny.",
    h1: "3 Miesiące IPTV Telewizja — €35 jednorazowa płatność",
    heroSubtitle:
      "Trzy miesiące premium IPTV Telewizja za zaledwie €35 — oszczędzasz €10 vs plan miesięczny. Idealny dla okazjonalnych widzów, którzy chcą niezawodnego dostępu bez kosztów długoterminowej subskrypcji.",
    whatsappMessage: "iptvtelewizja.com - Chciałbym subskrybować plan 3 Miesiące IPTV Telewizja (€35)",
    whoIsItFor: [
      {
        title: "Okazjonalni widzowie telewizji",
        description:
          "Nie oglądasz telewizji każdego dnia, ale kiedy to robisz, oczekujesz jakości. Plan 3-miesięczny daje Ci pełny dostęp do 50 000+ kanałów i 200 000+ filmów VOD przy koszcie miesięcznym niższym niż plany miesięczne, bez zobowiązania na pół roku lub dłużej.",
      },
      {
        title: "Studenci i życie studenckie",
        description:
          "Semestr na uczelni trwa około trzech miesięcy — podobnie jak ten plan. Pokryj cały semestr kanałami sportowymi na żywo, rozrywką i treściami VOD. Idealny dla domów studenckich, gdzie wszyscy chcą porządnej telewizji bez drogiej kablówki.",
      },
      {
        title: "Polacy pracujący za granicą",
        description:
          "Wyjechałeś za granicą na kilka miesięcy? Ten plan utrzymuje Cię w kontakcie z polską telewizją — TVP, Polsat, TVN, Canal+ — gdziekolwiek jesteś na świecie. Nasza usługa działa globalnie bez VPN.",
      },
    ],
    faq: [
      {
        q: "Ile oszczędzam na planie 3-miesięcznym vs miesięczny?",
        a: "Przy €35 za 3 miesiące płacisz nieco poniżej €11,67 miesięcznie. Porównaj to z planem miesięcznym za €15 — oszczędzasz €10 w tym samym okresie.",
      },
      {
        q: "Czy kilka osób w moim domu może korzystać z tej samej subskrypcji?",
        a: "Tak. Nasze plany obsługują od 1 do 4 jednoczesnych połączeń. Możesz oglądać na telewizorze, partner na tablecie, a dzieci na telefonie — wszystko jednocześnie, z tej samej subskrypcji.",
      },
      {
        q: "Czy po 3 miesiącach stracę dostęp lub zostanę automatycznie obciążony?",
        a: "Nie ma automatycznych odnowień. Gdy minie 3 miesiące, Twój dostęp po prostu wygasa. Możemy wysłać Ci przypomnienie o odnowieniu, ale nigdy nie zostaniesz obciążony bez wyraźnej prośby.",
      },
      {
        q: "Co się stanie, jeśli mam problemy techniczne w ciągu 3 miesięcy?",
        a: "Nasze wsparcie WhatsApp 24/7 jest dostępne przez całą subskrypcję. Większość problemów jest rozwiązywana w ciągu kilku minut. Oferujemy również 7-dniową gwarancję zwrotu, jeśli z jakiegokolwiek powodu nie jesteś zadowolony.",
      },
    ],
    testimonials: [
      {
        name: "Anna R.",
        city: "Wrocław",
        rating: 5,
        text: "Plan 3-miesięczny był dokładnie tym, czego potrzebowałam — jestem studentką i chciałam telewizji na semestr. Mnóstwo kanałów, doskonałe relacje sportowe i przewodnik konfiguracji był bardzo przejrzysty. Warte każdego grosza.",
      },
      {
        name: "Tomasz K.",
        city: "Poznań",
        rating: 5,
        text: "Byłem sceptyczny, ale darmowy test mnie przekonał. Zarejestrowałem się na 3 miesiące i nie miałem żadnych problemów. TVP, Polsat, wszystkie kanały sportowe — wszystko działa doskonale.",
      },
      {
        name: "Monika W.",
        city: "Łódź",
        rating: 4,
        text: "Dobra wartość na 3 miesiące. Funkcja catch-up TV jest naprawdę przydatna — pracuję na zmiany, więc nigdy nie mogę oglądać czegoś na żywo. Możliwość cofnięcia się o 7 dni to przełom. Solidna usługa.",
      },
    ],
  },
  {
    slug: "6-miesiecy-iptv-telewizja",
    name: "6 Miesięcy IPTV Telewizja",
    price: 45,
    period: "jednorazowa płatność",
    badge: "Najpopularniejszy",
    highlight: true,
    metaTitle: "6 Miesięcy IPTV Telewizja — €45 | Najpopularniejszy plan | IPTVTelewizja",
    metaDescription:
      "6 miesięcy IPTV Telewizja za zaledwie €45 — tylko €7,50/miesiąc. Najpopularniejszy plan. 50 000+ kanałów, 4K Ultra HD, 7-dniowy catch-up. Natychmiastowa konfiguracja.",
    h1: "6 Miesięcy IPTV Telewizja — €45 jednorazowa płatność",
    heroSubtitle:
      "Nasz najpopularniejszy plan z dobrego powodu. Sześć miesięcy premium IPTV Telewizja za zaledwie €45 — to €7,50 miesięcznie. Idealny balans oszczędności i elastyczności dla regularnych widzów.",
    whatsappMessage: "iptvtelewizja.com - Chciałbym subskrybować plan 6 Miesięcy IPTV Telewizja (€45)",
    whoIsItFor: [
      {
        title: "Regularni widzowie telewizji",
        description:
          "Oglądasz telewizję większość wieczorów i weekendów. Chcesz niezawodnego dostępu do polskich kanałów, sportu i rozrywki bez płacenia cen kablówki. Przy €7,50/miesiąc plan 6-miesięczny to idealne miejsce — świetne oszczędności, nadal wystarczająco elastyczny.",
      },
      {
        title: "Kibice śledzący sezon sportowy",
        description:
          "Ekstraklasa, Liga Mistrzów, Formuła 1 — plan 6-miesięczny pokrywa kluczowy środek sezonu sportowego włącznie z pucharami i walką o mistrzostwo. Dodaj drugi plan 6-miesięczny, aby pokryć resztę.",
      },
      {
        title: "Rodziny rezygnujące z kablówki",
        description:
          "Dla rodzin myślących o porzuceniu kablówki, 6 miesięcy to idealny okres próbny. Wystarczająco długo, aby właściwie ocenić, czy IPTV spełnia potrzeby całego gospodarstwa domowego — kanały dziecięce, sport, seriale, wiadomości — przed dłuższym zobowiązaniem.",
      },
    ],
    faq: [
      {
        q: "Dlaczego plan 6-miesięczny jest najpopularniejszy?",
        a: "Oferuje najlepszy balans oszczędności i elastyczności. Przy €7,50 miesięcznie oszczędzasz 50% vs plan miesięczny, ale nie zobowiązujesz się na cały rok z góry. Większość klientów, którzy go wypróbują, albo odnawia na kolejne 6 miesięcy, albo przechodzi na plan 12-miesięczny.",
      },
      {
        q: "Czy plan 6-miesięczny obsługuje streaming 4K?",
        a: "Tak — wszystkie plany obejmują pełen zakres jakości. Tam, gdzie kanały nadają w 4K UHD, otrzymasz 4K. Gdzie nadają w FHD lub HD, otrzymasz te formaty. Jakość nigdy nie jest sztucznie ograniczana na żadnym planie.",
      },
      {
        q: "Czy mogę korzystać z usługi w innym kraju przez część 6 miesięcy?",
        a: "Absolutnie. Nasza usługa działa globalnie — Polacy w Wielkiej Brytanii, Niemczech, Australii, Kanadzie — gdziekolwiek jesteś, Twoje kanały podróżują z Tobą. VPN nie jest wymagany.",
      },
      {
        q: "Jak działa 7-dniowy catch-up na tym planie?",
        a: "Catch-up TV pozwala odtwarzać dowolny program z ostatnich 7 dni na obsługiwanych kanałach. Przeglądaj przewodnik EPG, znajdź to, co przegapiłeś, i odtwórz na żądanie. Działa na wszystkich urządzeniach — TV, telefon, tablet lub laptop.",
      },
      {
        q: "Co zrobić, jeśli chcę dodać drugie połączenie urządzenia?",
        a: "Wszystkie plany obejmują obsługę wielu urządzeń (1-4 połączenia). Jeśli chcesz podłączyć dodatkowe urządzenia jednocześnie, daj nam znać przy subskrypcji. Skonfigurujemy Twoją subskrypcję dla potrzebnej liczby ekranów.",
      },
    ],
    testimonials: [
      {
        name: "Krzysztof B.",
        city: "Katowice",
        rating: 5,
        text: "Jestem na planie 6-miesięcznym od ponad roku — ciągle go odnawiam. Polsat Sport w 4K bez zacięć. Znajomi nie mogą uwierzyć, ile oszczędzam. Powinienem był zmienić lata temu.",
      },
      {
        name: "Agnieszka F.",
        city: "Gdańsk",
        rating: 5,
        text: "Zrezygnowałam z kablówki po 8 latach i naprawdę jej nie brakuje. Wszystko, co oglądałam, jest tu, plus dużo więcej. Cała rodzina korzysta — różne urządzenia, różne pokoje, bez problemów.",
      },
      {
        name: "Łukasz M.",
        city: "Warszawa",
        rating: 5,
        text: "Konfiguracja zajęła mniej niż 10 minut na moim Firesticku. Wybór kanałów zagranicznych jest niesamowity. Cena 6-miesięczna jest nie do pobicia. Obsługa klienta odpowiedziała w ciągu minut na WhatsApp.",
      },
    ],
  },
  {
    slug: "12-miesiecy-iptv-telewizja",
    name: "12 Miesięcy IPTV Telewizja",
    price: 60,
    period: "jednorazowa płatność",
    highlight: false,
    metaTitle: "12 Miesięcy IPTV Telewizja — €60 | Tylko €5/miesiąc | IPTVTelewizja",
    metaDescription:
      "12 miesięcy IPTV Telewizja za zaledwie €60 — to €5 miesięcznie. Pełny rok 50 000+ kanałów, streaming 4K, 7-dniowy catch-up. Najlepsza wartość dla zaangażowanych widzów. Natychmiastowa konfiguracja.",
    h1: "12 Miesięcy IPTV Telewizja — €60 jednorazowa płatność",
    heroSubtitle:
      "Pełny rok premium IPTV Telewizja za zaledwie €60. Przy €5 miesięcznie, to plan dla widzów, którzy wiedzą, że pokochali IPTV i chcą gwarantowanego dostępu przez cały rok.",
    whatsappMessage: "iptvtelewizja.com - Chciałbym subskrybować plan 12 Miesięcy IPTV Telewizja (€60)",
    whoIsItFor: [
      {
        title: "Zaangażowane gospodarstwa domowe",
        description:
          "Ty i Twoja rodzina oglądacie telewizję każdego dnia. Już próbowałeś IPTV i wiesz, że działa dla Ciebie. Plan 12-miesięczny daje Ci cały rok nieprzerwanego dostępu za zaledwie €60 — bez żadnej administracji przez 12 miesięcy.",
      },
      {
        title: "Zagorzali kibice sportowi",
        description:
          "Pełny rok obejmuje każdy mecz Ekstraklasy, Ligę Mistrzów, Formułę 1, Wimbledon, olimpiadę i każdą galę bokserską. Nie musisz myśleć o odnawianiu w środku sezonu — wystarczy subskrybować raz i masz na cały rok.",
      },
      {
        title: "Rodziny szukające najlepszej wartości",
        description:
          "Dla rodzin z dziećmi subskrypcja przez cały rok za €5 miesięcznie jest znacznie tańsza niż jakikolwiek odpowiednik kablowy lub satelitarny. Kanały dziecięce, treści edukacyjne, filmy rodzinne i sport na żywo — wszystko objęte dla każdego członka rodziny przez cały rok.",
      },
    ],
    faq: [
      {
        q: "Czy €5/miesiąc to naprawdę całkowity koszt bez ukrytych opłat?",
        a: "Tak. €60 to kompletny koszt — płacisz raz i uzyskujesz 365 dni dostępu. Brak opłaty konfiguracyjnej, brak kosztu sprzętu, brak opłaty instalacyjnej, brak ukrytych dodatków. To, co widzisz, to to, co płacisz.",
      },
      {
        q: "Co się stanie, gdy moje 12 miesięcy wygaśnie?",
        a: "Twoja subskrypcja po prostu się kończy. Nie ma automatycznego odnawiania ani niespodziewanych opłat. Gdy zbliżać się będzie koniec subskrypcji, wyślemy przypomnienie, abyś mógł odnowić, jeśli chcesz — na dowolnym planie, który Ci odpowiada.",
      },
      {
        q: "Czy plan 12-miesięczny obejmuje wszystkie sezony sportowe?",
        a: "Tak. Subskrypcja 12-miesięczna trwa od daty aktywacji, obejmując wszystkie wydarzenia sportowe w tym okresie. Piłka nożna, Formuła 1, tenis, golf, boks, siatkówka — jeśli jest transmitowane na kanałach w naszej ofercie, masz dostęp.",
      },
      {
        q: "Czy mogę udostępnić subskrypcję 12-miesięczną rodzinie?",
        a: "Tak — nasze plany obsługują do 4 jednoczesnych połączeń. Całe Twoje gospodarstwo domowe może oglądać na różnych urządzeniach jednocześnie. Jedna subskrypcja, wiele ekranów.",
      },
      {
        q: "Jaka prędkość internetu jest potrzebna do niezawodnego dostępu przez 12 miesięcy?",
        a: "Zalecamy minimum 10 Mbps dla HD i 25 Mbps dla 4K. Większość domowych łączy szerokopasmowych łatwo to przekracza. Jeśli masz wolniejsze połączenie, strumienie SD działają już przy 5 Mbps.",
      },
    ],
    testimonials: [
      {
        name: "Grzegorz P.",
        city: "Kraków",
        rating: 5,
        text: "Jestem na planie 12-miesięcznym od dwóch lat z rzędu. Przy €5 miesięcznie nie mogę się uzasadnić powrotu do kablówki. Cały sezon piłkarski, boks, F1 — wszystko. Naprawdę najlepsza decyzja telewizyjna, jaką podjąłem.",
      },
      {
        name: "Natalia A.",
        city: "Wrocław",
        rating: 5,
        text: "Zarejestrowałam się jako rodzina i nigdy nie żałowaliśmy. Dzieci uwielbiają kanały dla dzieci, mąż oglądał piłkę, a ja nadrabiam seriale. Na różnych urządzeniach jednocześnie. Niesamowite w tej cenie.",
      },
      {
        name: "Robert C.",
        city: "Gdańsk",
        rating: 5,
        text: "Wydawałem 180 zł miesięcznie na kablówkę. Teraz płacę €60 raz w roku. Te same kanały, lepsza jakość obrazu w 4K, i mam więcej treści. Przewodnik konfiguracji był świetny — miałem to działające na moim Samsung TV w kilka minut.",
      },
    ],
  },
  {
    slug: "24-miesiace-iptv-telewizja",
    name: "24 Miesiące IPTV Telewizja",
    price: 110,
    period: "jednorazowa płatność",
    badge: "Najlepsza cena",
    highlight: false,
    metaTitle: "24 Miesiące IPTV Telewizja — €110 | Najlepsza cena | Tylko €4,58/miesiąc | IPTVTelewizja",
    metaDescription:
      "24 miesiące IPTV Telewizja za €110 — zaledwie €4,58/miesiąc. Plan o najlepszej wartości. 50 000+ kanałów, streaming 4K, 7-dniowy catch-up. Dwa pełne lata z jedną płatnością. Natychmiastowa konfiguracja.",
    h1: "24 Miesiące IPTV Telewizja — €110 jednorazowa płatność",
    heroSubtitle:
      "Subskrypcja IPTV o najlepszej wartości dostępna na rynku. Dwa pełne lata premium IPTV Telewizja za €110 — zaledwie €4,58 miesięcznie. Jedna płatność, dwa lata 50 000+ kanałów, streaming 4K i zero kłopotów.",
    whatsappMessage: "iptvtelewizja.com - Chciałbym subskrybować plan 24 Miesiące IPTV Telewizja (€110)",
    whoIsItFor: [
      {
        title: "Długoterminowi użytkownicy IPTV",
        description:
          "Korzystasz z IPTV od jakiegoś czasu — może jesteś już na planie 6 lub 12-miesięcznym — i wiesz, że to Twoje stałe rozwiązanie telewizyjne. Plan 24-miesięczny to logiczny następny krok: zapłać raz, zapomnij o odnowieniach na dwa lata i ciesz się najniższym kosztem miesięcznym, jaki oferujemy.",
      },
      {
        title: "Duże gospodarstwa domowe i rodziny wielopokoleniowe",
        description:
          "Wielourządzeniowe gospodarstwa domowe z dziadkami, rodzicami i dziećmi oglądającymi różne rzeczy czerpią największe korzyści z planu 24-miesięcznego. Maksymalizujesz wartość każdego połączenia urządzenia przez dwa lata, sprawiając, że już i tak niski koszt miesięczny jest jeszcze bardziej imponujący.",
      },
      {
        title: "Świadomi budżetu streamerzy",
        description:
          "Jeśli Twoim priorytetem jest absolutnie najniższy koszt bez utraty jakości, 24 miesiące to plan dla Ciebie. Przy €4,58/miesiąc otrzymujesz te same kanały 4K, ten sam 7-dniowy catch-up, to samo wsparcie 24/7 — za mniej niż koszt tygodniowej kawy. Nic innego się nie równa.",
      },
    ],
    faq: [
      {
        q: "Co sprawia, że plan 24-miesięczny ma najlepszą wartość?",
        a: "Przy €4,58 miesięcznie to nasza najniższa cena miesięczna. Porównując z planem miesięcznym za €15, oszczędzasz €254,80 w tym samym dwuletnim okresie. Masz też wygodę nieodnawiania przez dwa pełne lata — zapłać raz i gotowe.",
      },
      {
        q: "Czy usługa jest gwarantowana przez pełne 24 miesiące?",
        a: "Tak. Działamy od lat z 99,9% dostępnością. Twoja subskrypcja jest w pełni obsługiwana przez cały okres 24 miesięcy. Jeśli pojawi się jakikolwiek problem techniczny, nasz zespół wsparcia 24/7 go rozwiąże — mamy wszelkie powody, by utrzymać Cię zadowolonym przez długi czas.",
      },
      {
        q: "Czy uzyskam dostęp do nowych kanałów dodanych w ciągu 24 miesięcy?",
        a: "Tak. Nasza oferta kanałów jest stale aktualizowana o nowe kanały i treści bez dodatkowych kosztów. Gdy dodajemy nowe kanały lub ulepszamy usługę, obecni subskrybenci korzystają z tego automatycznie — bez potrzeby aktualizacji.",
      },
      {
        q: "Jakich urządzeń będę mógł używać przez 24 miesiące?",
        a: "Nasza usługa używa standardowego formatu M3U/Xtream Codes, który działa ze wszystkimi głównymi odtwarzaczami IPTV. W miarę jak przez 24 miesiące pojawiają się nowe urządzenia i aplikacje, będziesz mógł z nich korzystać. Twoje dane logowania pozostają ważne bez względu na używane urządzenie lub aplikację.",
      },
      {
        q: "Czy mogę podarować plan 24-miesięczny komuś innemu?",
        a: "Tak. Plan 24-miesięczny to doskonały prezent dla członków rodziny — szczególnie starszych krewnych, którzy chcą dostępu do polskiej telewizji. Możemy skonfigurować subskrypcję i dostarczyć prosty przewodnik konfiguracji dostosowany do ich konkretnego urządzenia.",
      },
    ],
    testimonials: [
      {
        name: "Paweł O.",
        city: "Kraków",
        rating: 5,
        text: "Jestem Polakiem w Irlandii i uwielbiam polską telewizję — Ekstraklasa, seriale, wszystko. Plan 24-miesięczny oznacza, że nie myślę o odnowieniu przez dwa lata. Przy €4,58 miesięcznie to oczywisty wybór. Najlepszy zakup, jaki zrobiłem.",
      },
      {
        name: "Beata M.",
        city: "Wrocław",
        rating: 5,
        text: "Kupiłam ten plan dla mamy, która płaciła dużo za kablówkę. Skonfigurowałam na jej Smart TV i nie zauważyła żadnej różnicy w jakości — a teraz może oglądać WIĘCEJ kanałów. Oszczędza dużo przez dwa lata.",
      },
      {
        name: "Jarek B.",
        city: "Gdańsk",
        rating: 5,
        text: "Trzeci raz na planie 24-miesięcznym. Za każdym razem gdy wygasa, odnawiam natychmiast — tak jest dobry. Wybór kanałów zagranicznych jest nieporównany. Cała rodzina ogląda razem. Nigdy nie miałem ani jednej przerwy.",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count);
}

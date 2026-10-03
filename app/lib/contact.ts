export const WHATSAPP_NUMBER = "212707711512";
export const SUPPORT_EMAIL = "goldengateiptv@gmail.com";

export function whatsappLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const TRIAL_LINK = whatsappLink("iptvtelewizja.com - Darmowy test 3h");
export const SETUP_HELP_LINK = whatsappLink("Cześć, potrzebuję pomocy z konfiguracją IPTV");

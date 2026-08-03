// Central contact info for the whole site.
export const contact = {
  whatsappDisplay: "(49) 99914-9603",
  whatsappNumber: "5549999149603", // country code 55 + DDD 49 + number
  whatsapp2Display: "(49) 99912-9631",
  whatsapp2Number: "5549999129631", // country code 55 + DDD 49 + number
  email: "leolp.dev@gmail.com",
  service: "100% remoto, todo o Brasil",
  location: "Xanxerê e Ipuaçu, SC",
};

const defaultMessage =
  "Olá! Vim pelo site da LLDev e gostaria de solicitar um orçamento.";

/** Build a wa.me link with an optional pre-filled message and target number. */
export function whatsappLink(
  message: string = defaultMessage,
  number: string = contact.whatsappNumber,
) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject = "Contato pelo site — LLDev") {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
}

/** Open Google Maps centered on the given place (defaults to our cities). */
export function mapsLink(query: string = contact.location) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query,
  )}`;
}

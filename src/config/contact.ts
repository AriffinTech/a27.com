export const whatsAppNumber = "601114727827";
export const defaultWhatsAppMessage = "Hello A27, I’d like to discuss a project.";

export const whatsappConfigured = Boolean(whatsAppNumber);

export function getWhatsAppUrl(message = defaultWhatsAppMessage) {
  return whatsAppNumber
    ? `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`
    : "#";
}

export const whatsappUrl = getWhatsAppUrl();

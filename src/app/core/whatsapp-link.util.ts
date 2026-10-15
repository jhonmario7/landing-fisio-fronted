export function buildWhatsAppUrl(phoneE164: string, message: string): string {
  // No usar wa.me: su redirección convierte los emojis (⭐) en "�" (U+FFFD).
  return `https://api.whatsapp.com/send?phone=${phoneE164}&text=${encodeURIComponent(message)}`;
}

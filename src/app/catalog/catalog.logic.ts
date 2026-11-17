export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'perfumes' | 'tints' | 'makeup' | 'combos';
  categoryLabel: string;
  badge: 'Original & Sellado' | 'Piezas Limitadas' | 'Más Vendido' | 'Duty Free Pick' | 'Edición Especial';
  description: string;
  fullDetails: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  fragranceNotes?: { top: string; heart: string; base: string };
  size?: string;
  stockNote?: string;
  isDutyFreeCertified: boolean;
}

export const WHATSAPP_PHONE = '50236977267'; // Official Pink Glow customer service line in GT (+502 3697 7267)

/**
 * Generates direct WhatsApp click-to-chat URL with pre-filled message
 */
export function buildWhatsAppProductUrl(product: { name: string; price: number; id: string }, phone: string = WHATSAPP_PHONE): string {
  const message = `¡Hola Pink Glow! ✨ Me interesa pedir el producto "${product.name}" de Q${product.price.toFixed(2)}. ¿Me podrían compartir los datos de cuenta bancaria para mi transferencia y coordinar el envío con las fotos del producto y la guía de envío?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates direct WhatsApp inquiry for customer service or general questions
 */
export function buildWhatsAppGeneralUrl(topic?: string, phone: string = WHATSAPP_PHONE): string {
  const text = topic
    ? `¡Hola Pink Glow! ✨ Quisiera consultar información sobre: ${topic}. ¿Me comparten las cuentas para transferir y coordinar mi entrega?`
    : `¡Hola Pink Glow! ✨ Me gustaría consultar sobre su catálogo de perfumes y maquillaje 100% originales en Guatemala.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Filter products by category, search term, and price range
 */
export function filterProducts(
  products: Product[],
  activeTab: string,
  searchQuery = '',
  maxPrice?: number
): Product[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return products.filter((product) => {
    // Tab filter
    if (activeTab === 'perfumes' && product.category !== 'perfumes') return false;
    if (activeTab === 'tints' && product.category !== 'tints') return false;
    if (activeTab === 'makeup' && product.category !== 'makeup') return false;
    if (activeTab === 'combos' && product.category !== 'combos') return false;

    // Price filter
    if (maxPrice && product.price > maxPrice) return false;

    // Search query
    if (normalizedQuery) {
      const matchName = product.name.toLowerCase().includes(normalizedQuery);
      const matchBrand = product.brand.toLowerCase().includes(normalizedQuery);
      const matchDesc = product.description.toLowerCase().includes(normalizedQuery);
      const matchCat = product.categoryLabel.toLowerCase().includes(normalizedQuery);
      if (!matchName && !matchBrand && !matchDesc && !matchCat) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Calculate shipping information for Guatemala
 */
export function getShippingInfo(locationType: 'capital' | 'municipios' | 'departamentos'): {
  method: string;
  cost: number;
  time: string;
  paymentNote: string;
} {
  switch (locationType) {
    case 'capital':
      return {
        method: 'Mensajería Express Pink Glow',
        cost: 25,
        time: 'Mismo día o 24 horas',
        paymentNote: 'Pago previo por transferencia (tarifa Q25, no gratis)',
      };
    case 'municipios':
      return {
        method: 'Mensajería Metropolitana (Mixco, Villa Nueva, Carretera)',
        cost: 30,
        time: '24 a 48 horas',
        paymentNote: 'Pago previo por transferencia y coordinación inmediata',
      };
    case 'departamentos':
      return {
        method: 'Guatex / Cargo Expreso asegurado',
        cost: 45,
        time: '48 a 72 horas',
        paymentNote: 'Pago previo por transferencia y guía de rastreo',
      };
  }
}

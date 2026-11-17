import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppProductUrl,
  buildWhatsAppGeneralUrl,
  filterProducts,
  getShippingInfo,
} from './catalog.logic.ts';
import type { Product } from './catalog.logic.ts';

const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'Benefit Love Tint Fiery-Red Lip & Cheek (10ml)',
    brand: 'Benefit Cosmetics',
    category: 'tints',
    categoryLabel: 'Tints Benefit - Q280',
    badge: 'Más Vendido',
    description: 'Tinte rojo cereza fuego para labios y mejillas.',
    fullDetails: 'Fórmula ligera de larga duración.',
    price: 280,
    image: '/assets/images/benefit_lip_cheek_tint_1794947117942.jpg',
    rating: 5.0,
    reviewsCount: 42,
    inStock: true,
    isDutyFreeCertified: true,
  },
  {
    id: 'p2',
    name: 'Halloween Kiss Sexy Eau de Toilette 100ml',
    brand: 'Halloween Perfumes',
    category: 'perfumes',
    categoryLabel: 'Perfumes - Q350',
    badge: 'Original & Sellado',
    description: 'Floral frutal seductor y chispeante.',
    fullDetails: 'Fragancia de larga estela.',
    price: 350,
    image: '/assets/products/halloween.jpg',
    rating: 4.8,
    reviewsCount: 45,
    inStock: true,
    isDutyFreeCertified: true,
  },
  {
    id: 'p3',
    name: 'Benefit Rubor Shellie Warm Seashell-Pink (Mini)',
    brand: 'Benefit Cosmetics',
    category: 'makeup',
    categoryLabel: 'Rubor Shellie Mini - Q190',
    badge: 'Piezas Limitadas',
    description: 'Rubor compacto en polvo sedoso tono rosa coral cálido.',
    fullDetails: 'Presentación mini de 3 piezas en primer lote.',
    price: 190,
    image: '/assets/images/benefit_shellie_blush_mini_1794947118283.jpg',
    rating: 5.0,
    reviewsCount: 31,
    inStock: true,
    isDutyFreeCertified: true,
  },
];

test('buildWhatsAppProductUrl produces valid wa.me URL with encoded product details', () => {
  const url = buildWhatsAppProductUrl(mockProducts[0]);
  assert.ok(url.startsWith('https://wa.me/50236977267?text='));
  assert.ok(url.includes('Love'));
  assert.ok(url.includes('280.00'));
  assert.ok(url.includes(encodeURIComponent('transferencia y coordinar el envío')));
});

test('buildWhatsAppGeneralUrl generates topic inquiry properly', () => {
  const url = buildWhatsAppGeneralUrl('Envíos a Quetzaltenango');
  assert.ok(url.includes(encodeURIComponent('Envíos a Quetzaltenango')));
  assert.ok(url.includes(encodeURIComponent('¿Me comparten las cuentas para transferir y coordinar mi entrega?')));
});

test('filterProducts returns all products on "all" tab', () => {
  const results = filterProducts(mockProducts, 'all');
  assert.equal(results.length, 3);
});

test('filterProducts filters by category correctly', () => {
  const perfumes = filterProducts(mockProducts, 'perfumes');
  assert.equal(perfumes.length, 1);
  assert.equal(perfumes[0].id, 'p2');

  const tints = filterProducts(mockProducts, 'tints');
  assert.equal(tints.length, 1);
  assert.equal(tints[0].id, 'p1');
});

test('filterProducts filters by search query matching name or brand', () => {
  const benefitResults = filterProducts(mockProducts, 'all', 'benefit');
  assert.equal(benefitResults.length, 2);

  const singleResult = filterProducts(mockProducts, 'all', 'love tint');
  assert.equal(singleResult.length, 1);
  assert.equal(singleResult[0].id, 'p1');

  const emptyResult = filterProducts(mockProducts, 'all', 'inexistente1234');
  assert.equal(emptyResult.length, 0);
});

test('getShippingInfo provides correct delivery parameters for Guatemala', () => {
  const capital = getShippingInfo('capital');
  assert.equal(capital.cost, 25);
  assert.ok(capital.paymentNote.includes('Pago previo'));

  const depto = getShippingInfo('departamentos');
  assert.equal(depto.cost, 45);
  assert.ok(depto.paymentNote.includes('Pago previo'));
});

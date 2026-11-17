import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { buildWhatsAppGeneralUrl } from '../catalog/catalog.logic';

interface FaqItem {
  question: string;
  answer: string;
  tag: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-faq',
  imports: [],
  template: `
    <section id="faq" class="py-16 sm:py-24 bg-white relative scroll-mt-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center space-y-3 mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD6E0]/60 text-[#E7107A] font-bold text-xs uppercase tracking-wider">
            <i class="bi bi-question-circle text-sm" aria-hidden="true"></i>
            <span>Resolvemos Tus Dudas</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#0A2E58] tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p class="text-sm sm:text-base text-slate-600">
            Todo lo que necesitas saber antes de estrenar tu nuevo perfume o cosmético favorito.
          </p>
        </div>

        <!-- Accordion List -->
        <div class="space-y-4">
          @for (faq of faqs; track faq.question; let i = $index) {
            <div class="border border-pink-100 rounded-2xl overflow-hidden transition-all duration-200" [class.shadow-md]="openIndex() === i">
              <button
                type="button"
                (click)="toggleIndex(i)"
                class="w-full text-left p-5 sm:p-6 bg-white hover:bg-[#FFF9FB] flex items-center justify-between gap-4 transition-colors focus:outline-hidden"
                [attr.aria-expanded]="openIndex() === i"
              >
                <div class="flex items-center gap-3">
                  <span class="text-xs font-bold text-[#E7107A] bg-[#FFD6E0]/60 px-2 py-0.5 rounded-full">
                    {{ faq.tag }}
                  </span>
                  <h3 class="font-serif text-base sm:text-lg font-bold text-[#0A2E58]">
                    {{ faq.question }}
                  </h3>
                </div>
                <div class="w-8 h-8 rounded-full bg-pink-50 text-[#E7107A] flex items-center justify-center shrink-0">
                  <i class="bi bi-chevron-down text-sm transition-transform duration-300" [class.rotate-180]="openIndex() === i" aria-hidden="true"></i>
                </div>
              </button>

              @if (openIndex() === i) {
                <div class="px-5 pb-5 sm:px-6 sm:pb-6 bg-[#FFF9FB] text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-pink-100">
                  <p>{{ faq.answer }}</p>
                </div>
              }
            </div>
          }
        </div>

        <!-- Still have questions CTA banner -->
        <div class="mt-12 text-center p-6 sm:p-8 bg-gradient-to-r from-pink-50 via-white to-pink-50 rounded-3xl border border-pink-100 space-y-3">
          <h3 class="font-serif text-lg sm:text-xl font-bold text-[#0A2E58]">¿Tienes otra duda o necesitas recomendación olfativa?</h3>
          <p class="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
            Nuestras asesoras de belleza están conectadas en WhatsApp para ayudarte a elegir el perfume ideal para tu pH o para un regalo especial.
          </p>
          <div class="pt-2">
            <a
              [href]="whatsappFaqUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all"
            >
              <i class="bi bi-whatsapp text-base" aria-hidden="true"></i>
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  `,
})
export class FaqComponent {
  openIndex = signal<number | null>(0); // First open by default

  whatsappFaqUrl = buildWhatsAppGeneralUrl('Tengo una duda sobre un producto del catálogo');

  faqs: FaqItem[] = [
    {
      tag: 'Originalidad',
      question: '¿Son productos 100% originales y nuevos?',
      answer: 'Totalmente garantizados. Todos nuestros perfumes y productos de maquillaje son adquiridos en distribuidores autorizados y tiendas oficiales en Estados Unidos y Europa. Vienen 100% nuevos, sellados de fábrica con su caja original, celofán intacto y código de lote (Batch Code) visible para tu total comprobación.'
    },
    {
      tag: 'Envíos',
      question: '¿Cuáles son las formas y costos de envío en Guatemala?',
      answer: 'En Ciudad de Guatemala el envío tiene una tarifa estándar de Q25 (el envío en la capital no es gratuito, se cubre la mensajería propia con entrega en 24 hrs o el mismo día). En municipios aledaños (Mixco, Villa Nueva, San Cristóbal, Carretera a El Salvador) es de Q30. Para todos los departamentos enviamos por Guatex o Cargo Expreso asegurado con tarifa de Q45 (tiempo de entrega 48 a 72 hrs).'
    },
    {
      tag: 'Pago y Envío',
      question: '¿Cómo es el proceso de pago y coordinación del pedido?',
      answer: 'El proceso es ágil y 100% seguro: primero realizas tu pago a través de transferencia bancaria o depósito directo (de momento no recibimos pagos con tarjeta, únicamente transferencias). Al confirmar tu pago, te podemos enviar fotos reales de tu producto con su código de lote. Una vez despachado el paquete hacia tu ubicación, te compartimos de inmediato la guía de envío para coordinar la entrega hasta tu puerta o despacho departamental.'
    },
    {
      tag: 'Seguridad',
      question: '¿Cómo puedo verificar el código de lote (Batch Code)?',
      answer: 'En el fondo de la botella y en la base de la caja viene un código grabado (por ejemplo: 4E01 o similar). Puedes ingresar ese código en plataformas públicas internacionales como CheckFresh.com o CheckCosmetic.net para comprobar la fecha de fabricación y autenticidad del lote oficial de la marca.'
    },
    {
      tag: 'Encargos',
      question: '¿Pueden encargarme un producto que no está en el catálogo?',
      answer: '¡Sí! Realizamos importaciones periódicas y temporadas especiales (Navidad, Día de la Madre y San Valentín). Escríbenos por WhatsApp con el nombre del perfume o cosmético que deseas y con gusto te cotizamos.'
    }
  ];

  toggleIndex(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}

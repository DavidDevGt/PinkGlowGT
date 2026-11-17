import { ChangeDetectionStrategy, Component } from '@angular/core';
import { buildWhatsAppGeneralUrl } from '../catalog/catalog.logic';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-transparency',
  imports: [],
  template: `
    <section id="garantia" class="py-16 sm:py-24 bg-white relative scroll-mt-20 overflow-hidden">
      
      <!-- Ambient Glow and Cherries -->
      <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFD6E0]/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD6E0]/60 text-[#E7107A] font-bold text-xs uppercase tracking-wider">
            <i class="bi bi-patch-check-fill text-sm" aria-hidden="true"></i>
            <span>Prueba de Autenticidad</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2E58] tracking-tight">
            ¿Por qué confiar en Pink Glow?
          </h2>
          <p class="text-sm sm:text-base text-slate-600">
            En un mercado con tantas réplicas, Pink Glow te ofrece transparencia radical. No pedimos dinero a ciegas: te demostramos que tu producto es legítimo antes de despacharlo.
          </p>
        </div>

        <!-- 3 Pillars of Transparency Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          <!-- Pillar 1: Batch Code & Verificación de Autenticidad -->
          <div class="bg-gradient-to-b from-[#FFF7FA] to-white border border-pink-100 rounded-3xl p-7 shadow-xs relative flex flex-col justify-between">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-[#FFD6E0] text-[#E7107A] flex items-center justify-center">
                <i class="bi bi-qr-code-scan text-xl" aria-hidden="true"></i>
              </div>
              <h3 class="font-serif text-xl font-bold text-[#0A2E58]">
                Código de Lote Grabado (Batch Code)
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tanto en la caja original como en el fondo del frasco viene grabado el número de serie de fábrica. Puedes ingresar el código en plataformas globales como 
                <strong class="text-[#E7107A]">CheckFresh.com</strong> o <strong>CheckCosmetic.net</strong> para verificar la fecha de manufactura oficial.
              </p>
            </div>
            
            <div class="mt-6 pt-4 border-t border-pink-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <i class="bi bi-check-circle-fill text-emerald-600 text-sm" aria-hidden="true"></i>
              <span>Verificable en segundos en tu celular</span>
            </div>
          </div>

          <!-- Pillar 2: Fotos Reales y Guía de Envío -->
          <div class="bg-gradient-to-b from-[#FFF7FA] to-white border border-pink-100 rounded-3xl p-7 shadow-xs relative flex flex-col justify-between">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-[#FFD6E0] text-[#E7107A] flex items-center justify-center">
                <i class="bi bi-camera text-xl" aria-hidden="true"></i>
              </div>
              <h3 class="font-serif text-xl font-bold text-[#0A2E58]">
                Fotos del Producto y Guía de Envío
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Al confirmar tu transferencia, te compartimos fotos reales de tu producto con su código de lote. Al realizarse el despacho hacia tu ubicación, te enviamos de inmediato tu guía de envío con número de rastreo.
              </p>
            </div>

            <div class="mt-6 pt-4 border-t border-pink-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <i class="bi bi-check-circle-fill text-emerald-600 text-sm" aria-hidden="true"></i>
              <span>Fotos nítidas y guía oficial con seguimiento</span>
            </div>
          </div>

          <!-- Pillar 3: Originales, Importados y Sellados -->
          <div class="bg-gradient-to-b from-[#FFF7FA] to-white border border-pink-100 rounded-3xl p-7 shadow-xs relative flex flex-col justify-between">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-[#FFD6E0] text-[#E7107A] flex items-center justify-center">
                <i class="bi bi-patch-check text-xl" aria-hidden="true"></i>
              </div>
              <h3 class="font-serif text-xl font-bold text-[#0A2E58]">
                Originales, Importados y Sellados
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Todos nuestros productos son cosméticos y fragancias importadas 100% originales. Vienen totalmente nuevos, sellados de fábrica con su celofán original intacto y código de lote grabado para tu total tranquilidad.
              </p>
            </div>

            <div class="mt-6 pt-4 border-t border-pink-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <i class="bi bi-check-circle-fill text-emerald-600 text-sm" aria-hidden="true"></i>
              <span>100% nuevos y sellados de fábrica</span>
            </div>
          </div>

        </div>

        <!-- Small Minimalist Social Media Follow Section -->
        <div class="bg-gradient-to-r from-[#FFF5F8] via-white to-[#FFF5F8] border border-pink-100/80 rounded-2xl p-5 sm:p-6 shadow-xs max-w-4xl mx-auto">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            
            <div class="space-y-0.5">
              <div class="inline-flex items-center gap-1.5 text-[#E7107A] font-bold text-[11px] uppercase tracking-wider">
                <i class="bi bi-heart-fill text-xs" aria-hidden="true"></i>
                <span>Nuestras Redes</span>
              </div>
              <h3 class="font-serif text-lg font-bold text-[#0A2E58]">
                Síguenos en Redes Sociales
              </h3>
              <p class="text-xs text-slate-500">
                Novedades, ingresos de productos sellados y atención directa.
              </p>
            </div>

            <!-- Minimalist Buttons with Real Brand Icons -->
            <div class="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                [href]="instagramUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-pink-200 bg-white hover:bg-pink-50 text-[#0A2E58] text-xs font-bold transition-all shadow-xs hover:border-pink-300"
                aria-label="Instagram de Pink Glow Guatemala"
              >
                <span class="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center">
                  <i class="bi bi-instagram text-xs" aria-hidden="true"></i>
                </span>
                <span>&#64;pink_glow.gt</span>
                <i class="bi bi-box-arrow-up-right text-[11px] text-slate-400" aria-hidden="true"></i>
              </a>

              <a
                [href]="facebookUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-blue-200 bg-white hover:bg-blue-50 text-[#0A2E58] text-xs font-bold transition-all shadow-xs hover:border-blue-300"
                aria-label="Facebook de Pink Glow Guatemala"
              >
                <span class="w-6 h-6 rounded-lg bg-[#1877F2] text-white flex items-center justify-center">
                  <i class="bi bi-facebook text-xs" aria-hidden="true"></i>
                </span>
                <span>Pink Glow GT</span>
                <i class="bi bi-box-arrow-up-right text-[11px] text-slate-400" aria-hidden="true"></i>
              </a>
            </div>

          </div>
        </div>

        <!-- Real Customer Testimonials (Guatemala) -->
        <div class="mt-16 pt-12 border-t border-pink-100">
          <div class="text-center mb-8">
            <h3 class="font-serif text-2xl font-bold text-[#0A2E58]">Lo que dicen nuestras clientas en Guate</h3>
            <p class="text-xs sm:text-sm text-slate-500">Opiniones verificadas de pedidos entregados</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            @for (testimonial of testimonials; track testimonial.name) {
              <div class="bg-pink-50/40 border border-pink-100 rounded-2xl p-5 space-y-3">
                <div class="flex items-center gap-1 text-amber-400">
                  @for (star of [1,2,3,4,5]; track star) {
                    <i class="bi bi-star-fill text-xs" aria-hidden="true"></i>
                  }
                </div>
                <p class="text-xs text-slate-700 italic leading-relaxed">
                  "{{ testimonial.comment }}"
                </p>
                <div class="flex items-center justify-between text-xs pt-2 border-t border-pink-100/60">
                  <div>
                    <span class="font-bold text-[#0A2E58] block">{{ testimonial.name }}</span>
                    <span class="text-slate-400 text-[11px]">{{ testimonial.location }}</span>
                  </div>
                  <span class="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                    Comprobado
                  </span>
                </div>
              </div>
            }
          </div>
        </div>

      </div>
    </section>
  `,
})
export class TransparencyComponent {
  askAuthencityUrl = buildWhatsAppGeneralUrl('Hola, me gustaría consultar sobre los productos, datos de cuenta para mi pago y fotos del producto');
  instagramUrl = 'https://www.instagram.com/pink_glow.gt/';
  facebookUrl = 'https://www.facebook.com/people/PinkGlowgt/61595598535685/';

  testimonials = [
    {
      name: 'Sofía Mazariegos',
      location: 'Zona 14, Ciudad de Guatemala',
      comment: 'Tenía miedo de que fuera imitación porque en redes hay muchas réplicas, pero al hacer mi pago me mandaron fotos nítidas de mi Love Tint de Benefit con el código de lote y revisé en CheckFresh. ¡100% original, súper amables!'
    },
    {
      name: 'Camila Sandoval',
      location: 'Carretera a El Salvador (Km 16)',
      comment: 'Pedí el perfume Halloween Kiss Sexy y el rubor Shellie mini. Hice mi transferencia bancaria, me mandaron las fotos del producto con el lote y la guía de envío para el día siguiente. Todo 100% original, importado y sellado de fábrica.'
    },
    {
      name: 'Lucía Morales',
      location: 'Quetzaltenango (Envío por Guatex)',
      comment: 'Pagué por transferencia bancaria, me enviaron la guía de Guatex al instante y llegó en 48 horas a Xela intacto y completamente sellado de fábrica con su celofán original. ¡Recomendadísimo!'
    }
  ];
}

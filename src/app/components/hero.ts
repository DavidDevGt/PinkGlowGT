import { ChangeDetectionStrategy, Component } from '@angular/core';
import { buildWhatsAppGeneralUrl } from '../catalog/catalog.logic';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-hero',
  imports: [],
  template: `
    <section class="relative overflow-hidden bg-gradient-to-b from-[#FFF5F8] via-[#FFFDFE] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-pink-100/60">
      
      <!-- Decorative Background Elements -->
      <div class="absolute top-10 left-8 w-64 h-64 bg-[#FFD6E0]/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div class="absolute bottom-10 right-10 w-80 h-80 bg-[#F87B9A]/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Copy & High-Converting CTAs -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <!-- Glowie Pill Tag -->
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-pink-200 shadow-xs text-xs sm:text-sm font-semibold text-[#E7107A]">
              <img src="/assets/cerezas.svg" alt="Cerezas Pink Glow" class="w-4 h-4 object-contain" referrerpolicy="no-referrer" />
              <span>Originales & Sellados en Guatemala</span>
              <span class="w-1.5 h-1.5 rounded-full bg-[#E7107A]"></span>
              <span class="text-[#0A2E58] font-medium">Lotes 2024 - 2025</span>
            </div>

            <!-- Main Heading (Playfair Display) -->
            <h1 class="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A2E58] leading-[1.15]">
              Maquillaje y Perfumes <br class="hidden sm:inline" />
              <span class="text-[#E7107A] relative inline-block">
                100% Originales.
                <svg class="absolute -bottom-2 left-0 w-full h-3 text-[#FFD6E0] -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,0 100,10" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" />
                </svg>
              </span>
              <br />
              <span class="italic font-medium text-[#0A2E58]">Brilla a tu manera.</span>
            </h1>

            <!-- Subheading -->
            <p class="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Encuentra tus favoritos de marca sellados y listos para entregar en 
              <strong class="text-[#0A2E58] font-semibold">toda Guatemala</strong>. 
              Realizas tu pago por transferencia bancaria y al coordinar el despacho te enviamos <span class="bg-[#FFD6E0]/60 px-1.5 py-0.5 rounded-sm font-semibold text-[#E7107A]">fotos reales de tu producto y guía de envío</span> con seguimiento hasta tu ubicación.
            </p>

            <!-- Action CTAs -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#catalogo"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#E7107A] hover:bg-[#d0096b] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/35 transition-all duration-300 transform hover:-translate-y-1 focus:outline-hidden focus:ring-4 focus:ring-pink-300"
              >
                <span>Ver Catálogo Completo</span>
                <i class="bi bi-arrow-down text-base animate-bounce" aria-hidden="true"></i>
              </a>

              <a
                [href]="advisorChatUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-[#0A2E58] border-2 border-[#0A2E58] px-7 py-3.5 rounded-full font-bold text-base transition-all duration-200 hover:border-[#E7107A] hover:text-[#E7107A] focus:outline-hidden"
              >
                <i class="bi bi-whatsapp text-[#25D366] text-lg" aria-hidden="true"></i>
                <span>Chatear con una asesora</span>
              </a>
            </div>

            <!-- Bullet Highlights -->
            <div class="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700">
              <div class="flex items-center gap-2">
                <i class="bi bi-check-circle-fill text-[#E7107A] text-sm" aria-hidden="true"></i>
                <span class="font-medium">Entrega en 24h (Capital)</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="bi bi-check-circle-fill text-[#E7107A] text-sm" aria-hidden="true"></i>
                <span class="font-medium">Fotos y guía de envío</span>
              </div>
              <div class="flex items-center gap-2 col-span-2 sm:col-span-1">
                <i class="bi bi-check-circle-fill text-[#E7107A] text-sm" aria-hidden="true"></i>
                <span class="font-medium">Pagas y coordinamos todo</span>
              </div>
            </div>

          </div>

          <!-- Right Column: Visual Composition with Glowie, Perfume, & Cherry Accents -->
          <div class="lg:col-span-5 relative flex justify-center">
            
            <!-- Soft Glow Circle Behind Main Asset -->
            <div class="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-[#FFD6E0] via-white to-[#FFF0F4] p-6 shadow-2xl border border-pink-100 flex items-center justify-center">
              
              <!-- Floating Sparkles -->
              <img 
                src="/assets/destello.svg" 
                alt="Destello" 
                class="absolute -top-3 -right-3 w-10 h-10 animate-sparkle pointer-events-none"
                referrerpolicy="no-referrer"
              />
              <img 
                src="/assets/destello.svg" 
                alt="Destello" 
                class="absolute bottom-6 -left-4 w-8 h-8 animate-sparkle pointer-events-none"
                style="animation-delay: 1.5s;"
                referrerpolicy="no-referrer"
              />

              <!-- Hero Visual Collage -->
              <div class="relative w-full h-full flex flex-col items-center justify-center">
                
                <!-- Duty Free Beauty Imagery -->
                <div class="relative w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-inner group">
                  <img
                    src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80"
                    alt="Colección de Perfumes y Maquillaje Pink Glow"
                    class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    referrerpolicy="no-referrer"
                  />
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0A2E58]/60 via-transparent to-transparent"></div>
                  <div class="absolute bottom-4 left-4 right-4 text-white">
                    <span class="text-[11px] font-bold tracking-widest uppercase bg-[#E7107A] px-2 py-0.5 rounded-sm">
                      ORIGINAL & SELLADO
                    </span>
                    <p class="font-serif font-bold text-lg mt-1 leading-tight">Benefit & Perfumes Selectos</p>
                  </div>
                </div>

                <!-- Floating Mascot Glowie at the corner -->
                <div class="absolute -bottom-6 -right-5 w-32 h-32 sm:w-36 sm:h-36 animate-float filter drop-shadow-xl z-20">
                  <img 
                    src="/assets/glowie.svg" 
                    alt="Glowie - Mascota Oficial de Pink Glow" 
                    class="w-full h-full object-contain"
                    referrerpolicy="no-referrer"
                  />
                </div>

                <!-- Floating Tag: Pago y Coordinación -->
                <div class="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm border border-pink-200 rounded-2xl p-3 shadow-lg flex items-center gap-2.5 z-20">
                  <div class="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <i class="bi bi-patch-check-fill text-sm" aria-hidden="true"></i>
                  </div>
                  <div>
                    <p class="text-[10px] uppercase font-bold text-slate-400">Pago Seguro</p>
                    <p class="text-xs font-bold text-[#0A2E58]">Pagas y Coordinamos</p>
                  </div>
                </div>

                <!-- Floating Tag: Batch Code -->
                <div class="absolute bottom-16 -left-6 bg-white/95 backdrop-blur-sm border border-pink-200 rounded-2xl p-2.5 shadow-lg flex items-center gap-2 z-20 hidden sm:flex">
                  <div class="w-7 h-7 rounded-full bg-[#FFD6E0] text-[#E7107A] flex items-center justify-center">
                    <i class="bi bi-shield-check text-sm" aria-hidden="true"></i>
                  </div>
                  <div>
                    <p class="text-[10px] font-bold text-[#0A2E58]">Lote Verificable</p>
                    <p class="text-[10px] text-slate-500">CheckFresh / Lote de Fábrica</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  advisorChatUrl = buildWhatsAppGeneralUrl('Hola, vi la página y me gustaría que me asesoren para elegir un perfume o tinte');
}

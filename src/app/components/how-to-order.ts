import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-how-to-order',
  imports: [],
  template: `
    <section id="como-comprar" class="py-16 sm:py-24 bg-[#FFF8FA] relative scroll-mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD6E0]/60 text-[#E7107A] font-bold text-xs uppercase tracking-wider">
            <i class="bi bi-cart-check text-sm" aria-hidden="true"></i>
            <span>Proceso Rápido y Fácil</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2E58] tracking-tight">
            Cómo Hacer Tu Pedido en 4 Pasos
          </h2>
          <p class="text-sm sm:text-base text-slate-600">
            Sin formularios engorrosos ni crear cuentas. Toda la atención es personalizada y directa por WhatsApp.
          </p>
        </div>

        <!-- 4 Steps Visual Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          <!-- Step 1 -->
          <div class="bg-white rounded-3xl p-6 border border-pink-100 shadow-xs relative flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="w-10 h-10 rounded-2xl bg-[#FFD6E0] text-[#E7107A] font-serif font-bold text-lg flex items-center justify-center">
                  1
                </span>
                <i class="bi bi-hand-index-thumb text-xl text-pink-300" aria-hidden="true"></i>
              </div>
              <h3 class="font-serif text-lg font-bold text-[#0A2E58]">
                Elige en el Catálogo
              </h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Navega entre los perfumes, tints Benefit, rubor Shellie mini o labiales L'Oréal. Puedes ver notas olfativas y fotos de referencia.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-pink-50 text-[11px] font-semibold text-[#E7107A]">
              Paso 1 de 4
            </div>
          </div>

          <!-- Step 2 -->
          <div class="bg-white rounded-3xl p-6 border border-pink-100 shadow-xs relative flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="w-10 h-10 rounded-2xl bg-[#FFD6E0] text-[#E7107A] font-serif font-bold text-lg flex items-center justify-center">
                  2
                </span>
                <i class="bi bi-whatsapp text-xl text-pink-300" aria-hidden="true"></i>
              </div>
              <h3 class="font-serif text-lg font-bold text-[#0A2E58]">
                Clic en Pedir por WhatsApp
              </h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                El botón abrirá tu WhatsApp con el mensaje ya listo que incluye el nombre exacto de tu producto y precio.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-pink-50 text-[11px] font-semibold text-[#E7107A]">
              Paso 2 de 4
            </div>
          </div>

          <!-- Step 3 -->
          <div class="bg-white rounded-3xl p-6 border border-pink-100 shadow-xs relative flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="w-10 h-10 rounded-2xl bg-[#FFD6E0] text-[#E7107A] font-serif font-bold text-lg flex items-center justify-center">
                  3
                </span>
                <i class="bi bi-wallet2 text-xl text-pink-300" aria-hidden="true"></i>
              </div>
              <h3 class="font-serif text-lg font-bold text-[#0A2E58]">
                Realiza tu Pago Seguro
              </h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Pagas por transferencia bancaria o depósito directo (de momento solo aceptamos transferencias). Te compartimos fotos reales de tu producto antes del despacho.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-pink-50 text-[11px] font-semibold text-[#E7107A]">
              Paso 3 de 4
            </div>
          </div>

          <!-- Step 4 -->
          <div class="bg-white rounded-3xl p-6 border border-pink-100 shadow-xs relative flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="w-10 h-10 rounded-2xl bg-[#0A2E58] text-white font-serif font-bold text-lg flex items-center justify-center">
                  4
                </span>
                <i class="bi bi-truck text-xl text-emerald-500" aria-hidden="true"></i>
              </div>
              <h3 class="font-serif text-lg font-bold text-[#0A2E58]">
                Coordinamos Tu Entrega
              </h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Coordinamos tu dirección, te enviamos fotos del producto y la guía de envío cuando se envíe hacia tu ubicación, y recibes tu paquete sellado listo para estrenar.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-pink-50 text-[11px] font-semibold text-emerald-600">
              ¡Listo para brillar! ✨
            </div>
          </div>

        </div>

      </div>
    </section>
  `,
})
export class HowToOrderComponent {}

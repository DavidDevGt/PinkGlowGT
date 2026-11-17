import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-trust-badges',
  imports: [],
  template: `
    <section class="py-12 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          <!-- Badge 1: 100% Originales & Sellados -->
          <div class="relative bg-gradient-to-br from-[#FFF5F8] to-white border border-pink-100 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-pink-200 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-2xl bg-[#FFD6E0]/70 text-[#E7107A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <i class="bi bi-box-seam text-2xl" aria-hidden="true"></i>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <h2 class="text-lg font-bold text-[#0A2E58] tracking-tight">100% Originales & Sellados</h2>
              <span class="text-xs bg-[#E7107A] text-white px-2 py-0.5 rounded-full font-bold">Garantizado</span>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              Cosméticos y fragancias importadas legítimas. Cada caja cuenta con su celofán original de fábrica intacto y 
              <strong class="text-[#0A2E58]">código de lote grabado</strong> que puedes consultar al instante.
            </p>
          </div>

          <!-- Badge 2: Fotos Reales y Guía de Envío -->
          <div class="relative bg-gradient-to-br from-[#FFF5F8] to-white border border-pink-100 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-pink-200 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-2xl bg-[#FFD6E0]/70 text-[#E7107A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <i class="bi bi-camera text-2xl" aria-hidden="true"></i>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <h2 class="text-lg font-bold text-[#0A2E58] tracking-tight">Fotos Reales & Guía de Envío</h2>
              <span class="text-xs bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">Transparencia</span>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              Te compartimos fotos reales de tu producto sellado y te enviamos tu número de guía de envío al despachar hacia tu ubicación para seguimiento continuo.
            </p>
          </div>

          <!-- Badge 3: Pagas y Coordinamos Todo -->
          <div class="relative bg-gradient-to-br from-[#FFF5F8] to-white border border-pink-100 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-pink-200 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-2xl bg-[#FFD6E0]/70 text-[#E7107A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <i class="bi bi-wallet2 text-2xl" aria-hidden="true"></i>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <h2 class="text-lg font-bold text-[#0A2E58] tracking-tight">Pagas y Coordinamos Todo</h2>
              <span class="text-xs bg-[#0A2E58] text-white px-2 py-0.5 rounded-full font-bold">100% Seguro</span>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              Pagas fácil por transferencia bancaria o depósito directo (de momento solo transferencia). Confirmas tu comprobante y coordinamos tu despacho de inmediato.
            </p>
          </div>

        </div>

      </div>
    </section>
  `,
})
export class TrustBadgesComponent {}

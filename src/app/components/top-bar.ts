import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-top-bar',
  template: `
    <div class="bg-[#0A2E58] text-white py-2.5 px-4 text-xs md:text-sm font-medium tracking-wide">
      <div class="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center flex-wrap">
        <span class="inline-block animate-pulse text-[#FFD6E0]">✨</span>
        <span class="font-semibold text-[#FFD6E0]">100% Originales y Sellados</span>
        <span class="hidden sm:inline text-white/40">|</span>
        <span>Envíos a toda Guatemala</span>
        <span class="hidden sm:inline text-white/40">|</span>
        <span class="bg-[#E7107A] text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
          Pagos Seguros & Despacho Inmediato
        </span>
        <span class="inline-block animate-pulse text-[#FFD6E0]">✨</span>
      </div>
    </div>
  `,
})
export class TopBarComponent {}

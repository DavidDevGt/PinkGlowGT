import { ChangeDetectionStrategy, Component } from '@angular/core';
import { buildWhatsAppGeneralUrl } from '../catalog/catalog.logic';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="bg-[#0A2E58] text-white pt-16 pb-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          <!-- Column 1: Brand & Slogan -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-white overflow-hidden p-0.5">
                <img 
                  src="/assets/social/pinkglow-official-logo.jpg" 
                  alt="Pink Glow Logo Oficial" 
                  class="w-full h-full object-cover rounded-full"
                  referrerpolicy="no-referrer"
                />
              </div>
              <span class="font-serif text-2xl font-bold tracking-wider">
                PINK<span class="text-[#F87B9A]">GLOW</span>
              </span>
            </div>
            
            <p class="font-serif italic text-base text-[#FFD6E0]">
              "Brilla a tu manera"
            </p>

            <p class="text-xs text-slate-300 leading-relaxed">
              Tu destino de confianza en Guatemala para maquillaje y perfumería 100% original e importada. Pagos seguros por transferencia y coordinación de envíos directos a todo el país.
            </p>

            <!-- Social Links -->
            <div class="flex items-center gap-3 pt-2">
              <a 
                [href]="instagramUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="Instagram Pink Glow Guatemala (@pink_glow.gt)"
                title="Instagram @pink_glow.gt"
              >
                <i class="bi bi-instagram text-base" aria-hidden="true"></i>
              </a>
              <a 
                [href]="facebookUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="Facebook Pink Glow GT"
                title="Facebook @PinkGlowgt"
              >
                <i class="bi bi-facebook text-base" aria-hidden="true"></i>
              </a>
              <a 
                [href]="whatsappDirectUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="WhatsApp Pink Glow Guatemala"
                title="WhatsApp +502 3697-7267"
              >
                <i class="bi bi-whatsapp text-base" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <!-- Column 2: Navigation Links -->
          <div class="space-y-4">
            <h4 class="font-serif text-lg font-bold text-white tracking-wide">
              Navegación Rápida
            </h4>
            <ul class="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#catalogo" class="hover:text-[#F87B9A] transition-colors flex items-center gap-2">
                  <i class="bi bi-chevron-right text-[10px] text-[#E7107A]" aria-hidden="true"></i>
                  <span>Catálogo Completo</span>
                </a>
              </li>
              <li>
                <a href="#garantia" class="hover:text-[#F87B9A] transition-colors flex items-center gap-2">
                  <i class="bi bi-chevron-right text-[10px] text-[#E7107A]" aria-hidden="true"></i>
                  <span>Garantía y Verificación de Lote</span>
                </a>
              </li>
              <li>
                <a href="#como-comprar" class="hover:text-[#F87B9A] transition-colors flex items-center gap-2">
                  <i class="bi bi-chevron-right text-[10px] text-[#E7107A]" aria-hidden="true"></i>
                  <span>Cómo Comprar en 4 Pasos</span>
                </a>
              </li>
              <li>
                <a href="#faq" class="hover:text-[#F87B9A] transition-colors flex items-center gap-2">
                  <i class="bi bi-chevron-right text-[10px] text-[#E7107A]" aria-hidden="true"></i>
                  <span>Preguntas Frecuentes</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 3: Contact & Attention Hours -->
          <div class="space-y-4">
            <h4 class="font-serif text-lg font-bold text-white tracking-wide">
              Atención al Cliente
            </h4>
            <div class="space-y-3 text-xs text-slate-300">
              <div class="flex items-start gap-2.5">
                <i class="bi bi-whatsapp text-emerald-400 text-base leading-none mt-0.5" aria-hidden="true"></i>
                <div>
                  <span class="font-semibold text-white block">WhatsApp Oficial:</span>
                  <a [href]="whatsappDirectUrl" target="_blank" rel="noopener noreferrer" class="hover:text-[#FFD6E0] underline">
                    +502 3697-7267
                  </a>
                </div>
              </div>
              <div class="flex items-start gap-2.5">
                <i class="bi bi-clock text-[#F87B9A] text-base leading-none mt-0.5" aria-hidden="true"></i>
                <div>
                  <span class="font-semibold text-white block">Horario de Respuestas:</span>
                  <span>Lunes a Sábado: 8:00 AM - 8:00 PM</span><br />
                  <span>Domingo: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div class="flex items-start gap-2.5">
                <i class="bi bi-geo-alt text-[#F87B9A] text-base leading-none mt-0.5" aria-hidden="true"></i>
                <div>
                  <span class="font-semibold text-white block">Centro de Despacho:</span>
                  <span>Ciudad de Guatemala, Guatemala</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Column 4: Pre-order Box -->
          <div class="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
            <div class="flex items-center gap-2">
              <span class="text-xs uppercase font-bold tracking-wider text-[#FFD6E0] bg-[#E7107A] px-2 py-0.5 rounded-sm">
                Bajo Pedido
              </span>
            </div>
            <h4 class="font-serif text-base font-bold text-white">¿Buscas un perfume especial?</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              ¿Deseas una fragancia o cosmético específico? Cuéntanos qué producto original buscas y con gusto lo importamos para ti.
            </p>
            <a
              [href]="preorderWhatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-center gap-2 bg-[#F87B9A] hover:bg-[#E7107A] text-[#0A2E58] hover:text-white py-2.5 px-3 rounded-xl font-bold text-xs transition-colors"
            >
              <i class="bi bi-whatsapp text-sm" aria-hidden="true"></i>
              <span>Encargar por WhatsApp</span>
            </a>
          </div>

        </div>

        <!-- Bottom Copyright -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2024-2026 Pink Glow Guatemala. Todos los derechos reservados.</p>
          <div class="flex items-center gap-4 text-[11px]">
            <span>Productos 100% Originales & Sellados</span>
            <span>•</span>
            <span>Envíos a los 22 departamentos</span>
          </div>
        </div>

      </div>
    </footer>
  `,
})
export class FooterComponent {
  whatsappDirectUrl = buildWhatsAppGeneralUrl('Hola Pink Glow, quisiera hacer una consulta');
  preorderWhatsappUrl = buildWhatsAppGeneralUrl('Hola! Quisiera encargar un perfume o cosmético específico para el próximo viaje');
  instagramUrl = 'https://www.instagram.com/pink_glow.gt/';
  facebookUrl = 'https://www.facebook.com/people/PinkGlowgt/61595598535685/';
}

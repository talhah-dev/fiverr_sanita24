const footer = document.getElementById('footer')
footer.innerHTML = `
<footer class="w-full mx-auto max-w-7xl p-5 mt-10">
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-10">

    <!-- Brand -->
    <div data-aos="fade-up" class="md:col-span-2 md:pr-16">
      <div class="flex items-center gap-3">
        <img src="/docs/assets/images/logo.svg" alt="Kanalwurm Rohrreinigung" class="h-16 w-auto">
      </div>
      <p class="md:mt-5 mt-3 text-zinc-700">
        Professionelle <strong class="text-zinc-900">Abfluss-, Rohr- &amp; Kanalreinigung</strong> in Hessen &amp; Umgebung.
        <strong class="text-zinc-900">24/7 Notdienst</strong>, transparente <strong class="text-zinc-900">Festpreise</strong>,
        zertifizierter Fachbetrieb – seit 15+ Jahren.
      </p>

      <div class="mt-7 flex items-center gap-3 flex-wrap">
        <a href="tel:+015126004444"
           class="tracking-wider py-2 px-7 text-center rounded-full border-2 border-[#0165a1] bg-[#0165a1] text-white font-medium hover:opacity-90 transition">
          Jetzt anrufen
        </a>
        <a href="mailto:info@saintar24.de"
           class="inline-flex items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900 transition">
          <i class="fa-solid fa-envelope text-[#0165a1]"></i> info@saintar24.de
        </a>
      </div>
    </div>

    <!-- Seiten (Pages) -->
    <div data-aos="fade-up" data-aos-delay="100">
      <h3 class="text-2xl text-zinc-900 font-semibold">Seiten</h3>
      <ul class="mt-5 space-y-3 text-zinc-700 font-medium">
        <li><a href="/index.html" class="hover:text-[#0165a1]">Startseite</a></li>
        <li><a href="/about.html" class="hover:text-[#0165a1]">über</a></li>
        <li><a href="/services.html" class="hover:text-[#0165a1]">Leistungen </a></li>
        <li><a href="/location.html" class="hover:text-[#0165a1]">Standorte </a></li>
        <li><a href="/gallery.html" class="hover:text-[#0165a1]">Galerie </a></li>
        <li><a href="/contact.html" class="hover:text-[#0165a1]">Kontakt </a></li>
        <li><a href="/impressum.html" class="hover:text-[#0165a1]">Impressum </a></li>
        <li><a href="/datenschutz.html" class="hover:text-[#0165a1]">Datenschutzerklärung </a></li>
      </ul>
    </div>

    <!-- Leistungen -->
    <div data-aos="fade-up" data-aos-delay="200">
      <h3 class="text-2xl text-zinc-900 font-semibold">Leistungen</h3>
      <ul class="mt-5 space-y-3 text-zinc-700 font-medium">
        <li><a href="/services.html" class="hover:text-[#0165a1]">Abflussreinigung (Bad · Küche · WC)</a></li>
        <li><a href="/services.html" class="hover:text-[#0165a1]">Rohrreinigung</a></li>
        <li><a href="/services.html" class="hover:text-[#0165a1]">Kanalreinigung</a></li>
        <li><a href="/services.html" class="hover:text-[#0165a1]">Hochdruckspülung</a></li>
        <li><a href="/services.html" class="hover:text-[#0165a1]">TV-Kanalinspektion</a></li>
        <li><a href="/services.html" class="hover:text-[#0165a1]">Zisternenreinigung</a></li>
        <li><a href="/services.html" class="hover:text-[#0165a1]">Dachrinne &amp; Fallrohr</a></li>
      </ul>
    </div>

    <!-- Kontakt -->
    <div data-aos="fade-up" data-aos-delay="300">
      <h3 class="text-2xl text-zinc-900 font-semibold">Kontakt</h3>
      <ul class="mt-5 space-y-3 text-zinc-700 font-medium">
        <li class="flex items-center gap-2">
          <i class="fa-solid fa-phone text-[#0165a1]"></i>
          <a href="tel:+015126004444" class="hover:text-[#0165a1]">015126004444</a>
        </li>
        <li class="flex items-center gap-2">
          <i class="fa-solid fa-envelope text-[#0165a1]"></i>
          <a href="mailto:info@saintar24.de" class="hover:text-[#0165a1]">info@saintar24.de</a>
        </li>
        <li class="flex items-center gap-2">
          <i class="fa-solid fa-clock text-[#0165a1]"></i>
          <span>24/7 Notdienst</span>
        </li>
      </ul>
    </div>

  </div>

  <!-- Legal / bottom bar -->
  <div class="mt-8 border-t border-zinc-200 pt-4">
    <p class="text-center text-zinc-600 mt-4">
      Copyright © <span id="copyright"></span> Sanitar24. Alle Rechte vorbehalten.
    </p>
  </div>
</footer>

`

const year = new Date().getFullYear()
document.getElementById('copyright').textContent = year
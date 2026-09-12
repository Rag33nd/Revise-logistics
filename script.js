// ==============================================================
// 0. I18N NYELVI RENDSZER ÉS SZÓTÁR (TELJES)
// ==============================================================
const translations = {
    "en": {
        // Navigáció
        "nav-problem": "The Problem",
        "nav-process": "How it Works",
        "nav-roi": "ROI Calculator",
        "nav-cta": "Get Started",
        
        // Hero & Fájdalompont
        "hero-title": "We turn your<br>returns into revenue.",
        "hero-sub": "Premium reverse logistics and open-box management.",
        "pain-title": "The e-commerce black hole.",
        "pain-subtitle": "of online purchases are returned.<br>Stop losing money on reverse logistics.",
        
        // Folyamat lépései
        "step-1-title": "1. The Return",
        "step-1-desc": "The customer initiates a return. Instead of going back to your warehouse, it comes to us.",
        "step-2-title": "2. Direct Routing",
        "step-2-desc": "You simply update your return address. The customer's package is automatically routed via your existing courier directly to the Revise warehouse.",
        "step-3-title": "3. Inspection",
        "step-3-desc": "Experts meticulously inspect the product for any damages or missing components.",
        "step-4-title": "4. Clean & Renew",
        "step-4-desc": "We perform professional deep cleaning, aesthetic detailing, and restore the item to its premium visual state.",
        "step-5-title": "5. Repackaging",
        "step-5-desc": "The item gets fresh, secure, open-box certified packaging.",
        "step-6-title": "6. Resell & Profit",
        "step-6-desc": "We list and sell the renewed product on secondary markets. You get the revenue.",
        
        // ROI Kalkulátor
        "roi-title": "Calculate your hidden revenue.",
        "roi-desc": "Use the slider below to estimate how much trapped capital you can free up every month.",
        "roi-label": "Monthly Returns Value",
        "roi-est": "Estimated Recovery",
        "roi-badge": "Zero Upfront Cost",
        "roi-footer": "No monthly fees. No storage fees. We only take a commission after a successful resell.",
        
        // Kapcsolat és Footer
        "contact-title": "Ready to recover your revenue?",
        "contact-desc": "Leave your details and we'll calculate a custom logistics plan for your store.",
        "form-name": "Your Name",
        "form-email": "Company Email",
        "form-url": "Website URL (Optional)",
        "contact-btn": "Get Your Free ROI Audit",
        "footer-copy": "&copy; 2026 Revise. All rights reserved.",
        "footer-privacy": "Privacy Policy",
        "footer-tos": "Terms of Service",
        "legal-back": "← Back to Revise"
    },
    "hu": {
        "nav-problem": "A Probléma",
        "nav-process": "A Folyamat",
        "nav-roi": "ROI Kalkulátor",
        "nav-cta": "Kezdés",
        
        "hero-title": "Bevételt csinálunk a<br>visszárudból.",
        "hero-sub": "Prémium inverz logisztika és értékmentés webshopoknak.",
        "pain-title": "Az e-kereskedelem fekete lyuka.",
        "pain-subtitle": "az online vásárlások visszaküldési aránya.<br>Ne veszíts több pénzt a selejtezésen.",
        
        "step-1-title": "1. A Visszáru",
        "step-1-desc": "A vevő elindítja a visszaküldést. A csomag a te raktárad helyett egyenesen hozzánk érkezik.",
        "step-2-title": "2. Átirányítás",
        "step-2-desc": "Csak frissíted a visszaküldési címet. A vásárló csomagja a futárszolgálatoddal automatikusan a mi raktárunkba jön.",
        "step-3-title": "3. Állapotfelmérés",
        "step-3-desc": "Szakértőink alaposan átvizsgálják a terméket az esetleges sérülések vagy hiányzó tartozékok miatt.",
        "step-4-title": "4. Felújítás",
        "step-4-desc": "Professzionális mélytisztítást és esztétikai felfrissítést végzünk, hogy visszaállítsuk a termék prémium állapotát.",
        "step-5-title": "5. Újracsomagolás",
        "step-5-desc": "A termék friss, biztonságos, 'open-box' minősítésű csomagolást kap.",
        "step-6-title": "6. Értékesítés",
        "step-6-desc": "Meghirdetjük és eladjuk a felújított terméket a másodlagos piacokon. A bevétel pedig a tiéd.",
        
        "roi-title": "Számold ki a rejtett bevételed.",
        "roi-desc": "Használd a csúszkát, és nézd meg, mennyi beragadt tőkét tudsz felszabadítani minden hónapban.",
        "roi-label": "Havi Visszáru Értéke",
        "roi-est": "Várható Megtérülés",
        "roi-badge": "Zéró Előzetes Költség",
        "roi-footer": "Nincs havidíj. Nincs tárolási díj. Csak a sikeres eladások után vonunk le jutalékot.",
        
        "contact-title": "Visszaszerezzük a pénzed?",
        "contact-desc": "Add meg az adataidat, és elkészítjük a webshopodra szabott logisztikai tervet.",
        "form-name": "A te neved",
        "form-email": "Céges E-mail Cím",
        "form-url": "Weboldal címe (Opcionális)",
        "contact-btn": "Kérem az Ingyenes ROI Auditot",
        "footer-copy": "&copy; 2026 Revise. Minden jog fenntartva.",
        "footer-privacy": "Adatvédelmi Tájékoztató",
        "footer-tos": "ÁSZF",
        "legal-back": "← Vissza a Revise oldalára"
    }
};

// A SZÓTÁR RÉSZE MARAD A RÉGI (const translations = { ... })

let currentLang = localStorage.getItem('revise_lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('revise_lang', lang);

    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-hu').classList.toggle('active', lang === 'hu');

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // ⬇️ ÚJ RÉSZ: Miután kicserélte a szöveget, frissíti az animációkat!
    if (typeof ScrollTrigger !== 'undefined') {
        // Várunk 50 ezredmásodpercet, hogy a böngésző biztosan betördelje az új szavakat, 
        // utána ráparancsolunk a GSAP-ra, hogy számolja újra a magasságokat!
        setTimeout(() => ScrollTrigger.refresh(), 50);
    }
}

document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-hu').addEventListener('click', () => setLanguage('hu'));

// ⬇️ ÚJ RÉSZ: Kivettük a 'DOMContentLoaded'-ből, hogy AZONNAL lefusson, még mielőtt a GSAP mérni kezd!
setLanguage(currentLang);

// ==============================================================
// 1. LENIS (SMOOTH SCROLL) - Ennek kell legelöl lennie!
// ==============================================================
const lenis = new Lenis({
    duration: 1.2, 
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    smooth: true,
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);
gsap.registerPlugin(ScrollTrigger);

// ==============================================================
// 2. FEJLÉC ALAP LOGIKA (Kattintás és Áttetszőség)
// ==============================================================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.querySelectorAll('.header-nav a, .header-cta').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        lenis.scrollTo(targetId, { duration: 1.5, ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    });
});

// ==============================================================
// 3. HERO SZEKCIÓ ANIMÁCIÓ (A TE VEZÉRLŐPULTOD)
// ==============================================================
let mm = gsap.matchMedia();

mm.add({
    isDesktop: "(min-width: 769px)",
    isMobile: "(max-width: 768px)"
}, (context) => {
    let { isDesktop, isMobile } = context.conditions;

    // ==========================================
    // ⚙️ GÉPES BEÁLLÍTÁSOK (Nagy monitor)
    // ==========================================
    let pc_DobozMeret    = (window.innerHeight * 2) / 250; 
    let pc_DobozPozicio  = "-30vh";  
    let pc_SzovegPozicio = "10vh";   
    let pc_DobozEltunes  = "128vh"; 
    let pc_SzovegEltunes = "-10vh"; // Gépnél menjen fel a fenébe
    let pc_GorgoHossz    = "+=1000"; 

    // ==========================================
    // 📱 MOBILOS BEÁLLÍTÁSOK (Telefon)
    // ==========================================
    let mobil_DobozMeret    = (window.innerWidth * 2) / 250;
    
    // Itt van a dobozod. Ha feljebb akarod: "-10vh". Ha lejjebb: "10vh".
    let mobil_DobozPozicio  = "-10vh"; 
    
    // ⬇️ EZ MOST MÁR SZÓT FOG FOGADNI NEKED!
    // Ha lejjebb akarod a szöveget, használj pozitív számot (pl. "15vh", "20vh")
    let mobil_SzovegPozicio = "10vh";   
    
    // Hova tűnjön a doboz a görgetés végén?
    let mobil_DobozEltunes  = "80vh"; 

    // ⬇️ EZ RÁNTOTTA FEL A GECIBE A SZÖVEGEDET EDDIG!
    // Ha azt akarod, hogy a végén alig menjen fel, írd át ezt pl. "-10vh"-ra!
    let mobil_SzovegEltunes = "0vh"; 

    let mobil_GorgoHossz    = "+=1200"; 


    // --- INNENTŐL LEFELÉ A KÓD AUTOMATIKUSAN DOLGOZIK ---
    let akt_DobozMeret    = isMobile ? mobil_DobozMeret : pc_DobozMeret;
    let akt_DobozPozicio  = isMobile ? mobil_DobozPozicio : pc_DobozPozicio;
    let akt_SzovegPozicio = isMobile ? mobil_SzovegPozicio : pc_SzovegPozicio;
    let akt_DobozEltunes  = isMobile ? mobil_DobozEltunes : pc_DobozEltunes;
    let akt_SzovegEltunes = isMobile ? mobil_SzovegEltunes : pc_SzovegEltunes;
    let akt_GorgoHossz    = isMobile ? mobil_GorgoHossz : pc_GorgoHossz;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-container",
            start: "top top",
            end: akt_GorgoHossz,
            scrub: 1,
            pin: true
        }
    });

    // 1. FÁZIS: DOBOZ KINYÍLIK ÉS LAPUL (0.0 - 1.0 másodperc)
    tl.to(".flap-left", { rotateY: -220, duration: 1 }, 0)
      .to(".flap-right", { rotateY: 220, duration: 1 }, 0)
      .to(".box-half", { rotateX: -12, rotateZ: 0, rotateY: 0, duration: 0.5, ease: "power2.inOut" }, 0.2)
      .to(".scene", { scale: akt_DobozMeret, y: akt_DobozPozicio, duration: 0.5, ease: "power2.inOut" }, 0.2)
      
    // 2. FÁZIS: SZÖVEG BEJÖN A HELYÉRE (0.5 - 1.0 másodperc)
    // Megcsinálja, amit te kértél a mobil_SzovegPozicio-ban, ÉS OTT MARAD!
      .set(".hero-text-static", { opacity: 1 }, 0.5)
      .fromTo(".hero-text-static", 
          { y: 0 }, 
          { y: akt_SzovegPozicio, duration: 0.5, ease: "power2.out" }, 0.5)

    // --- ITT VAN EGY FÉL MÁSODPERC PIHENŐ (1.0-tól 1.5-ig), HOGY LÁSD A MŰVEDET ---

    // 3. FÁZIS: GÖRGETÉS VÉGE - ELTŰNÉS (1.5 - 2.5 másodperc)
      .to(".scene", { y: akt_DobozEltunes, opacity: 1, duration: 0.8, ease: "power2.inOut" }, 0.8)
      .to(".hero-text-static", { y: akt_SzovegEltunes, duration: 0.8, ease: "power2.inOut" }, 0.8);
      
    return () => { tl.kill(); }; 
});

// ==============================================================
// 4. THE PAIN POINT (Zuhanó Grafikon)
// ==============================================================
const painTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".pain-section",
        start: "top 60%", 
        toggleActions: "play none none reverse" 
    }
});
painTl.to(".pain-bg-chart", { clipPath: "inset(0 0% 0 0)", duration: 1.5, ease: "power3.inOut" }, 0);
painTl.fromTo("#pain-counter", { innerHTML: 0 }, { innerHTML: 30, duration: 1.5, ease: "power2.out", snap: { innerHTML: 1 } }, 0);

// ==============================================================
// 5. PINNED PROCESS (A Leragadó Folyamat)
// ==============================================================
gsap.to("#shoe-img, #sad-face", { y: -15, duration: 2, ease: "sine.inOut", yoyo: true, repeat: -1 });
gsap.to("#clipboard-img", { y: -10, rotation: 5, duration: 2.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5 }); 
gsap.to("#spray-img", { y: -12, duration: 1.8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.2 }); 

const processTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".process-pinned-section",
        start: "top top", 
        end: "+=4000", 
        scrub: 1, 
        pin: true,
        snap: { snapTo: "labels", duration: { min: 0.2, max: 0.5 }, ease: "power1.inOut", delay: 0.1 }
    }
});

processTl.addLabel("step1", 0);
processTl.addLabel("step2", 1);
processTl.addLabel("step3", 2);
processTl.addLabel("step4", 3);
processTl.addLabel("step5", 4);
processTl.addLabel("step6", 5.5); 

document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const label = "step" + (index + 1); 
        const time = processTl.labels[label]; 
        const totalDuration = processTl.duration(); 
        const progress = time / totalDuration; 
        const st = processTl.scrollTrigger;
        const scrollTarget = st.start + (st.end - st.start) * progress;
        lenis.scrollTo(scrollTarget, { duration: 1.2, ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    });
});

processTl.to(".timeline-fill", { height: "20%", duration: 0.5, ease: "power1.inOut" }, 0.5);
processTl.to("#text-1", { opacity: 0, y: -30, duration: 0.5 }, 0.5);
processTl.to("#dot-1", { scale: 1, backgroundColor: "var(--box-light)", boxShadow: "none", duration: 0.2 }, 0.5);
processTl.fromTo("#text-2", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, 0.5);
processTl.to("#dot-2", { scale: 1.5, backgroundColor: "var(--box-inside)", boxShadow: "0 0 15px rgba(109, 97, 88, 0.8)", duration: 0.2 }, 0.5);

processTl.to("#sad-face", { opacity: 0, x: -50, duration: 0.5 }, 0.2); 
processTl.fromTo("#van-container", { x: 600, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, 0.3);
processTl.to(".van-wheel", { rotation: -360, duration: 0.8 }, 0.3); 
processTl.to("#shoe-wrapper", { x: 100, y: -50, scale: 0.3, opacity: 0, duration: 0.5 }, 0.5); 

processTl.to(".timeline-fill", { height: "40%", duration: 0.5, ease: "power1.inOut" }, 1.5);
processTl.to("#text-2", { opacity: 0, y: -30, duration: 0.5 }, 1.5);
processTl.to("#dot-2", { scale: 1, backgroundColor: "var(--box-light)", boxShadow: "none", duration: 0.2 }, 1.5);
processTl.fromTo("#text-3", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, 1.5);
processTl.to("#dot-3", { scale: 1.5, backgroundColor: "var(--box-inside)", boxShadow: "0 0 15px rgba(109, 97, 88, 0.8)", duration: 0.2 }, 1.5);

processTl.set("#shoe-wrapper", { zIndex: 35 }, 1.1);
processTl.to("#shoe-wrapper", { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.3 }, 1.1); 
processTl.to("#van-container", { x: -600, opacity: 0, duration: 0.8 }, 1.3); 
processTl.to(".van-wheel", { rotation: -720, duration: 0.8 }, 1.3); 
processTl.set("#shoe-wrapper", { zIndex: 20 }, 1.8); 
processTl.fromTo("#clipboard-wrapper", { opacity: 0, x: -100, y: -60, rotation: -15 }, { opacity: 1, x: -80, y: -40, rotation: 0, duration: 0.5 }, 1.6);

processTl.to(".timeline-fill", { height: "60%", duration: 0.5, ease: "power1.inOut" }, 2.5);
processTl.to("#text-3", { opacity: 0, y: -30, duration: 0.5 }, 2.5);
processTl.to("#dot-3", { scale: 1, backgroundColor: "var(--box-light)", boxShadow: "none", duration: 0.2 }, 2.5);
processTl.fromTo("#text-4", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, 2.5);
processTl.to("#dot-4", { scale: 1.5, backgroundColor: "var(--box-inside)", boxShadow: "0 0 15px rgba(109, 97, 88, 0.8)", duration: 0.2 }, 2.5);

processTl.to("#clipboard-wrapper", { opacity: 0, y: -100, duration: 0.4 }, 2.3);
processTl.fromTo("#spray-wrapper", { opacity: 0, x: -80, y: -30 }, { opacity: 1, x: -50, y: -10, duration: 0.5 }, 2.6);
processTl.fromTo("#brush-wrapper", { opacity: 0, x: 80, y: 30 }, { opacity: 1, x: 50, y: 10, duration: 0.5 }, 2.6);
processTl.to("#brush-wrapper", { x: "-=40", y: "-=20", yoyo: true, repeat: 3, duration: 0.2 }, 2.9); 

processTl.to(".timeline-fill", { height: "80%", duration: 0.5, ease: "power1.inOut" }, 3.5);
processTl.to("#text-4", { opacity: 0, y: -30, duration: 0.5 }, 3.5);
processTl.to("#dot-4", { scale: 1, backgroundColor: "var(--box-light)", boxShadow: "none", duration: 0.2 }, 3.5);
processTl.fromTo("#text-5", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, 3.5);
processTl.to("#dot-5", { scale: 1.5, backgroundColor: "var(--box-inside)", boxShadow: "0 0 15px rgba(109, 97, 88, 0.8)", duration: 0.2 }, 3.5);

processTl.to("#spray-wrapper, #brush-wrapper", { opacity: 0, x: 200, duration: 0.4 }, 3.3);
processTl.fromTo("#box-back", { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 0.15 }, 3.5);
processTl.fromTo("#box-front", { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 0.15 }, 3.5);
processTl.to("#shoe-wrapper", { y: -40, scale: 0.5, duration: 0.5 }, 3.4);
processTl.to("#shoe-wrapper", { opacity: 0, duration: 0.3 }, 4.3); 

processTl.to(".timeline-fill", { height: "100%", duration: 0.5, ease: "power1.inOut" }, 4.5);
processTl.to("#text-5", { opacity: 0, y: -30, duration: 0.5 }, 4.5);
processTl.to("#dot-5", { scale: 1, backgroundColor: "var(--box-light)", boxShadow: "none", duration: 0.2 }, 4.5);
processTl.fromTo("#text-6", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, 4.5);
processTl.to("#dot-6", { scale: 1.5, backgroundColor: "var(--box-inside)", boxShadow: "0 0 15px rgba(109, 97, 88, 0.8)", duration: 0.2 }, 4.5);

processTl.to("#box-back, #box-front", { opacity: 0, y: 100, duration: 0.6 }, 4.4);
processTl.fromTo("#coin", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, rotation: 360, duration: 0.8, ease: "back.out(1.5)" }, 4.7);
// EXTRA BUFFER: Ezzel megakadályozzuk, hogy a Coin eltűnjön a legvégén!
processTl.to("#coin", { rotation: 360, duration: 0.5 }, 5.5);

// ==============================================================
// 6. ROI KALKULÁTOR
// ==============================================================
const returnSlider = document.getElementById('return-slider');
const sliderValDisplay = document.getElementById('slider-val');
const recoveredValDisplay = document.getElementById('recovered-val');

const formatNumber = (num) => { return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); };
let startingValue = parseInt(returnSlider.value) || 5000000;
let roiData = { currentInput: startingValue, currentRecovered: startingValue * 0.7 };

sliderValDisplay.innerText = formatNumber(roiData.currentInput);
recoveredValDisplay.innerText = formatNumber(roiData.currentRecovered);

returnSlider.addEventListener('input', function() {
    let targetInput = parseInt(this.value);
    let targetRecovered = targetInput * 0.7; 
    gsap.to(roiData, {
        currentInput: targetInput, currentRecovered: targetRecovered, duration: 0.4, ease: "power2.out",
        onUpdate: () => {
            sliderValDisplay.innerText = formatNumber(roiData.currentInput);
            recoveredValDisplay.innerText = formatNumber(roiData.currentRecovered);
        }
    });
});

const roiTl = gsap.timeline({ scrollTrigger: { trigger: ".roi-section", start: "top 75%" }});
roiTl.fromTo(".roi-input-side", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, 0);
roiTl.fromTo(".roi-output-side", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, 0.2);

// ==============================================================
// 7. FEJLÉC SÖTÉT MÓD (EZNEK KÖTELEZŐ A LEGALSÓ SORBAN LENNIE!)
// ==============================================================
ScrollTrigger.create({
    trigger: "#process", /* ⬅️ ITT A VÁLTOZÁS: Már a "How it Works" résznél elindul! */
    start: "top 50px", 
    endTrigger: ".footer-section",
    end: "bottom top",
    onEnter: () => header.classList.add("dark-mode"),
    onLeaveBack: () => header.classList.remove("dark-mode"),
});

// ==============================================================
// 8. BIZTONSÁGI FRISSÍTÉS (Hogy az oldal alja sose tűnjön el)
// ==============================================================

// 1. Csak akkor számoljuk újra a magasságot, ha MÁR MINDEN KÉP BETÖLTÖTT!
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});

// 2. Ha a mobil böngésző sávja eltűnik/megjelenik görgetés közben (változik a magasság):
new ResizeObserver(() => {
    ScrollTrigger.refresh();
}).observe(document.body);
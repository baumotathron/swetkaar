// Swetkaar AI - Base interactions
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Holographic border shimmer via CSS variable animation tick
  const root = document.documentElement;
  let t = 0; let raf;
  function tick(){
    t += 0.0025; // slow
    root.style.setProperty('--holo-shift', String(Math.sin(t) * 50 + 50) + '%');
    raf = requestAnimationFrame(tick);
  }
  if(!prefersReduced){ raf = requestAnimationFrame(tick); }

  // Simple scroll-trigger for soft reveals
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('[data-reveal]').forEach(el=> io.observe(el));

  initHeroSlider();
  initInsightsSliders();

  // Interactive card mouse tracking for gradient effects
  if(!prefersReduced){
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
    });
  }

  // Before/After slider init (if present)
  document.querySelectorAll('.ba').forEach(initBeforeAfter);

  function initBeforeAfter(wrapper){
    const handle = wrapper.querySelector('.ba-handle');
    const top = wrapper.querySelector('.ba-top');
    if(!handle || !top) return;

    let drag = false;
    const rect = ()=> wrapper.getBoundingClientRect();
    const setX = (x)=>{
      const r = rect();
      const clamped = Math.max(0, Math.min(x - r.left, r.width));
      const pct = clamped / r.width * 100;
      handle.style.left = pct + '%';
      top.style.clipPath = `inset(0 ${100-pct}% 0 0)`;
    };
    const onMove = (e)=>{ if(!drag) return; setX(e.clientX ?? (e.touches?.[0]?.clientX || 0)); };
    const onDown = (e)=>{ drag = true; onMove(e); };
    const onUp = ()=> drag = false;
    wrapper.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    // Init center
    setX(rect().left + rect().width/2);
  }

  // Services hero parallax and interactions
  const servicesBanner = document.getElementById('servicesBanner');
  const servicesSvg = document.querySelector('.services-svg');
  const zones = document.querySelectorAll('.services-svg .zone');
  
  if(servicesBanner && !prefersReduced){
    // Parallax on scroll
    let lastScrollY = 0;
    let ticking = false;
    
    function updateParallax(){
      const scrollY = window.scrollY;
      const bannerRect = servicesBanner.getBoundingClientRect();
      const bannerTop = bannerRect.top + scrollY;
      const bannerHeight = bannerRect.height;
      
      if(scrollY < bannerTop + bannerHeight && scrollY > bannerTop - window.innerHeight){
        const progress = Math.max(0, Math.min(1, (scrollY - bannerTop + window.innerHeight) / (bannerHeight + window.innerHeight)));
        const parallaxOffset = (progress - 0.5) * 20;
        if(servicesSvg){
          servicesSvg.style.transform = `translateY(${parallaxOffset}px)`;
        }
      }
      ticking = false;
    }
    
    function requestTick(){
      if(!ticking){
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Mouse move parallax for enhanced depth
    let mouseX = 0, mouseY = 0;
    servicesBanner.addEventListener('mousemove', (e)=>{
      const rect = servicesBanner.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      
      if(servicesSvg){
        servicesSvg.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    }, { passive: true });
    
    servicesBanner.addEventListener('mouseleave', ()=>{
      if(servicesSvg){
        servicesSvg.style.transform = '';
      }
    });
    
    // Zone click to scroll to corresponding section
    const connectionLines = document.querySelectorAll('#connections .energy-line');
    
    zones.forEach((zone, index)=>{
      zone.addEventListener('click', ()=>{
        const sections = document.querySelectorAll('section > .container > h2');
        if(sections[index]){
          sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      
      // Enhanced hover feedback
      zone.addEventListener('mouseenter', ()=>{
        const particles = document.querySelectorAll('#particles circle');
        particles.forEach(p => {
          p.style.animationDuration = '1.5s';
        });
        
        // Highlight corresponding connection line
        if(connectionLines[index]){
          connectionLines[index].style.opacity = '0.9';
          connectionLines[index].style.strokeWidth = '2';
        }
      });
      
      zone.addEventListener('mouseleave', ()=>{
        const particles = document.querySelectorAll('#particles circle');
        particles.forEach(p => {
          p.style.animationDuration = '';
        });
        
        // Reset connection line
        if(connectionLines[index]){
          connectionLines[index].style.opacity = '';
          connectionLines[index].style.strokeWidth = '';
        }
      });
    });
  }

  function initHeroSlider(){
    const slider = document.querySelector('.hero-slider');
    if(!slider) return;

    const track = slider.querySelector('.hero-slider-track');
    const slides = Array.from(track?.children || []);
    const nav = slider.querySelector('.hero-slider-nav');

    if(!track || slides.length === 0 || !nav) return;

    let index = 0;
    let autoplayId;

    slides.forEach((_, idx)=>{
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'hero-slider-dot';
      dot.setAttribute('aria-label', `Showcase slide ${idx + 1}`);
      dot.addEventListener('click', ()=> goToSlide(idx, true));
      nav.appendChild(dot);
    });

    const dots = Array.from(nav.children);

    function goToSlide(targetIndex, userTriggered = false){
      index = (targetIndex + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, idx)=> dot.classList.toggle('active', idx === index));

      if(userTriggered && autoplayId){
        clearInterval(autoplayId);
        autoplayId = startAutoplay();
      }
    }

    function startAutoplay(){
      if(prefersReduced) return null;
      return setInterval(()=> goToSlide(index + 1), 6000);
    }

    goToSlide(0);
    autoplayId = startAutoplay();

    slider.addEventListener('mouseenter', ()=> autoplayId && clearInterval(autoplayId));
    slider.addEventListener('mouseleave', ()=>{
      if(!prefersReduced){
        autoplayId = startAutoplay();
      }
    });
  }

  function initInsightsSliders(){
    const sliders = document.querySelectorAll('.insights-slider');
    if(sliders.length === 0) return;

    sliders.forEach((slider, sliderIndex) => {
      const track = slider.querySelector('.insights-slider-track');
      const slides = Array.from(track?.children || []);
      const nav = slider.querySelector('.insights-slider-nav');
      const sliderId = sliderIndex + 1;

      if(!track || slides.length === 0 || !nav) return;

      let index = 0;
      let autoplayId;

      // Create dots for navigation
      slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'insights-slider-dot';
        dot.setAttribute('aria-label', `Slider ${sliderId} slide ${idx + 1}`);
        dot.addEventListener('click', () => goToSlide(idx, true));
        nav.appendChild(dot);
      });

      const dots = Array.from(nav.children);

      function goToSlide(targetIndex, userTriggered = false){
        index = (targetIndex + slides.length) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, idx) => dot.classList.toggle('active', idx === index));

        if(userTriggered && autoplayId){
          clearInterval(autoplayId);
          autoplayId = startAutoplay();
        }
      }

      function startAutoplay(){
        if(prefersReduced) return null;
        return setInterval(() => goToSlide(index + 1), 5000);
      }

      goToSlide(0);
      autoplayId = startAutoplay();

      slider.addEventListener('mouseenter', () => autoplayId && clearInterval(autoplayId));
      slider.addEventListener('mouseleave', () => {
        if(!prefersReduced){
          autoplayId = startAutoplay();
        }
      });
    });
  }
})();



/**
 * Hoffman.Legal — Main JavaScript
 * Pure vanilla JS for interactivity without frameworks
 */

(function () {
  'use strict';

  // ===== SCROLL PROGRESS BAR =====
  const scrollProgress = document.getElementById('scroll-progress');

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
  }

  // ===== NAVIGATION SCROLL EFFECT =====
  const nav = document.getElementById('nav');

  function updateNav() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  // ===== STICKY CTA BAR =====
  const stickyCta = document.getElementById('sticky-cta');

  function updateStickyCta() {
    if (window.scrollY > 600) {
      stickyCta.classList.add('visible');
    } else {
      stickyCta.classList.remove('visible');
    }
  }

  // Combined scroll handler (throttled)
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateScrollProgress();
        updateNav();
        updateStickyCta();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once on load



  // ===== MOBILE MENU =====
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    requestAnimationFrame(function () {
      mobileMenu.classList.add('open');
    });
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    mobileMenuBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>';
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    setTimeout(function () {
      mobileMenu.classList.add('hidden');
    }, 300);
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
    document.body.style.overflow = '';
  }

  mobileMenuBtn.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // ===== SCROLL-TRIGGERED ANIMATIONS =====
  const fadeElements = document.querySelectorAll('.fade-in-up');

  const fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '-30px' }
  );

  fadeElements.forEach(function (el) {
    fadeObserver.observe(el);
  });



  // ===== COUNT-UP ANIMATION =====
  const countElements = document.querySelectorAll('.count-up');

  const countObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  function animateCount(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 2000;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(tick);
  }

  countElements.forEach(function (el) {
    countObserver.observe(el);
  });

  // ===== FAQ ACCORDION =====
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const chevron = item.querySelector('.faq-chevron');

    trigger.addEventListener('click', function () {
      const isOpen = content.classList.contains('open');

      // Close all others
      faqItems.forEach(function (other) {
        const otherContent = other.querySelector('.faq-content');
        const otherChevron = other.querySelector('.faq-chevron');
        const otherTrigger = other.querySelector('.faq-trigger');
        otherContent.classList.remove('open');
        otherContent.classList.add('hidden');
        otherChevron.classList.remove('rotated');
        otherTrigger.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isOpen) {
        content.classList.remove('hidden');
        requestAnimationFrame(function () {
          content.classList.add('open');
        });
        chevron.classList.add('rotated');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Open first FAQ by default
  if (faqItems.length > 0) {
    const firstContent = faqItems[0].querySelector('.faq-content');
    const firstChevron = faqItems[0].querySelector('.faq-chevron');
    const firstTrigger = faqItems[0].querySelector('.faq-trigger');
    firstContent.classList.remove('hidden');
    firstContent.classList.add('open');
    firstChevron.classList.add('rotated');
    firstTrigger.setAttribute('aria-expanded', 'true');
  }



  // ===== TESTIMONIAL CAROUSEL =====
  const testimonials = [
    {
      quote: 'Within two weeks, every trace of my arrest photo was gone from Google. I finally feel like I can move forward with my life.',
      author: 'Former Client, TX',
      result: '12 sites removed in 14 days',
    },
    {
      quote: 'I was denied a job because of a mugshot from a dismissed case. David got it removed from every site and search engine. Truly life-changing.',
      author: 'Former Client, CA',
      result: '8 sites removed, case expunged',
    },
    {
      quote: 'Other companies wanted $1,500 per site. David handled all 6 sites as part of one flat fee with legal authority behind it. Worth every penny.',
      author: 'Former Client, FL',
      result: '6 sites removed, flat fee',
    },
    {
      quote: 'The peace of mind knowing a real attorney is handling this — not some random company — made all the difference. Professional and discreet.',
      author: 'Former Client, NY',
      result: 'Complete removal + monitoring',
    },
  ];

  let currentTestimonial = 0;
  const quoteEl = document.getElementById('testimonial-quote');
  const authorEl = document.getElementById('testimonial-author');
  const resultEl = document.getElementById('testimonial-result');
  const container = document.getElementById('testimonial-container');
  const dotsContainer = document.getElementById('testimonial-dots');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');

  // Create dots
  testimonials.forEach(function (_, i) {
    const dot = document.createElement('button');
    dot.className = 'w-2 h-2 rounded-full transition-all ' + (i === 0 ? 'bg-gold-500 w-6' : 'bg-dark-600 hover:bg-gray-500');
    dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
    dot.addEventListener('click', function () {
      goToTestimonial(i);
    });
    dotsContainer.appendChild(dot);
  });

  function updateTestimonial() {
    const t = testimonials[currentTestimonial];
    quoteEl.textContent = '\u201C' + t.quote + '\u201D';
    authorEl.textContent = t.author;
    resultEl.textContent = t.result;

    // Update dots
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
      if (i === currentTestimonial) {
        dots[i].className = 'w-6 h-2 rounded-full bg-gold-500 transition-all';
      } else {
        dots[i].className = 'w-2 h-2 rounded-full bg-dark-600 hover:bg-gray-500 transition-all';
      }
    }
  }

  function goToTestimonial(index) {
    container.classList.add('fading');
    setTimeout(function () {
      currentTestimonial = index;
      updateTestimonial();
      container.classList.remove('fading');
    }, 300);
  }

  prevBtn.addEventListener('click', function () {
    const next = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    goToTestimonial(next);
  });

  nextBtn.addEventListener('click', function () {
    const next = (currentTestimonial + 1) % testimonials.length;
    goToTestimonial(next);
  });

  // Initialize first testimonial
  updateTestimonial();

  // Auto-advance every 6 seconds
  let autoPlay = setInterval(function () {
    const next = (currentTestimonial + 1) % testimonials.length;
    goToTestimonial(next);
  }, 6000);

  // Pause on hover
  const testimonialCard = container.closest('.glass-card');
  if (testimonialCard) {
    testimonialCard.addEventListener('mouseenter', function () {
      clearInterval(autoPlay);
    });
    testimonialCard.addEventListener('mouseleave', function () {
      autoPlay = setInterval(function () {
        const next = (currentTestimonial + 1) % testimonials.length;
        goToTestimonial(next);
      }, 6000);
    });
  }



  // ===== MULTI-STEP CONTACT FORM =====
  const form = document.getElementById('contact-form');
  const formSteps = document.querySelectorAll('.form-step');
  const stepIndicators = document.querySelectorAll('.form-step-indicator');
  const formBack = document.getElementById('form-back');
  const formNext = document.getElementById('form-next');
  const formSubmit = document.getElementById('form-submit');
  const formSuccess = document.getElementById('form-success');
  const formNav = document.getElementById('form-nav');
  let currentStep = 1;

  function showStep(step) {
    formSteps.forEach(function (s) {
      s.classList.add('hidden');
    });
    const target = document.querySelector('[data-step="' + step + '"]');
    if (target) target.classList.remove('hidden');

    // Update indicators
    stepIndicators.forEach(function (ind, i) {
      ind.className = 'form-step-indicator h-1 flex-1 rounded-full transition-colors ' +
        (i < step ? 'bg-gold-500' : 'bg-dark-600');
    });

    // Update buttons
    if (step === 1) {
      formBack.classList.add('hidden');
      formBack.classList.remove('flex');
    } else {
      formBack.classList.remove('hidden');
      formBack.classList.add('flex');
    }

    if (step === 3) {
      formNext.classList.add('hidden');
      formSubmit.classList.remove('hidden');
      formSubmit.classList.add('inline-flex');
    } else {
      formNext.classList.remove('hidden');
      formSubmit.classList.add('hidden');
      formSubmit.classList.remove('inline-flex');
    }

    currentStep = step;
  }

  // Validation
  function validateStep(step) {
    if (step === 1) {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      let valid = true;

      // Name
      if (!name.value.trim()) {
        showError(name, 'Please enter your name');
        valid = false;
      } else {
        clearError(name);
      }

      // Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        showError(email, 'Please enter your email');
        valid = false;
      } else if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email');
        valid = false;
      } else {
        clearError(email);
      }

      // Phone
      const phoneClean = phone.value.replace(/\D/g, '');
      if (!phone.value.trim()) {
        showError(phone, 'Please enter your phone number');
        valid = false;
      } else if (phoneClean.length < 10) {
        showError(phone, 'Please enter a valid phone number');
        valid = false;
      } else {
        clearError(phone);
      }

      return valid;
    }

    if (step === 2) {
      const selected = document.querySelector('input[name="caseStatus"]:checked');
      return !!selected;
    }

    return true;
  }

  function showError(input, message) {
    const errorEl = input.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
    input.classList.add('border-red-400');
    input.classList.remove('border-dark-600');
  }

  function clearError(input) {
    const errorEl = input.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
    }
    input.classList.remove('border-red-400');
    input.classList.add('border-dark-600');
  }

  formNext.addEventListener('click', function () {
    if (validateStep(currentStep)) {
      showStep(currentStep + 1);
    }
  });

  formBack.addEventListener('click', function () {
    showStep(currentStep - 1);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Honeypot check
    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value) return;

    // Show success
    formSteps.forEach(function (s) { s.classList.add('hidden'); });
    formNav.classList.add('hidden');
    document.querySelector('.flex.gap-2.mb-8')?.classList.add('hidden');
    formSuccess.classList.remove('hidden');
  });

  // Real-time validation clear on input
  document.querySelectorAll('.form-input').forEach(function (input) {
    input.addEventListener('input', function () {
      clearError(input);
    });
  });

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80; // nav height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();
/**
 * Hoffman Legal — Main JavaScript
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
    var isOpen = mobileMenu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });



  // ===== SCROLL-TRIGGERED ANIMATIONS =====
  var fadeElements = document.querySelectorAll('.fade-in-up');

  var fadeObserver = new IntersectionObserver(
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

  // ===== COMPARISON SECTION ANIMATIONS =====
  var comparisonElements = document.querySelectorAll('.comparison-left, .comparison-right');

  var comparisonObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          comparisonObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '-50px' }
  );

  comparisonElements.forEach(function (el) {
    comparisonObserver.observe(el);
  });

  // ===== COUNT-UP ANIMATION =====
  var countElements = document.querySelectorAll('.count-up');

  var countObserver = new IntersectionObserver(
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
    var target = parseInt(el.dataset.target, 10);
    var duration = 2000;
    var startTime = performance.now();

    function tick(now) {
      var elapsed = now - startTime;
      var progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * target);
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
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var trigger = item.querySelector('.faq-trigger');
    var content = item.querySelector('.faq-content');
    var chevron = item.querySelector('.faq-chevron');

    trigger.addEventListener('click', function () {
      var isOpen = content.classList.contains('open');

      // Close all others
      faqItems.forEach(function (other) {
        var otherContent = other.querySelector('.faq-content');
        var otherChevron = other.querySelector('.faq-chevron');
        var otherTrigger = other.querySelector('.faq-trigger');
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
    var firstContent = faqItems[0].querySelector('.faq-content');
    var firstChevron = faqItems[0].querySelector('.faq-chevron');
    var firstTrigger = faqItems[0].querySelector('.faq-trigger');
    firstContent.classList.remove('hidden');
    firstContent.classList.add('open');
    firstChevron.classList.add('rotated');
    firstTrigger.setAttribute('aria-expanded', 'true');
  }



  // ===== TESTIMONIAL CAROUSEL =====
  var testimonials = [
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
      quote: 'The peace of mind knowing a real attorney is handling this \u2014 not some random company \u2014 made all the difference. Professional and discreet.',
      author: 'Former Client, NY',
      result: 'Complete removal + monitoring',
    },
  ];

  var currentTestimonial = 0;
  var quoteEl = document.getElementById('testimonial-quote');
  var authorEl = document.getElementById('testimonial-author');
  var resultEl = document.getElementById('testimonial-result');
  var container = document.getElementById('testimonial-container');
  var dotsContainer = document.getElementById('testimonial-dots');
  var prevBtn = document.getElementById('testimonial-prev');
  var nextBtn = document.getElementById('testimonial-next');

  // Create dots
  testimonials.forEach(function (_, i) {
    var dot = document.createElement('button');
    dot.className = 'w-2 h-2 rounded-full transition-all ' + (i === 0 ? 'bg-gold-500 w-6' : 'bg-gray-300 hover:bg-gray-400');
    dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
    dot.addEventListener('click', function () {
      goToTestimonial(i);
    });
    dotsContainer.appendChild(dot);
  });

  function updateTestimonial() {
    var t = testimonials[currentTestimonial];
    quoteEl.textContent = '\u201C' + t.quote + '\u201D';
    authorEl.textContent = t.author;
    resultEl.textContent = t.result;

    // Update dots
    var dots = dotsContainer.children;
    for (var i = 0; i < dots.length; i++) {
      if (i === currentTestimonial) {
        dots[i].className = 'w-6 h-2 rounded-full bg-gold-500 transition-all';
      } else {
        dots[i].className = 'w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all';
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
    var next = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    goToTestimonial(next);
  });

  nextBtn.addEventListener('click', function () {
    var next = (currentTestimonial + 1) % testimonials.length;
    goToTestimonial(next);
  });

  // Initialize first testimonial
  updateTestimonial();

  // Auto-advance every 6 seconds
  var autoPlay = setInterval(function () {
    var next = (currentTestimonial + 1) % testimonials.length;
    goToTestimonial(next);
  }, 6000);

  // Pause on hover
  var testimonialCard = container.closest('.glass-card');
  if (testimonialCard) {
    testimonialCard.addEventListener('mouseenter', function () {
      clearInterval(autoPlay);
    });
    testimonialCard.addEventListener('mouseleave', function () {
      autoPlay = setInterval(function () {
        var next = (currentTestimonial + 1) % testimonials.length;
        goToTestimonial(next);
      }, 6000);
    });
  }



  // ===== MULTI-STEP CONTACT FORM =====
  var form = document.getElementById('contact-form');
  var formSteps = document.querySelectorAll('.form-step');
  var stepIndicators = document.querySelectorAll('.form-step-indicator');
  var formBack = document.getElementById('form-back');
  var formNext = document.getElementById('form-next');
  var formSubmit = document.getElementById('form-submit');
  var formSuccess = document.getElementById('form-success');
  var formNav = document.getElementById('form-nav');
  var currentStep = 1;

  function showStep(step) {
    formSteps.forEach(function (s) {
      s.classList.add('hidden');
    });
    var target = document.querySelector('[data-step="' + step + '"]');
    if (target) target.classList.remove('hidden');

    // Update indicators
    stepIndicators.forEach(function (ind, i) {
      ind.className = 'form-step-indicator h-1 flex-1 rounded-full transition-colors ' +
        (i < step ? 'bg-gold-500' : 'bg-light-200');
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
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var phone = document.getElementById('phone');
      var valid = true;

      // Name
      if (!name.value.trim()) {
        showError(name, 'Please enter your name');
        valid = false;
      } else {
        clearError(name);
      }

      // Email
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
      var phoneClean = phone.value.replace(/\D/g, '');
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
      var selected = document.querySelector('input[name="caseStatus"]:checked');
      return !!selected;
    }

    return true;
  }

  function showError(input, message) {
    var errorEl = input.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
    input.classList.add('border-red-400');
    input.classList.remove('border-light-200');
  }

  function clearError(input) {
    var errorEl = input.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
    }
    input.classList.remove('border-red-400');
    input.classList.add('border-light-200');
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
    var honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value) return;

    // Show success
    formSteps.forEach(function (s) { s.classList.add('hidden'); });
    formNav.classList.add('hidden');
    var progressBar = document.querySelector('.flex.gap-2.mb-8');
    if (progressBar) progressBar.classList.add('hidden');
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
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var offset = 80; // nav height
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();

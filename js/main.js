/**
 * ZARA Coaching Institute - Ladnun
 * Core JavaScript Functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.querySelector('.main-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.querySelector('.back-to-top');
  const modalBackdrop = document.getElementById('admissionModal');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const enrollButtons = document.querySelectorAll('[data-action="open-enroll-modal"]');
  const modalCourseSelect = document.getElementById('modalCourseSelect');
  const toastContainer = document.getElementById('toastContainer');

  /* --------------------------------------------------------------------------
     1. Sticky Navigation & Scroll Effects
     -------------------------------------------------------------------------- */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top visibility
    if (window.scrollY > 450) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Active navigation highlight on scroll
    updateActiveNavLink();
  });

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     2. Mobile Menu Toggle
     -------------------------------------------------------------------------- */
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // Close mobile menu on clicking any link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  });

  // Active link highlighter
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 200;

    sections.forEach(sec => {
      const sectionTop = sec.offsetTop;
      const sectionHeight = sec.offsetHeight;
      const sectionId = sec.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  /* --------------------------------------------------------------------------
     3. Course Filter Tabs
     -------------------------------------------------------------------------- */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const courseCards = document.querySelectorAll('.course-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      courseCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     4. Admission Modal Popup Logic
     -------------------------------------------------------------------------- */
  function openModal(courseName = '') {
    if (modalBackdrop) {
      if (courseName && modalCourseSelect) {
        // Match course in select
        for (let i = 0; i < modalCourseSelect.options.length; i++) {
          if (modalCourseSelect.options[i].value === courseName || modalCourseSelect.options[i].text.includes(courseName)) {
            modalCourseSelect.selectedIndex = i;
            break;
          }
        }
      }
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  enrollButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedCourse = btn.getAttribute('data-course') || '';
      openModal(selectedCourse);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  /* --------------------------------------------------------------------------
     5. Toast Notification System
     -------------------------------------------------------------------------- */
  function showToast(message, type = 'success') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-30px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  /* --------------------------------------------------------------------------
     6. Form Handling (Admission & Contact)
     -------------------------------------------------------------------------- */
  const admissionModalForm = document.getElementById('admissionModalForm');
  const inlineAdmissionForm = document.getElementById('inlineAdmissionForm');
  const mainContactForm = document.getElementById('mainContactForm');

  // Handle Admission Submission (Modal)
  if (admissionModalForm) {
    admissionModalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const studentName = document.getElementById('modalStudentName').value.trim();
      const phone = document.getElementById('modalPhone').value.trim();
      const course = document.getElementById('modalCourseSelect').value;

      if (!studentName || !phone) {
        showToast('Please fill in student name and phone number.', 'info');
        return;
      }

      // Format WhatsApp Message link for instant inquiry
      const encodedMsg = encodeURIComponent(
        `Hello Imran Khan Sir,\nI would like to apply for admission at ZARA Coaching Institute.\n\n*Student Name:* ${studentName}\n*Phone:* ${phone}\n*Selected Course:* ${course}\n\nPlease share batch schedule and details.`
      );
      
      closeModal();
      admissionModalForm.reset();
      showToast(`Thank you, ${studentName}! Admission inquiry received. Opening WhatsApp...`, 'success');

      // Open WhatsApp directly
      setTimeout(() => {
        window.open(`https://wa.me/919123592415?text=${encodedMsg}`, '_blank');
      }, 1000);
    });
  }

  // Handle Inline Admission Form
  if (inlineAdmissionForm) {
    inlineAdmissionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const studentName = document.getElementById('inlineStudentName').value.trim();
      const phone = document.getElementById('inlinePhone').value.trim();
      const course = document.getElementById('inlineCourse').value;

      if (!studentName || !phone) {
        showToast('Please provide your name and contact phone.', 'info');
        return;
      }

      const encodedMsg = encodeURIComponent(
        `Hello Imran Sir,\nI want to apply for admission at ZARA Coaching Institute.\n*Student Name:* ${studentName}\n*Phone:* ${phone}\n*Class/Course:* ${course}`
      );

      inlineAdmissionForm.reset();
      showToast(`Thank you! Your seat reservation request has been submitted.`, 'success');

      setTimeout(() => {
        window.open(`https://wa.me/919123592415?text=${encodedMsg}`, '_blank');
      }, 800);
    });
  }

  // Handle Contact Form
  if (mainContactForm) {
    mainContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !phone) {
        showToast('Please enter your name and phone number.', 'info');
        return;
      }

      const encodedMsg = encodeURIComponent(
        `Hello Imran Khan Sir,\n*Query from ZARA Website*\n*Name:* ${name}\n*Phone:* ${phone}\n*Message:* ${message || 'General Inquiry'}`
      );

      mainContactForm.reset();
      showToast(`Message sent! Imran Khan Sir will contact you shortly.`, 'success');

      setTimeout(() => {
        window.open(`https://wa.me/919123592415?text=${encodedMsg}`, '_blank');
      }, 800);
    });
  }

  /* --------------------------------------------------------------------------
     7. Animated Statistics Counter (IntersectionObserver)
     -------------------------------------------------------------------------- */
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const countUp = (el, target, suffix = '') => {
    let current = 0;
    const duration = 1800; // ms
    const increment = Math.ceil(target / (duration / 25));
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target + suffix;
        clearInterval(timer);
      } else {
        el.textContent = current + suffix;
      }
    }, 25);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'), 10);
          const suffix = stat.getAttribute('data-suffix') || '';
          countUp(stat, target, suffix);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.about-section');
  if (statsSection) {
    observer.observe(statsSection);
  }

  /* --------------------------------------------------------------------------
     8. Lightbox for Gallery
     -------------------------------------------------------------------------- */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (lightboxModal && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('h4') ? item.querySelector('h4').textContent : '';
        const desc = item.querySelector('p') ? item.querySelector('p').textContent : '';
        
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.innerHTML = `<strong>${title}</strong><br><small>${desc}</small>`;
        lightboxModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightboxModal.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
});

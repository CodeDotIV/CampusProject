/**
 * Campus Projects - Main JavaScript
 * Handles: sticky nav, mobile menu, smooth scroll, tabs, FAQ accordion
 */

(function () {
  'use strict';

  const header = document.getElementById('header');
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');

  // ----- Sticky nav & scroll -----
  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----- Mobile menu toggle -----
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu when clicking a link (smooth scroll will happen via anchor)
    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ----- Smooth scroll for anchor links -----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ----- Projects tabs (By Year / By Department) -----
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const tabId = this.getAttribute('data-tab');
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabContents.forEach(function (content) {
        content.classList.remove('active');
        if (content.id === 'tab-' + tabId) {
          content.classList.add('active');
        }
      });
      this.classList.add('active');
    });
  });

  // ----- FAQ accordion -----
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', function () {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(function (other) {
        other.classList.remove('active');
        other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ----- Footer year -----
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ----- Scroll reveal (optional) -----
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.section-title, .section-subtitle, .service-card, .category-card, .timeline-item, .faq-item, .hero-title, .hero-desc, .hero-features, .hero-domains');
    reveals.forEach(function (el) {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 80) {
        el.classList.add('visible');
      }
    });
  }

  const sectionTitles = document.querySelectorAll('.section-title, .hero-title, .hero-desc, .hero-features, .hero-domains, .hero-card');
  sectionTitles.forEach(function (el) {
    el.classList.add('reveal');
  });

  document.querySelectorAll('.service-card, .category-card, .timeline-item, .faq-item').forEach(function (el) {
    el.classList.add('reveal');
  });

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  window.addEventListener('load', revealOnScroll);
})();

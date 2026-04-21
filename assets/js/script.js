'use strict';

/**
 * Teddy's Wealthome - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {

  // ========== MOBILE NAVBAR TOGGLE ==========
  const navbar = document.querySelector('[data-navbar]');
  const navToggler = document.querySelector('[data-nav-toggler]');

  if (navToggler && navbar) {
    navToggler.addEventListener('click', () => {
      navbar.classList.toggle('active');
      navToggler.classList.toggle('active');
    });

    // Close navbar when a link is clicked
    const navLinks = navbar.querySelectorAll('.navbar-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
        navToggler.classList.remove('active');
      });
    });
  }

  // ========== HEADER SCROLL EFFECT ==========
  const header = document.querySelector('[data-header]');

  if (header) {
    const toggleHeaderActive = () => {
      if (window.scrollY > 50) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    };

    window.addEventListener('scroll', toggleHeaderActive);
    toggleHeaderActive(); // Set initial state
  }

  // ========== FAVORITE BUTTON TOGGLE (Heart Icon) ==========
  // Using event delegation so it works even if you add more cards later
  document.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.fav-btn');
    if (favBtn) {
      e.preventDefault();
      favBtn.classList.toggle('active');
    }
  });

  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

});
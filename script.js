   // Dynamic Typing Effect
        const professions = [
            "GRAPHIC DESIGNER",
            "BRAND SPECIALIST", 
            "VISUAL ARTIST",
            "CREATIVE DIRECTOR"
        ];
        const professionElement = document.getElementById('profession');
        let currentProfession = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function typeProfession() {
            const currentText = professions[currentProfession];
            
            if (isDeleting) {
                professionElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                professionElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                currentProfession = (currentProfession + 1) % professions.length;
                typingSpeed = 500;
            }
            
            setTimeout(typeProfession, typingSpeed);
        }
        
        // Initialize animations
        document.addEventListener('DOMContentLoaded', () => {
            // Start typing effect
            setTimeout(typeProfession, 1000);
            
            // Add parallax effect
            document.addEventListener('mousemove', (e) => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                const content = document.querySelector('.hero-content');
                
                content.style.transform = `
                    translateX(${x * 20 - 10}px)
                    translateY(${y * 20 - 10}px)
                `;
                
                const planet1 = document.querySelector('.planet-1');
                const planet2 = document.querySelector('.planet-2');
                
                planet1.style.transform = `translate(${x * 40 - 20}px, ${y * 40 - 20}px)`;
                planet2.style.transform = `translate(${x * -30 + 15}px, ${y * -30 + 15}px)`;
            });
        });

          // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (navLinks.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });


// Initialize typing animation
document.addEventListener('DOMContentLoaded', typeProjects);

// Magnetic button effect
const magneticButtons = document.querySelectorAll('.magnetic');
magneticButtons.forEach(button => {
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const moveX = (x - centerX) / 10;
    const moveY = (y - centerY) / 10;
    
    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = '';
  });
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active state
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const filterValue = button.getAttribute('data-filter');
    
    // Filter items
    portfolioItems.forEach(item => {
      if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 50);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Initialize animations on scroll
document.addEventListener('DOMContentLoaded', () => {
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  portfolioItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(item);
  });
});

  // Particles.js Configuration for Process Section
    document.addEventListener('DOMContentLoaded', function () {
      if (document.getElementById('process-particles')) {
        particlesJS('process-particles', {
          "particles": {
            "number": {
              "value": 50,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": ["#6e44ff", "#ff6b6b", "#9d7aff"]
            },
            "shape": {
              "type": "circle"
            },
            "opacity": {
              "value": 0.3,
              "random": true
            },
            "size": {
              "value": 3,
              "random": true
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#6e44ff",
              "opacity": 0.2,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": true,
              "out_mode": "out"
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              }
            }
          }
        });
      }

      // Process step animation
      const processSection = document.querySelector('.process-section');
      const processSteps = document.querySelectorAll('.process-step');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            processSteps.forEach((step, index) => {
              setTimeout(() => {
                step.style.opacity = '1';
                step.style.transform = 'translateY(0)';
              }, index * 200);
            });
          }
        });
      }, { threshold: 0.1 });

      processSteps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      });

      observer.observe(processSection);
    });

     // Particles.js Configuration
    document.addEventListener('DOMContentLoaded', function () {
      if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 60,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#6e44ff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              }
            },
            "opacity": {
              "value": 0.3,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#6e44ff",
              "opacity": 0.2,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 140,
                "line_linked": {
                  "opacity": 0.5
                }
              },
              "push": {
                "particles_nb": 4
              }
            }
          },
          "retina_detect": true
        });
      }

      // Animation on scroll
      const servicesSection = document.querySelector('.services-section');
      const serviceCards = document.querySelectorAll('.service-card');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            serviceCards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, index * 150);
            });
          }
        });
      }, { threshold: 0.1 });

      serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      });

      observer.observe(servicesSection);
    });

     document.addEventListener('DOMContentLoaded', function () {
      // Testimonial animation on scroll
      const testimonialsSection = document.querySelector('.testimonials-section');
      const testimonialCards = document.querySelectorAll('.testimonial-card');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            testimonialCards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, index * 150);
            });
          }
        });
      }, { threshold: 0.1 });

      testimonialCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      });

      observer.observe(testimonialsSection);

      // Pause animation on hover for better readability
      const sliderTrack = document.querySelector('.slider-track');
      if (sliderTrack) {
        sliderTrack.addEventListener('mouseenter', () => {
          sliderTrack.style.animationPlayState = 'paused';
        });

        sliderTrack.addEventListener('mouseleave', () => {
          sliderTrack.style.animationPlayState = 'running';
        });
      }
    });

      // Particles.js Configuration for Contact Section
    document.addEventListener('DOMContentLoaded', function () {
      if (document.getElementById('contact-particles')) {
        particlesJS('contact-particles', {
          "particles": {
            "number": {
              "value": 40,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": ["#6e44ff", "#ff6b6b", "#9d7aff"]
            },
            "shape": {
              "type": "circle"
            },
            "opacity": {
              "value": 0.3,
              "random": true
            },
            "size": {
              "value": 3,
              "random": true
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#6e44ff",
              "opacity": 0.2,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": true,
              "out_mode": "out"
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              }
            }
          }
        });
      }

      // Form animation
      const contactSection = document.querySelector('.contact-section');
      const formGroups = document.querySelectorAll('.form-group');
      const infoCards = document.querySelectorAll('.info-card');
      const socialLinks = document.querySelector('.social-links');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate form elements
            formGroups.forEach((group, index) => {
              setTimeout(() => {
                group.style.opacity = '1';
                group.style.transform = 'translateY(0)';
              }, index * 200);
            });

            // Animate info cards
            setTimeout(() => {
              infoCards.forEach((card, index) => {
                setTimeout(() => {
                  card.style.opacity = '1';
                  card.style.transform = 'translateY(0)';
                }, index * 200);
              });

              // Animate social links
              setTimeout(() => {
                socialLinks.style.opacity = '1';
                socialLinks.style.transform = 'translateY(0)';
              }, 800);
            }, 400);
          }
        });
      }, { threshold: 0.1 });

      // Set initial states
      formGroups.forEach(group => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(30px)';
        group.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      });

      infoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      });

      socialLinks.style.opacity = '0';
      socialLinks.style.transform = 'translateY(30px)';
      socialLinks.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s';

      observer.observe(contactSection);
    });

    // FAQ Accordion Functionality
    document.addEventListener('DOMContentLoaded', function () {
      const faqItems = document.querySelectorAll('.faq-item');

      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
          // Close all other items
          faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
              otherItem.classList.remove('active');
            }
          });

          // Toggle current item
          item.classList.toggle('active');
        });
      });

      // Animation on scroll
      const faqSection = document.querySelector('.faq-section');
      const faqHeader = document.querySelector('.faq-header');
      const faqAccordion = document.querySelector('.faq-accordion');
      const faqCta = document.querySelector('.faq-cta');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            faqHeader.style.opacity = '1';
            faqHeader.style.transform = 'translateY(0)';

            setTimeout(() => {
              faqAccordion.style.opacity = '1';
              faqAccordion.style.transform = 'translateY(0)';
            }, 200);

            setTimeout(() => {
              faqCta.style.opacity = '1';
              faqCta.style.transform = 'translateY(0)';
            }, 400);
          }
        });
      }, { threshold: 0.1 });

      faqHeader.style.opacity = '0';
      faqHeader.style.transform = 'translateY(20px)';
      faqHeader.style.transition = 'all 0.6s ease-out';

      faqAccordion.style.opacity = '0';
      faqAccordion.style.transform = 'translateY(20px)';
      faqAccordion.style.transition = 'all 0.6s ease-out 0.2s';

      faqCta.style.opacity = '0';
      faqCta.style.transform = 'translateY(20px)';
      faqCta.style.transition = 'all 0.6s ease-out 0.4s';

      observer.observe(faqSection);
    });
     // Simple animation for footer elements
    document.addEventListener('DOMContentLoaded', function () {
      const footer = document.querySelector('.dark-footer');
      const footerCols = document.querySelectorAll('.footer-col');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            footerCols.forEach((col, i) => {
              setTimeout(() => {
                col.style.opacity = '1';
                col.style.transform = 'translateY(0)';
              }, i * 100);
            });
          }
        });
      }, { threshold: 0.1 });

      footerCols.forEach(col => {
        col.style.opacity = '0';
        col.style.transform = 'translateY(20px)';
        col.style.transition = 'all 0.5s ease-out';
      });

      observer.observe(footer);
    });

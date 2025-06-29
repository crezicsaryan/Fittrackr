var tl = gsap.timeline(".navbar") 


window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});


  gsap.from("#logo", {
    y: -30,
    duration: 0.6,
    opacity: 0
  });

  gsap.from("ul li", {
    y: -30,
    duration: 0.6,
    opacity: 0,
    stagger: 1
  });

  gsap.fromTo("#home h1", 
  { scale: 0.2, opacity: 0 }, 
  { 
    scale: 1, 
    opacity: 1, 
    duration: 4,
    ease: "power2.out"
  }
);
gsap.registerPlugin(ScrollTrigger);

gsap.from(".dashboard-card:nth-child(1)", {
  scrollTrigger: {
    trigger: ".dashboard-stats",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reset play reset",
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".dashboard-card:nth-child(2)", {
  scrollTrigger: {
    trigger: ".dashboard-stats",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reset play reset",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".dashboard-card:nth-child(3)", {
  scrollTrigger: {
    trigger: ".dashboard-stats",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reset play reset",
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});
gsap.registerPlugin(ScrollTrigger);

gsap.from(".nutrition-card:nth-child(1)", {
  scrollTrigger: {
    trigger: ".nutrition-card:nth-child(1)",
    start: "top 90%",
    end: "bottom 10%",
    toggleActions: "play reset play reset"
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".nutrition-card:nth-child(2)", {
  scrollTrigger: {
    trigger: ".nutrition-card:nth-child(2)",
    start: "top 90%",
    end: "bottom 10%",
    toggleActions: "play reset play reset"
  },
  opacity: 0,
  scale: 0.5,
  duration: 1,
  ease: "back.out(1.7)"
});

gsap.from(".nutrition-card:nth-child(3)", {
  scrollTrigger: {
    trigger: ".nutrition-card:nth-child(3)",
    start: "top 90%",
    end: "bottom 10%",
    toggleActions: "play reset play reset"
  },
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".nutrition-card:nth-child(4)", {
  scrollTrigger: {
    trigger: ".nutrition-card:nth-child(4)",
    start: "top 90%",
    end: "bottom 10%",
    toggleActions: "play reset play reset"
  },
  rotation: 90,
  opacity: 0,
  duration: 1,
  ease: "expo.out"
});

gsap.from(".nutrition-card:nth-child(5)", {
  scrollTrigger: {
    trigger: ".nutrition-card:nth-child(5)",
    start: "top 90%",
    end: "bottom 10%",
    toggleActions: "play reset play reset"
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".nutrition-card:nth-child(6)", {
  scrollTrigger: {
    trigger: ".nutrition-card:nth-child(6)",
    start: "top 90%",
    end: "bottom 10%",
    toggleActions: "play reset play reset"
  },
  rotationY: 180,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
});

gsap.from(".nutrition-card:nth-child(7)", {
  scrollTrigger: {
    trigger: ".nutrition-card:nth-child(7)",
    start: "top 90%",
    end: "bottom 10%",
    toggleActions: "play reset play reset"
  },
  scale: 0.4,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)"
});
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".coach-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      toggleActions: "play none none reset"
    },
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power3.out",
    delay: i * 0.2
  });
});
gsap.registerPlugin(ScrollTrigger);


gsap.from(".community-card:nth-child(1)", {
  scrollTrigger: {
    trigger: ".community-card:nth-child(1)",
    start: "top 85%",
    toggleActions: "play reset play reset"
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".community-card:nth-child(2)", {
  scrollTrigger: {
    trigger: ".community-card:nth-child(2)",
    start: "top 85%",
    toggleActions: "play reset play reset"
  },
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)"
});

gsap.from(".community-card:nth-child(3)", {
  scrollTrigger: {
    trigger: ".community-card:nth-child(3)",
    start: "top 85%",
    toggleActions: "play reset play reset"
  },
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".community-card:nth-child(4)", {
  scrollTrigger: {
    trigger: ".community-card:nth-child(4)",
    start: "top 85%",
    toggleActions: "play reset play reset"
  },
  rotation: 45,
  opacity: 0,
  duration: 1,
  ease: "expo.out"
});

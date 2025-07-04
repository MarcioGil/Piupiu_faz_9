// --- Carrossel ---
const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('ativo', i === idx);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// Inicializa carrossel
if (slides.length) {
  showSlide(current);
  setInterval(nextSlide, 4000);

  // Setas manuais
  const slidesDiv = document.querySelector('.slides');
  if (slidesDiv) {
    const left = document.createElement('button');
    left.innerHTML = '⟨';
    Object.assign(left.style, {
      position: 'absolute', left: '-40px', top: '50%', transform: 'translateY(-50%)',
      background: '#fff3f3', border: 'none', borderRadius: '50%', width: '36px', height: '36px',
      fontSize: '1.5em', color: '#c71585', cursor: 'pointer', boxShadow: '0 2px 8px #c7158530'
    });
    left.onclick = prevSlide;

    const right = document.createElement('button');
    right.innerHTML = '⟩';
    Object.assign(right.style, {
      position: 'absolute', right: '-40px', top: '50%', transform: 'translateY(-50%)',
      background: '#fff3f3', border: 'none', borderRadius: '50%', width: '36px', height: '36px',
      fontSize: '1.5em', color: '#c71585', cursor: 'pointer', boxShadow: '0 2px 8px #c7158530'
    });
    right.onclick = nextSlide;

    slidesDiv.appendChild(left);
    slidesDiv.appendChild(right);
  }
}

// --- Fogos de artifício lúdicos ---
const sparkleContainer = document.getElementById('sparkle-container');
if (sparkleContainer) {
  function createFirework() {
    const x = Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1;
    const y = Math.random() * window.innerHeight * 0.4 + window.innerHeight * 0.1;
    const colors = ['#fff', '#ff69b4', '#ffe066', '#b2f7ef', '#f7b2ef', '#7cf7a2', '#ffb347', '#a3a1fb'];
    const particles = 18 + Math.floor(Math.random() * 8);

    for (let i = 0; i < particles; i++) {
      const angle = (2 * Math.PI * i) / particles;
      const distance = 60 + Math.random() * 40;
      const size = 8 + Math.random() * 10;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const sparkle = document.createElement('div');
      sparkle.style.position = 'absolute';
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.borderRadius = '50%';
      sparkle.style.background = `radial-gradient(circle, #fff 60%, ${color} 100%)`;
      sparkle.style.opacity = 0.85;
      sparkle.style.pointerEvents = 'none';
      sparkle.style.boxShadow = `0 0 16px 6px ${color}80, 0 0 32px 12px #fff6`;
      sparkleContainer.appendChild(sparkle);

      // Animação
      setTimeout(() => {
        sparkle.style.transition = 'all 1s cubic-bezier(.17,.67,.83,.67)';
        sparkle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0.5)`;
        sparkle.style.opacity = 0;
      }, 10);

      setTimeout(() => {
        sparkle.remove();
      }, 1200);
    }
  }

  // Dispara fogos a cada 1.5 segundos
  setInterval(createFirework, 1500);
}

// --- Botão de música ---
const audio = document.getElementById('musica');
const btn = document.getElementById('toggle-music');
if (audio && btn) {
  btn.onclick = () => {
    if(audio.paused) {
      audio.play();
      btn.textContent = '🔊 Música';
    } else {
      audio.pause();
      btn.textContent = '🔇 Música';
    }
  };
}
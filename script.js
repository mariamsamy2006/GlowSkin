// ── Scroll Reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Cart ──
let cartCount = 0;
function addToCart() {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
  showToast('✓ Added to cart!');
}

// ── Toast ──
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── Newsletter ──
function handleSubscribe() {
  const input = document.querySelector('.nl-input');
  if (input.value && input.value.includes('@')) {
    showToast('🎉 Welcome to the GlowSkin community!');
    input.value = '';
  } else {
    input.style.borderColor = 'var(--pink)';
    input.placeholder = 'Please enter a valid email';
    setTimeout(() => {
      input.style.borderColor = '';
      input.placeholder = 'Enter your email';
    }, 2000);
  }
}

// ── Nav shadow on scroll ──
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.boxShadow =
    window.scrollY > 20 ? '0 4px 20px rgba(244,164,164,.2)' : 'none';
});

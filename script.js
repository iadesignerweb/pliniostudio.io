function toggleService(el) {
  document.querySelectorAll('.service-description').forEach(d => d.style.display = 'none');
  const desc = el.querySelector('.service-description');
  desc.style.display = desc.style.display === 'block' ? 'none' : 'block';
}

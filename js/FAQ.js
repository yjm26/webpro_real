document.querySelectorAll('.faq-title').forEach(title => {
  title.addEventListener('click', () => {
      const isActive = title.classList.contains('active');
      document.querySelectorAll('.faq-title').forEach(item => item.classList.remove('active'));
      document.querySelectorAll('.faq-content').forEach(content => content.style.display = 'none');

      if (!isActive) {
          title.classList.add('active');
          title.nextElementSibling.style.display = 'block';
      }
  });
});

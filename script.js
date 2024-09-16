document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentNode;
  
      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
      } else {
        document.querySelectorAll('.faq-item').forEach(child => child.classList.remove('active'));
        parent.classList.add('active');
      }
    });
  });
  
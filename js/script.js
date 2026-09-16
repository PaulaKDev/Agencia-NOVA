document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      
      // Cerrar las demás respuestas abiertas para mantener el efecto acordeón limpio
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });

      // Alternar estado activo en el elemento pulsado
      faqItem.classList.toggle('active');
    });
  });
});
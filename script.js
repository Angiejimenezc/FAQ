const toggles = document.querySelectorAll('.faq-toggle');
 
toggles.forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    console.log('toggle parent', toggle.parentNode);
    console.log('target', e.target);
    console.log('target parent', e.target.parentNode);
    console.log('target parents parent', e.target.parentNode.parentNode);
    toggle.parentNode.classList.toggle('active');
  });
});
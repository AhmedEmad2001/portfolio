
// Smooth scroll for nav links
document.querySelectorAll('header nav a').forEach(a=>{
  a.addEventListener('click',e=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  });
});

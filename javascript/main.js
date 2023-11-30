const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = contactForm.elements['name'].value;
  const email = contactForm.elements['email'].value;
  const message = contactForm.elements['message'].value;

  if (name && email && message) {
    alert('Thank you for contacting us!');
    contactForm.reset();
  } else {
    alert('Please fill in all fields.');
  }
});

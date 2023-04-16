const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// Add hover effect to button 1
button1.addEventListener('mouseenter', () => {
    button1.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    button1.style.color = '#fff';
    button1.style.boxShadow = '0 0 20px #fff';
});

button1.addEventListener('mouseleave', () => {
    button1.style.backgroundColor = '';
    button1.style.color = '';
    button1.style.boxShadow = '';
});

// Add hover effect to button 2
button2.addEventListener('mouseenter', () => {
  button2.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  button2.style.color = '#fff';
  button2.style.boxShadow = '0 0 20px #fff';
});

button2.addEventListener('mouseleave', () => {
  button2.style.backgroundColor = '';
  button2.style.color = '';
  button2.style.boxShadow = '';
});


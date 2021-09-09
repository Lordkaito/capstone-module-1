const menu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.fa-bars');
const body = document.querySelector('body');

hamburger.addEventListener('click', (e) => {
  menu.classList.toggle('active');
  if (menu.classList.contains('active')) {
    hamburger.classList.remove('fa-bars');
    hamburger.classList.add('fa-times');
    body.classList.add('no-scroll');
    menu.innerHTML = `<ul class="nav-ul">
    <li class="nav-item"><a href="about.html">About</a></li>
    <li class="nav-item"><a href="#">Tickets</a></li>
    <li class="nav-item"><a href="#">Contact</a></li>
    <li class="nav-item"><a href="#">Sponsors</a></li>
    <li class="nav-item"><a href="#">News</a></li>
  </ul>`;
  } else {
    hamburger.classList.remove('fa-times');
    hamburger.classList.add('fa-bars');
    body.classList.remove('no-scroll');
    menu.innerHTML = '';
  }
});

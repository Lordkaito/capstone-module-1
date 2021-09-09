const menuAbout = document.querySelector('.mobile-menu');
const hamburgerAbout = document.querySelector('.fa-bars');
const bodyAbout = document.querySelector('body');

hamburgerAbout.addEventListener('click', (e) => {
  menuAbout.classList.toggle('active');
  if (menuAbout.classList.contains('active')) {
    hamburgerAbout.classList.remove('fa-bars');
    hamburgerAbout.style = 'transition: all 0.3s ease-in-out; transform: rotate(90deg)';
    hamburgerAbout.classList.add('fa-times');
    bodyAbout.classList.add('no-scroll');

    // wait 0.5 seconds before adding inner html
    setTimeout(() => {
      menuAbout.innerHTML = `<ul class="nav-ul">
      <li class="nav-item"><a href="index.html">Home</a></li>
      <li class="nav-item"><a href="#">Tickets</a></li>
      <li class="nav-item"><a href="#">Contact</a></li>
      <li class="nav-item"><a href="#">Sponsors</a></li>
      <li class="nav-item"><a href="#">News</a></li>
    </ul>`;
    }, 300);
  } else {
    menuAbout.innerHTML = '';
    setTimeout(() => {
      hamburgerAbout.classList.remove('fa-times');
      hamburgerAbout.classList.add('fa-bars');
      hamburgerAbout.style = 'transform: rotate(0deg); transition: all 0.3s ease-in-out'
      hamburgerAbout.classList.remove('close');
      bodyAbout.classList.remove('no-scroll');
    }, 300);
  }
});

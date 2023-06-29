function Contacto() {
  var seccion = document.getElementById("contact");
  seccion.scrollIntoView({ behavior: 'smooth' });
}

function Menu(){
  document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const menuDropdown = document.querySelector('[aria-labelledby="menu-button"]');
  
    menuButton.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
      menuDropdown.classList.toggle('hidden');
    });
  });  
}


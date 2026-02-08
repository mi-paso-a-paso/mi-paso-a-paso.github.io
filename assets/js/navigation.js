document.addEventListener('DOMContentLoaded', () => {
    const dropDownButton = document.getElementById('dropDownMenu');
    const nav = document.querySelector('.nav-content');
  
    dropDownButton.onclick = () => {
      nav.classList.toggle('active');
      dropDownButton.classList.toggle('open');
    };
})
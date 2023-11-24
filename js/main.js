document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('navbar-responsive').classList.toggle('open');
  });
  
  const menus = document.querySelectorAll('.nav-link');
  
  for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener('click', function () {
      document.getElementById('navbar-responsive').classList.remove('open');
    });
  }
export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);

    this.handle(event.target);
  };

  handle(event) {
    const { pathname } = window.location;

    const route = this.routes[pathname] || this.routes[404];
    const body = document.querySelector('body');
    const listMenu = document.querySelectorAll('ul li a'); 
    
    let bodyClass = pathname.replace('/', '');
    

    if(bodyClass == '') {
      body.className = '';
      body.classList.add('home');

      listMenu.forEach((item) => {
        item.classList.remove('active');
      });

      listMenu[0].classList.add('active');
      
    } else if (bodyClass == 'universe') {
      body.className = '';
      body.classList.add(bodyClass);

      listMenu.forEach((item) => {
        item.classList.remove('active');
      });

      listMenu[1].classList.add('active');

    } else if (bodyClass == 'exploration') {
      body.className = '';
      body.classList.add(bodyClass);

      listMenu.forEach((item) => {
        item.classList.remove('active');
      });

      listMenu[2].classList.add('active');
      
    } else if (bodyClass !== '' || 'universe' || 'explortion') {
      body.className = '';
      body.classList.add('notfound');
    }

    fetch(route)
    .then(response => response.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html;
    });
  };

};
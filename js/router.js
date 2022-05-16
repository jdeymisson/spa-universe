export class Router {
  routes = {};

  route(event) {
    event = event || window.event;
    event.preventDefault();


  };

  handle() {
    const { pathname } = window.location;

    const route = routes[pathname] || routes[404];

    console.log(route);
  };

};
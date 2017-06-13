import {Router, RouterConfiguration} from "aurelia-router";
import {PLATFORM} from "aurelia-pal";
import {Routes} from "./config/interfaces";

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Iris';
    config.map([
      {route: ['', 'home'], name: Routes.Home, moduleId: PLATFORM.moduleName('./vvm/pages/home/home')},
      {route: 'test', name: Routes.Test, moduleId: PLATFORM.moduleName('./vvm/pages/test/test')},
      {route: 'login', name: Routes.Login, moduleId: PLATFORM.moduleName('./vvm/pages/login/login')},
    ]);

    this.router = router;
  }
}

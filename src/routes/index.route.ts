import { Router } from 'express';
import IndexController from '@controllers/index.controller';
//import AuthController from '@/controllers/auth.controller';
import { Routes } from '@interfaces/routes.interface';

class IndexRoute implements Routes {
  public path = '/';
  public router = Router();
  public indexController = new IndexController();
  //public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index);
    //this.router.get(`${this.path}login`, this.authController.logIn);
  }
}

export default IndexRoute;

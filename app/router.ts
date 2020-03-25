import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/promote', controller.promote.index);
  router.get('/', controller.home.index);
};

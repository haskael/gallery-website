'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/hello', controller.api.hello.sayHello);
  router.get('/api/user/getCollections', controller.api.user.getCollections);
  router.get('/api/collections/showRandom', controller.api.collections.showRandom);

  router.post('/api/user/signUp', controller.api.user.signUp);
  router.post('/api/user/logIn', controller.api.user.logIn);
  router.post('/api/user/changeInfo', controller.api.user.changeInfo);
  router.post('/api/user/likeCollections', controller.api.user.likeCollections);
  router.post('/api/collections/createCollections', controller.api.collections.createCollections);
  router.post('/api/collections/setPrivate', controller.api.collections.setPrivate);
  router.post('/api/collections/changeInfo', controller.api.collections.changeInfo);
  router.post('/api/collections/getInfo', controller.api.collections.getInfo);
  router.post('/api/collections/delete', controller.api.collections.delete);
  router.post('/api/collections/getLikes', controller.api.collections.getLikes);

};

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/pixiv', controller.pixiv.index);
    router.get('/pixiv/imgData', controller.pixiv.selectedImgData);
};

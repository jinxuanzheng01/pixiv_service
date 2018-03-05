'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1518493424837_8729';

  // add your config here
  config.middleware = [];

  config.mysql = {
      // 单数据库信息配置
      client: {
          // host
          host: 'rm-m5e406wz8143a82oz.mysql.rds.aliyuncs.com',
          // 端口号
          port: '3306',
          // 用户名
          user: 'sharedaka_dev',
          // 密码
          password: 'Sharedaka8520',
          // 数据库名
          database: 'db_sharedaka_20170902',
      },
      // 是否加载到 app 上，默认开启
      app: true,

      // 是否加载到 agent 上，默认关闭
      agent: false,
  };


  return config;
};

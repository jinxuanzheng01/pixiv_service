'use strict';

const Controller = require('egg').Controller;
class PixivController extends Controller {
  async index() {}

  async selectedImgData(){
      let that = this;

      let {page,pageSize} = this.ctx.query;

      if (!pageSize){pageSize = 50}
      page = parseInt(page);

      // 查询语句
      let sql = `SELECT * FROM pixivimg LIMIT ${page * 50},${(page + 1) * 50}`;

      // 返回结果
      let result = await that.app.mysql.query(sql);

      try {
          result = JSON.parse(JSON.stringify(result));
      }catch (err){
          throw 'selectedImgData Error: JSON.parse';
      }

      that.ctx.body = result;
  }
}

module.exports = PixivController;

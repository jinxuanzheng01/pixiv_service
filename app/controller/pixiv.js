'use strict';

const Controller = require('egg').Controller;
class PixivController extends Controller {
  async index() {}

  async selectedImgData(){
      let that = this;
      let {page,pageSize} = this.ctx.query;

      let params = {
          page: page ? parseInt(page) : 0,
          pageSize: pageSize ? parseInt(pageSize) : 50
      };

      // 查询语句
      let sql = `SELECT * FROM pixivimg LIMIT ${params.page * params.pageSize},${(params.page + 1) * params.pageSize}`;

      // 返回结果
      let result = await that.app.mysql.query(sql);

      try {
          result = JSON.parse(JSON.stringify(result));
      }catch (err){
          this.ctx.throw(401,'selectedImgData Error: JSON.parse');
      }

      that.ctx.body = {
          code: 0,
          data: result,
          msg: '成功'
      };
  }
}

module.exports = PixivController;

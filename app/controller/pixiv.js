'use strict';

const Controller = require('egg').Controller;
class PixivController extends Controller {
  async index() {}

  async selectedImg(){
      let that = this;

      const createRule = {
          page : {type: 'string',required:false},
          pageSize : {type: 'string',required:false},
      };

      that.ctx.validate(createRule,that.ctx.query);

      let {page,pageSize} = this.ctx.query;

      // 设置默认值&格式转化
      page =  page ? parseInt(page) : 0;
      pageSize =  pageSize ? parseInt(pageSize) : 10;

      console.log('???/');
      // 返回结果
      let result = await that.app.mysql.select('jin_pixivimg',{
          offset: page * pageSize,
          limit: (page + 1) * pageSize
      });

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

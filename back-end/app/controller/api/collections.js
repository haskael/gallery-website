'use strict'
const Controller = require('egg').Controller;

class CollectionsController extends Controller {
    async createCollections () {
        const {ctx} = this;
        const collectionNew = {
            collectionName: ctx.request.body.collectionName,
            userid: ctx.request.body.userid,
            description: ctx.request.body.description
        };
        console.log(collectionNew);
        const result = await this.app.mysql.insert('collections', collectionNew);
        const insertSuccess = result.affectedRows === 1;
        ctx.body = {
            code: insertSuccess
        };
    };

    async setPrivate () {
        const {ctx} = this;
        const userid = ctx.request.body.userid;
        const collectionName = ctx.request.body.collectionName;
        const row = {
            userid: userid,
            collectionName: collectionName,
        };
        const result = await this.app.mysql.update('collections', { isPrivate: 1 }, { where: row});
        if (result.affectedRows==1){
            ctx.body = {
                code:1
            }
        }
        else ctx.body = {
            code: -1
        }
    };

    async changeInfo () {
        const {ctx} = this;
        const newData = {
            userid: ctx.request.body.userid,
            collectionName: ctx.request.body.newName,
            description: ctx.request.body.description
        };
        const row = {
            userid: ctx.request.body.userid,
            collectionName: ctx.request.body.collectionName,
            //newName: ctx.request.body.newName,
            description: ctx.request.body.description
        };
        const result = await this.app.mysql.update('collections', newData, { where: {userid: row.userid, collectionName: row.collectionName }});
        if (result.affectedRows==1) {
            ctx.body = {
                code:1
            };
        }
        else ctx.body = {
            code: -1
        }
    };

    async getInfo () {
        const {ctx} = this;
        const row = {
            userid: ctx.request.body.userid,
            collectionName: ctx.request.body.collectionName
        };
        const result = await this.app.mysql.select('collections', {where: row});
        this.ctx.body = result;
    };

    async delete() {
        const {ctx} = this;
        const row = {
            collectionName: ctx.request.body.collectionName,
            userid: ctx.request.body.userid
        };
        const result = await this.app.mysql.delete('collections', {collectionName: row.collectionName});
        if (result.affectedRows==1){
            ctx.body = {
                code:1
            }
        }
        else ctx.body = {
            code: -1
        }
    };

    async showRandom() {
        const result = await this.app.mysql.query('select * from collections order by rand() limit 5');
        this.ctx.body = result;
    };

    async getLikes () {
        const {ctx} =this;
        const row = {
            userid: ctx.request.body.userid
        };
        console.log(row);
        const result = await this.app.mysql.select('likeCollections', {where: row});
        console.log(result);
        ctx.body = result
    }



}

module.exports = CollectionsController;
'use strict'
const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const sendToWormhole = require('stream-wormhole');

class UserController extends Controller {
    async signUp () {
        const { ctx,seervice } = this;
        const userNew = {
        userid: ctx.request.body.userid,
        pwd: ctx.request.body.pwd,
        email: ctx.request.body.email
        };
	    console.log(userNew);
        const signUpResult = await ctx.service.user.createUser(userNew);
	    ctx.response.body = signUpResult;
    };

    async logIn () {
        const { ctx, service } = this;
        const userLog = {
            userid: ctx.request.body.userid,
            pwd: ctx.request.body.pwd
	    };
        const logInResult = await ctx.service.user.logIn(userLog);
        ctx.response.body = logInResult;
    };

        /*
        const stream = await ctx.getFileStream();
        console.log(stream.name);
        const name = Date.now() + stream.filename;
        const target = path.join('/Users/macbook/Documents' + name);
        const writeStream = fs.createWriteStream(target);
        console.log('-----------获取表单中其它数据 start--------------');
        console.log(stream.fields);
        console.log('-----------获取表单中其它数据 end--------------');
        try {
            await tWriteStrem(stream.pipe(writeStream));
        } catch (err) {
            await sendToWormhole(stream);
            ctx.response.body = "error";
        }
        */
    async getCollections () {
        const { ctx } = this;
        const id = ctx.query.userid;
        console.log(ctx.query);
        console.log("id: " + id);
        const result = await this.app.mysql.select('collections', {
            where: { userid: id },
            });
        ctx.body = result;
        console.log(result);
    };
    
    async changeInfo() {
        const {ctx} = this;
        const userid = ctx.request.body.userid;
        const pwd = ctx.request.body.newpwd;
        const email = ctx.request.body.email;
        const changeE = ctx.request.body.changeE;
        const changePwd = ctx.request.body.changePwd;
        var data = {};
        if ((changeE) && (changePwd)) {
            data = {
                userid: userid,
                pwd: pwd,
                email: email
            }
        }
        else if ((!changeE) && (changePwd)) {
            data = {
                userid: userid,
                pwd: pwd
            }
        }
        else if ((changeE) && (!changePwd)) {
            data = {
                userid: userid,
                email: email
            }
        }
        else {};
        console.log(data);
        const result = await this.app.mysql.update('users', data ,{ where: {userid: userid}});
        if (result.affectedRows==1) {
            ctx.body = {
                code:1
            };
        }
        else ctx.body = {
            code: -1
        }
        
    };

    async likeCollections() {
        const { ctx } = this;
        const row = {
            userid: ctx.request.body.userid,
            collectionName: ctx.request.body.collectionName
        };
        const result = await this.app.mysql.insert('likeCollections', row);
        if (result.affectedRows == 1) {
            ctx.body =  {
                code: 1
            }
        }
        else ctx.body = {
            code: -1
        }
    }

}

module.exports = UserController;

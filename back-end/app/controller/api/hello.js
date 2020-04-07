const Controller = require('egg').Controller;

class HelloController extends Controller {
    async sayHello() {
        const {ctx} = this;
        ctx.body = {
            name: 'hello ${ctx.params.id}',
        };
    }
}

module.exports = HelloController;
const Service = require('egg').Service;


class UserService extends Service {
    async createUser(userInfo) {
        const result = await this.app.mysql.insert('users', userInfo);
        const insertSuccess = result.affectedRows === 1;
        if (insertSuccess) {
            return {
	      code: 1
	    };
        }
        else {
            return {
	      code: -1
	    };
        }
    };

    async logIn(userLog) {
        const result = await this.app.mysql.get('users', { userid: userLog.userid });
        if (result.pwd == userLog.pwd) {
            return {
                userid: userLog.userid,
                code: 1,
            }
        }
        else {
            return {
            code: -2
            }
        }
    };
/*
    async createCollections(collectionNew) {
        const result = await this.app.mysql.insert('collections', collectionNew);
        const insertSuccess = result.affectedRows === 1;
        if (insertSuccess) {
            return {
	      code: 1
	    };
        }
        else {
            return {
	      code: -1
            };
        }
    }
    */
}

module.exports = UserService;

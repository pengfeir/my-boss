/*
 * @Author: renpengfei
 * @Date: 2018-07-09 15:56:38
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-09 16:51:47
 */
exports.getUser = async(ctx, next) => {
    ctx.body = {
        username: '鹏飞',
        age: 18
    }
}
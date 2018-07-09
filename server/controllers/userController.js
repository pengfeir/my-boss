/*
 * @Author: renpengfei
 * @Date: 2018-07-09 15:56:38
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-09 18:27:48
 */
exports.getUser = async(ctx, next) => {
    ctx.body = {
        user: '鹏飞',
        age: 18
    }
}
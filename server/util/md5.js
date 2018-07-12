/*
 * @Author: renpengfei 
 * @Date: 2018-07-12 11:36:22 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-12 11:42:13
 */
const utils = require('utility')
exports.md5pwd = (pwd) => {
    const salt = 'qwer_*&^%_werq'
    return utils.md5(utils.md5(salt + pwd))
}
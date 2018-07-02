/*
 * @Author: renpengfei
 * @Date: 2018-06-21 15:27:54
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-02 16:30:31
 */
module.exports = {
    extends: 'react-app',
    env: {
        // 浏览器的全局变量
        browser: true,
        // Node.js 全局变量和 Node.js 作用域
        node: true,
        // 支持除模块外所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6
        es6: true
    },
    // EsLint默认使用esprima做脚本解析，当然你也切换他，比如切换成babel-eslint解析
    parser: 'babel-eslint',
    globals: {
        // 这里填入你的项目需要的全局变量 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // jQuery: false, $: false
    },
    rules: {
        // 0关闭1警告2报错 禁止出现空语句块
        "no-empty": 2,
        // 禁止出现重复的 case 标签
        "no-duplicate-case": 2,
        // 禁止对 catch 子句的参数重新赋值
        "no-ex-assign": 2,
        // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
        "no-unreachable": 2,
        // 要求使用 === 和 !==
        "eqeqeq": 2,
        // 定义的变量你需使用
        "no-unused-vars": 2,
        // 禁止使用多个空格
        "no-multi-spaces": 2,
        // 禁止多次声明同一变量
        "no-redeclare": 2,
        // 禁止使用不带 await 表达式的 async 函数 "require-await": 2, 强制数组方括号中使用一致的空格
        "array-bracket-spacing": [
            2, "never"
        ],
        // 强制在计算的属性的方括号中使用一致的空格
        "computed-property-spacing": [
            2, "never"
        ],
        // 强制在代码块中使用一致的大括号风格
        "brace-style": 2,
        // 强制在对象字面量的属性中键和值之间使用一致的间距
        "key-spacing": 2,
        // 强制在关键字前后使用一致的空格
        "keyword-spacing": 2,
        // 要求或禁止在函数标识符和其调用之间有空格
        "func-call-spacing": 2,
        // 禁止出现多行空行
        "no-multiple-empty-lines": [
            2, {
                "max": 2,
                "maxEOF": 1
            }
        ],
        // 要求或禁止使用分号代替 ASI
        "semi": [
            2, "never"
        ],
        // 强制在圆括号内使用一致的空格
        "space-in-parens": 2,
        // 要求操作符周围有空格
        "space-infix-ops": 2,
        // 强制在块之前使用一致的空格
        "space-before-blocks": 2,
        // 强制箭头函数的箭头前后使用一致的空格
        "arrow-spacing": 2,
        // 禁止类成员中出现重复的名称
        "no-dupe-class-members": 2,
        // 禁止重复模块导入
        "no-duplicate-imports": 2,
        // 禁用 console
        "no-console": 1,
        // 禁用 debugger
        "no-debugger": 1,
        // "always" 要求花括号内有空格 (除了 {})
        "object-curly-spacing": ["error", "always"]
    }
}
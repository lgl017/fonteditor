/**
 * @file bezierCubeEquation.js
 * @author mengke01
 * @date 
 * @description
 * 求解三次方程贝塞尔根
 */

define(
    function(require) {

        var cubeEquation = require('./cubeEquation');

        /**
         * 求解三次方程
         * 
         * @param {number} a a系数
         * @param {number} b b系数
         * @param {number} c c系数
         * @param {number} d d系数
         * @return {Array|boolean} 系数解
         */
        function bezierCubeEquation(a, b, c, d) {
            var result = cubeEquation(a, b, c, d);

            if(!result) {
                return result;
            }
            var filter = result.filter(function(item) {
                return item >= 0 && item <= 1;
            });
            return filter.length 
                ? filter
                : false;
        }

        return bezierCubeEquation;
    }
);


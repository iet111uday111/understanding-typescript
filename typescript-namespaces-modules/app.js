System.register(["./math/circle", "./math/rectangle"], function (exports_1, context_1) {
    "use strict";
    var Circle, rectangle_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Circle_1) {
                Circle = Circle_1;
            },
            function (rectangle_1_1) {
                rectangle_1 = rectangle_1_1;
            }
        ],
        execute: function () {
            /// <reference path="circleMath.ts"/>
            /// <reference path="rectangleMath.ts"/>
            // const PI = 2.99;
            // console.log(MyMath.calcuCircumference(10));
            // console.log(MyMath.calcRectangle(5,15));
            // console.log(PI);
            console.log(Circle.PI);
            console.log(Circle.calculateCirumcumference(10));
            console.log(rectangle_1.default(20, 50));
        }
    };
});

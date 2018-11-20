"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcuCircumference(diameter) {
        return PI * diameter;
    }
    MyMath.calcuCircumference = calcuCircumference;
})(MyMath || (MyMath = {}));

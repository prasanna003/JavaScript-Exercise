var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ARRAY_OF_OBJECTS = [
    { id: 1, title: "Title 1" },
    { id: 2, title: "Title 2" },
    { id: 3, title: "Title 3" },
];
var someFunction = function (arr) {
    // You need to change title for 2nd element of `ARRAY_OF_OBJECTS` and use it only in this place.
    var updatedArray = arr.map(function (obj) {
        return obj.id === 2 ? __assign(__assign({}, obj), { title: "New Title 2" }) : obj;
    });
    console.log(updatedArray);
    console.log(ARRAY_OF_OBJECTS); //Make sure the original array is not modified
};
var anotherFunction = function () {
    // here we use original `ARRAY_OF_OBJECTS`
    //   console.log({ ARRAY_OF_OBJECTS });
};
someFunction(ARRAY_OF_OBJECTS);
// anotherFunction();

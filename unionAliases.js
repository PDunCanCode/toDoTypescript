"use strict";
function combine(input1, input2, resultConversion) {
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        return +input1 + +input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}

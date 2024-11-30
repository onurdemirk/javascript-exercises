const repeatString = function(string, num) {
    let finalString = "";

    for (let i = 0; i <= num - 1; i++) {
        if(num === 0) {
            break;
        }

        finalString += string;
    }
    
    if(num < 0) {
        finalString = "ERROR";
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;

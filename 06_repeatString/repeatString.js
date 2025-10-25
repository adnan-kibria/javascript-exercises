const repeatString = function(str, num) {
    let string = '';
    for(let i = 0; i<num; i++){
        string += str;
    }
    if(num<0) string = 'ERROR';
    return string;
};
repeatString('hey',3);
repeatString('hello',10);
repeatString('hi',1);
repeatString('bye',0);
repeatString('goodbye', -1);
repeatString('',10);

// Do not edit below this line
module.exports = repeatString;

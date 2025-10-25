const removeFromArray = function(array, ...element) {
    const newArray = array.filter(
        (item) => !element.includes(item)
    )
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

module.exports = {

    // ADDS NUMBERS
    // THROWS ERRORS ON NON NUMBER VALUES
    
    add: (x, y) => {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw new Error('invalid argument');
        }
    return x+y;
},

    // SUBTRACTS NUMBERS
    // CONVERTS NUMERICAL STRINGS
    // RETURNS NaN FOR ALL OTHER VALUES
subtract: (x, y) => {
    return Number(x)-Number(y);
}

}
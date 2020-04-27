module.exports = {
    greaterThan: function(input, param) {
        return input.length > param;
    },
    alphaNumeric: function(input) {
        let Exp = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
        return !!input.match(Exp);
    },
    minLength: function(input, param) {
        return input.length >= param;
    }
}
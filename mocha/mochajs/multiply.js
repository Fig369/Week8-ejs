module.exports = function () {
    var args = Array.prototype.slice.call(arguments)
    if (!args.every(Number.isFinite)){
        throw new TypeError('multiply() expects only numbers')
    }

    return args.reduce(function(a, b) {
        return a * b
    },1)
}
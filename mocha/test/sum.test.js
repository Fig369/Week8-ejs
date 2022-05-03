var sum = require("../sum.js")
var expect = require("chai").expect

describe("#sum()", function(){
    it("should return 0", function() {
        expect(sum(1, 2, 3, 4, 5)).equal(15)
    })
    it("should return argument when only one argument is passed", function(){
        expect(sum(5)).to.equal(5)
    })
})
context("with non-number arguments ", function(){
    it("should throw error", function(){
        expect(function(){
            sum(1, 2, 3, [4], 5)
        }).to.throw(TypeError, "sum() expects only SVGAnimatedNumberList.")
    })
})
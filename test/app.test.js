const expect = require("chai").expect
const practice = require("../public/Practice/practice");
const { incrementCounter } = require("../public/Quiz");
const quiz = require("../public/Quiz/index");

describe("Testing Functions in Practice Route: ", function(){
    it("1a. getDomain() Pass", function(done){
        let result = practice.getDomain("DS");
        expect(result).to.equal("Data Science");
        done();
    })

    // it("1b. getDomain() Fail", function(done){
    //     let result = practice.getDomain("DBMS");
    //     expect(result).to.equal("Data Science");
    //     done();
    // })
});

describe("Testing Functions in Quiz Route: ", function(){
    it("1a. handleQuestions - shuffledQuestions initialized? Pass", function(done){
        len_initial = 0;
        len_final = quiz.handleQuestions().length;
        expect(len_final).to.not.equal(len_initial);
        done();
    })

    it("1b. handleQuestions - shuffledQuestions length == expected length? Pass", function(done){
        len_final = quiz.handleQuestions().length;
        expect(len_final).to.equal(quiz.quiz_len);
        done();
    })

    it("1c. generateReport() - Result Pass", function(done){
        var result = quiz.generateReport(5);
        expect(result).to.equal(50);
        done();
    })

    // it("1d. generateReport() - Result Fail", function(done){
    //     var result = quiz.generateReport(5);
    //     expect(result).to.equal(80);
    //     done();
    // })

    it("1e. getRemark() - Remark Pass", function(done){
        expect(quiz.getRemark(9)).to.equal("Excellent, Keep the good work going.");
        done();
    })

    // it("1f. getRemark() - Remark Fail", function(done){
    //     expect(quiz.getRemark(3)).to.equal("Excellent, Keep the good work going.");
    //     done();
    // })

    it("1g. getRemarkColor() - RemarkColor Pass", function(done){
        expect(quiz.getRemarkColor(9)).to.equal("green");
        done();
    })

    it("1h. getRemarkColor() - RemarkColor Fail", function(done){
        expect(quiz.getRemarkColor(3)).to.equal("green");
        done();
    })
});
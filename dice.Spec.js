describe('DiceFactory', function(){
    let i;
    beforeEach(function(){
     i = new DiceFactory(20);
    });
    it('should return a random number', function(){
    expect(i.makeDie()).toBeLessThanOrEqual(20);
    });
      let j;
    describe('DiceTester', function(){
        beforeEach(function(){
            j = new DiceTester(20, 100);
        });
        it('should check if the dice is less than or equal to 20', function(){
            expect(j.testDie()).toBe(20, 50);
        });
    });
});
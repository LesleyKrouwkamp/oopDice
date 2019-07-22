 class DiceFactory{
    
     constructor(sides){
       this.sides = sides;
    }

    makeDie(){
        return (Math.floor(Math.random()*this.sides)+1);
    }
}

var dice = new DiceFactory(20);
dice.makeDie();


class DiceTester{
    
    constructor(dice, roll){
        this.dice = dice;
        this.roll = roll;
        this.arr = [];
    }
    testDie(){
        for(let i = 0; i < this.roll; i++){
            this.arr.push(dice.makeDie());
        }
       
       var i = 0; 
            if(i == this.arr.length){
               return true;
            }
            else{   
                console.log(test(20,this.arr));
               return false;
            }  
            
        }       
    }
    
        function test(num,array){
            var numCount = 1;
        for(let i = 1; i <= array.length; i++){
            if(array[i] == num)
                numCount++;
            
        }
        return numCount;
        }
        var test1 = new DiceTester(dice, 100);
        test1.testDie(); 
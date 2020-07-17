
    // feetToMile

      function feetToMile(feet){
        var mile = feet / 5280;
            mile = parseInt (mile);
            
        return mile;
    }


    // woodCalculator

    function woodCalculator(cheir, table, bed){
        var cheirCount = cheir * 1;
        var tableCount  = table * 2;
        var bedCounut = bed * 3;
        
        var totalCount = cheirCount + tableCount + bedCounut;
        return totalCount;
    }
    

    // brickCalculator

    function brickCalculator(floor){
        
     if (floor >= 1 && floor <= 10) {
         var brick = floor * 15 * 1000;
            return brick;
        }
        else if (floor >= 11 && floor <= 20){
            floor = floor -10;
         var brick = (floor * 12 * 1000) + 150000;
            return brick;
        }
        else if (floor >= 21){
            floor = floor-20;
         var brick = (floor * 10 * 1000) + 270000;
            return brick;
        }
    }
    
    // tinyFriend

    function tinyFriend(friend){
        var shortName = friend[0];
        for(var i = 1; i < friend.length; i++){
            if(friend[i].length < shortName.length){
                shortName = friend[i];
            }
        }
        return shortName;
 } 

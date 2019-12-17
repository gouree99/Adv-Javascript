
//Closures
//=================================================EXAMPLE 1========================================
function Outer(){
    var data="Closues are ";
    return function Inner(){
        var InnerData = 'the best!';
        return data+InnerData;
    }
}
Outer()()

//==================================================EXAMPLE 2========================================
function counter(){
    var ctr=0;
    return function(){
        return ++ctr;
    }
}

ctr1= counter();
ctr1()
//==================================================EXAMPLE 3========================================
function friends(){
    var frnds=['monica','rachel','phoebe'];
    return {
        display: function(){
            return frnds;
        },
        addfrnds: function(frnd){
            frnds.push(frnd);
            return frnds;
        }
    }
}

friend=friends();
friend.display();
friend.addfrnds('chandler');
friend.addfrnds('joey');
friend.addfrnds('ross');
friend.display();
//O/P
//["monica", "rachel", "phoebe", "chandler", "joey", "ross"]
friend.addfrnds(['chandler','joey','ross']);
friend.display();
//O/P
//["monica", "rachel", "phoebe", "chandler", "joey", "ross", Array(3)]

friend2=friends()
friend2.display();
//O/P
//["monica", "rachel", "phoebe"] //Treated independantly

friend2.addfrnds('gunther');
friend2.addfrnds('janice');
friend2.addfrnds('emily');
friend2.display();
//O/P
//["monica", "rachel", "phoebe", "gunther", "janice", "emily"]
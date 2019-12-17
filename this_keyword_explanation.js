var person={
    fname: "monica",
    sayhi: function(){
        return "Hi "+this.fname;
    },
    det_context: function(){
        return this === person;
    },
    dog: {
        sayhello: function(){
            return "Hi "+this.fname;
        },
        det_context: function(){
            return this === person;
        }
    }
}
person.sayhi();
person.det_context();


person.dog.sayhello();
person.dog.det_context();

//Eg 2**********************************************************

var monica={
    fname:'monica',
    sayhi: function(){
        return 'hi '+this.fname;
    }
}
var ross={
    fname:'ross'
}
monica.sayhi();
monica.sayhi.call(ross);
//**************************************Eg 
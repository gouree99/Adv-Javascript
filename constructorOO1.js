function car(make,model,year)
{
  this.make=make;
  this.model=model;
  this.year=year;
  this.noOfWheels=4;  
};

function bike(make,model,year)
{
    car(make,model,year);
    this.noOfWheels=2;
}

var mybike1= new bike('awesome','best',2002);
console.log(mybike1);

**********************************************************************************************

function vehical(make,model,year)
{
  this.make=make;
  this.model=model;
  this.year=year;
  this.noOfWheels=4;  
};
function bike(make,model,year)
{
    car(make,model,year);
    this.noOfWheels=2;
}

var mybike1= new bike('awesome','best',2002);
console.log(mybike1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function vehical(make,model,year)
{
    this.make=make;
    this.model=model;
    this.year=year;
    this.isRunning=false;
}

vehical.prototype.turnOn = function(){
    this.turnOn = true;
}

vehical.prototype.turnOff = function(){
    this.turnOff = true;
}

vehical.prototype.honk = function(){
    if(this.isRunning){
        this.honk = true;
    }
}


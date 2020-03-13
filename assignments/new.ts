class Home{
    floor : string;
    constructor(floor : string){
        this.floor = floor;
    }
    walk(){
        alert("The floor is Dry " + this.floor);
    }
    stop(){
        alert("The floor is wet " + this.floor);
    }
}
 window.onload = function(){
     var home = new Home('Marble Floor');
     home.walk();
     home.stop();
 };
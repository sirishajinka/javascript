class Cabinet<ClothingType>{
    contents: ClothingType[] = [];
    
    add(object: ClothingType){
        this.contents.push(object);
    }

    remove(){
        return this.contents.pop();
    }
}
interface Sock{
    color: string;
}
interface TShirt{
    size: 's' | 'm' | 'l';
}

const sockCabinet = new Cabinet<Sock>();
sockCabinet.add({color:"pink"});
console.log(sockCabinet);
const mySock = sockCabinet.remove();

const tshirtCabinet = new Cabinet<TShirt>();
tshirtCabinet.add({size:'m'});
console.log(tshirtCabinet);

const mixedCabinet = new Cabinet<Sock | TShirt>();
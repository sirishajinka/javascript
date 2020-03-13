class Product<ProductType>{
    contents: ProductType[] = [];

    add(object: ProductType) {
        this.contents.push(object);
        console.log(object);
    }

    remove() {
        return this.contents.pop();
    }
}
interface Shoes {
    size: 's' | 'm' | 'l';
    make: string;
}
interface Chair {
    size: 's' | 'm' | 'l';
    manufacture: string;
}

const prod = new Product<Shoes>();
prod.add({ size: 's', make: "Adidas" });
console.log(prod);
const myShoe = prod.remove();

const chair = new Product<Chair>();
chair.add({ size: 'm', manufacture: "woodpecker" });
console.log(chair);
const myChair = chair.remove();

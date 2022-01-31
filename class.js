class rectangle{
    constructor(edge1,edge2){
        this.area = edge1 * edge2
        this.perimeter = 2 * (edge1 + edge2)
    }
}
class Square extends rectangle {
    constructor(side) {
      super(side, side);
    }
}
const side = 20;
console.log("Area:",new Square(side).area)
console.log("Perimeter:",new Square(side).perimeter)
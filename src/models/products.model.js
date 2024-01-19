export default class productModel {
  constructor(_id, _name, _desc, _price, _imageUrl) {
    this.id = _id;
    this.name = _name;
    this.desc = _desc;
    this.price = _price;
    this.imageUrl = _imageUrl;
  }
  static get() {
    return products;
  }
}

var products = [
  new productModel(
    1,
    "product 1",
    "Discription of Product 1",
    19.22,
    "https://google.com"
  ),
  new productModel(
    2,
    "product 2",
    "Discription of Product 2",
    19.22,
    "https://google.com"
  ),
  new productModel(
    3,
    "product 3",
    "Discription of Product 3",
    19.22,
    "https://google.com"
  ),
  new productModel(
    4,
    "product 4",
    "Discription of Product 4",
    19.22,
    "https://google.com"
  ),
];

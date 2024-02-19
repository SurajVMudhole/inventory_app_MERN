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
  static add(productObj) {
    let newProduct = new productModel(
      products.length + 1,
      productObj.name,
      productObj.desc,
      productObj.price,
      productObj.imageUrl
    );
    products.push(newProduct);
  }
  static getById(id) {
    return products.find((p) => p.id == id);
  }
  static update(productObj) {
    const index = products.findIndex((p) => p.id == productObj.id);
    products[index] = productObj;
  }
  static delete(id) {
    const index = products.findIndex((p) => p.id == id);
    products.splice(index, 1);
    return products;
  }
}

var products = [
  new productModel(
    1,
    "product 1",
    "Discription of Product 1",
    19.22,
    "https://imgs.search.brave.com/BCt15NGkBoK08fzxekw2kTo6HOvEn_XUpf1u037ubxA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oYXBw/eXlvdWhhcHB5ZmFt/aWx5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNC9i/b29rLWJvb2stbm8t/cGljdHVyZXMud2Vi/cA"
  ),
  new productModel(
    2,
    "product 2",
    "Discription of Product 2",
    19.22,
    "https://imgs.search.brave.com/BCt15NGkBoK08fzxekw2kTo6HOvEn_XUpf1u037ubxA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oYXBw/eXlvdWhhcHB5ZmFt/aWx5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNC9i/b29rLWJvb2stbm8t/cGljdHVyZXMud2Vi/cA"
  ),
  new productModel(
    3,
    "product 3",
    "Discription of Product 3",
    19.22,
    "https://imgs.search.brave.com/BCt15NGkBoK08fzxekw2kTo6HOvEn_XUpf1u037ubxA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oYXBw/eXlvdWhhcHB5ZmFt/aWx5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNC9i/b29rLWJvb2stbm8t/cGljdHVyZXMud2Vi/cA"
  ),
  new productModel(
    4,
    "product 4",
    "Discription of Product 4",
    19.22,
    "https://imgs.search.brave.com/BCt15NGkBoK08fzxekw2kTo6HOvEn_XUpf1u037ubxA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oYXBw/eXlvdWhhcHB5ZmFt/aWx5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNC9i/b29rLWJvb2stbm8t/cGljdHVyZXMud2Vi/cA"
  ),
];

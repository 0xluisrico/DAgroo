
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Main {

    modifier OnlyGrower() {
        require(isGrower[msg.sender] == true, "No eres grower");
        _;
    } 

    enum purchaseState {
        ON_SALE,
        SELLED
    }
    enum productState {
        LAND_PREPARATION,
        SEEDING,
        GERMINATION,
        GROWTH,
        MADURATION,
        HARVEST,
        PROCESSING,
        PACKAGING,
        STORAGE,
        DISTRIBUTION,
        DELIVERY
    }

    struct Grower {
        string name;
        string ubication;
        uint256 numSoldProducts;
    }
    mapping(address => Grower) public grower;
    mapping(address => bool) public isGrower;

    struct Buyer {
        string name;
        string ubication;
        uint256 numPurchasedProducts;
    }
    mapping(address => Buyer) public buyer;

    struct Product {
        address grower;
        string name;
        uint256 price;
        uint256 stock;
        purchaseState state;
        productState proState;
    }
    mapping(uint256 => Product) idProduct;

    Product[] public products;

    uint256 platformFee;

    constructor(){
        platformFee = 40;
    }

    function createGrower(string calldata _name, string calldata _ubication) public {

        Grower memory _grower = Grower({
            name: _name,
            ubication: _ubication,
            numSoldProducts: 0
        });
        grower[msg.sender]=_grower;
        isGrower[msg.sender] = true;
    }
    function createProduct(string calldata _productName, uint256 _price, uint256 _stock, productState _state) public OnlyGrower {

        Product memory _product = Product({
            grower: msg.sender,
            name: _productName,
            price: _price,
            stock: _stock,
            state: purchaseState.ON_SALE,
            proState: _state
        });
        idProduct[products.length]= _product;
        products.push(_product);
    }

    function createBuyer(string calldata _name, string calldata _ubication ) public {
        Buyer memory _buyer = Buyer({
            name: _name,
            ubication: _ubication,
            numPurchasedProducts: 0
        });
        buyer[msg.sender] = _buyer;
    }

    function BuyProduct(uint256 _idProduct) public payable {
        Product memory producto = idProduct[_idProduct];
        uint256 fee = calculateFee(producto.price); 
        require(msg.value == producto.price + fee, "valor insuficiente.");
        require(producto.state == purchaseState.ON_SALE, "el producto no esta en venta");
        producto.state = purchaseState.SELLED;
        payable(address(this)).transfer(fee);
        payable(producto.grower).transfer(producto.price + fee);
    }
    function calculateFee(uint256 _amount) internal view returns(uint256){
        uint fee = _amount*platformFee/1000;
        return fee;
    }
    function changeStateProduct(productState _state, uint256 _id) public  OnlyGrower{
        Product memory product = idProduct[_id];
        product.proState = _state;
        idProduct[_id] = product;
    }
}

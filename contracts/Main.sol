
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

contract Main {
    struct Grower {
        string name;
        string ubication;
        uint256 numSoldProducts;
        mapping(string => uint256) priceProduct;
    }
    mapping(address => Grower) grower;

    struct Buyer {
        string name;
        string ubication;
        uint256 numPurchasedProducts;
    }
    mapping(address => Buyer) buyer;

    struct Product {
        string name;
        uint256 price;
        uint256 stock;
    }
    Product[] public products;
}

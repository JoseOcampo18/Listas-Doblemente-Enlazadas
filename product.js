export default class Product{

    constructor(code, name, quantity, cost){
        this._code = code;
        this._name = name;
        this._quantity = quantity;
        this._cost = cost;
        this._previous = null;
        this._next = null;
    }

    _getCode(){
        return this._code;
    }

    _getName(){
        return this._name;
    }

    _getQuantity(){
        return this._quantity;
    }

    _getCost(){
        return this._cost;
    }

    _getTotalCost(){
        return this._cost * this._quantity;
    }

    _getNext(){
        return this._next;
    }

    _getPrevious(){
        return this._previous;
    }

    _setPrevious(newPrevious){
        this._previous = newPrevious;
    }

    _setNext(newNext){
        this._next = newNext;
    }

}
import Inventory from "./inventory.js";
import Product from "./product.js";
import Ui from "./ui.js";

class App{
    constructor(){
        this._inventory = new Inventory();
        this._interfaz = new Ui();
        this._interfaz._createTable();

        let btnAdd = document.getElementById('btnAdd');
        btnAdd.addEventListener('click',this._addProduct);

        let btnDelete = document.getElementById('btnDelete');
        btnDelete.addEventListener('click',this._deleteProduct);

        let btnFind = document.getElementById('btnSearch');
        btnFind.addEventListener('click',this._findProduct);

        let btnList = document.getElementById('btnList');
        btnList.addEventListener('click',this._listProduct);

        let btnInvert = document.getElementById('btnInvertList');
        btnInvert.addEventListener('click',this._invertProduct);
    }

    _addProduct = () => {
        let code = document.getElementById('txtCode').value; 
        let name = document.getElementById('txtName').value; 
        let quantity = document.getElementById('txtQuantity').value; 
        let cost = document.getElementById('txtCost').value;

        let product = new Product(code, name, quantity, cost);
        let result = this._inventory.add(product);
        this._interfaz._listProduct(this._inventory);

        if(result === null){
            window.alert("Este producto ya existe, o tu inventario está lleno");
        }
    }

    _deleteProduct = () => {
        let code = document.getElementById('txtCode').value; 

        let result = this._inventory.delete(code);

        if(result === null){
            window.alert("Este producto no existe");
        }
        else{
            window.alert("El producto existe, y fue eliminado");
        }

        this._interfaz._listProduct(this._inventory);
    }

    _findProduct = () => {
        let code = document.getElementById('txtCode').value; 

        this._interfaz._resetTable();
        let result = this._inventory.search(code);

        if(result === null){
            window.alert("Este producto no existe");
            this._interfaz._listProduct(this._inventory);
        }

        else{
            this._interfaz._addToTable(result);
        }
    }

    _listProduct = () => {
        this._interfaz._listProduct(this._inventory);
    }

    _invertProduct = () => {
        this._interfaz._invertProduct(this._inventory);
    }

}

new App();

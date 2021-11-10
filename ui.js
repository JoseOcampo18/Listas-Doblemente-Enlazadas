export default class Ui{

    constructor(){
        this._table = document.createElement('table');
        document.getElementById('show').appendChild(this._table);
    }

    _createTable(){
        let row =this._table.insertRow(0);

        let colCode = row.insertCell(0);
        let colName = row.insertCell(1);
        let colQuantity = row.insertCell(2);
        let colCost = row.insertCell(3);
        let colTotalCost = row.insertCell(4);

        colCode.innerHTML = "Código";
        colName.innerHTML = "Nombre";
        colQuantity.innerHTML = "Cantidad";
        colCost.innerHTML = "Costo";
        colTotalCost.innerHTML = "Costo Total";
    }

    _addToTable(product){
        let row =this._table.insertRow(-1);

        let colCode = row.insertCell(0);
        let colName = row.insertCell(1);
        let colQuantity = row.insertCell(2);
        let colCost = row.insertCell(3);
        let colTotalCost = row.insertCell(4);

        colCode.innerHTML = product._getCode();
        colName.innerHTML = product._getName();
        colQuantity.innerHTML = product._getQuantity();
        colCost.innerHTML = product._getCost();
        colTotalCost.innerHTML = product._getTotalCost();
    }

    _resetTable(){
        while( this._table.rows.length > 1){
            this._table.deleteRow(-1);
        }                  
    }

    _listProduct(inventory){   
        this._resetTable();

        let aux = inventory.list();

        this._addToTable(aux);

        while(aux._getNext() != null){
            aux = aux._getNext();
            this._addToTable(aux);
        }
    }

    _invertProduct(inventory){
        this._resetTable();
        
        let aux = inventory.invertList();

        this._addToTable(aux);

        while(aux._getNext() != null){
            aux = aux._getPrevious();
            this._addToTable(aux);
        }
    }

}
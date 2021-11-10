export default class Inventory{

    constructor() {
        this._start = null;
    }

    add(product){
        if (this._start == null){
            this._start = product;
            return this._start;
        }

        else if(this.search(product._getCode()) == null){
            let aux = this._start;
                            
                if(product._getCode() < this._start._getCode()){
                    product._setNext(this._start);
                    this._start._setPrevious(product);
                    this._start = product;
                    return product;
                }

                else if(this._findPosition(product._getCode())._getCode() < product._getCode()){
                    product._setPrevious(this._findPosition(product._getCode()));
                    this._findPosition(product._getCode())._setNext(product);
                    return product;
                }

                else {
                    product._setNext(this._findPosition(product._getCode()));
                    product._setPrevious(this._findPosition(product._getCode())._getPrevious());
                    this._findPosition(product._getCode())._setPrevious(product);
                    product._getPrevious()._setNext(product);
                }
        }
        
        else{
            return null;
        }
    }

    delete(code){
        if (this._start == null) {
            return null;
        }

        else{
            let del = null;
            if (code == this._start._getCode()){
                if (this._start._getNext() != null){
                del = this._start;
                this._start = this._start._getNext();
                this._start._setPrevious(null);
                del._setNext(null);
                del._setPrevious(null);
                return del;
                }
                else{
                del = this._start;
                this._start = null;
                return del;
                }
            }

            else if(this.search(code)._getNext() == null){
                let aux = this.search(code);
                del = aux;
                aux._getPrevious()._setNext(null);
                del._setNext(null);
                del._setPrevious(null);
                return del;
            }

            else{
                let aux = this._start;
                while (aux != null) {
                    if (aux._getCode() == code){
                        del = aux;
                        aux._getPrevious()._setNext(aux._getNext())
                        aux._getNext()._setPrevious(aux._getPrevious());
                        del._setNext(null);
                        del._setPrevious(null);
                        return del;
                    }else{
                        aux = aux._getNext();
                        }
                }
                return del;
            }
        }
    }

    search(code){
        let aux = this._start;
        while(aux != null){
            if(aux._getCode() == code){
                return aux;
            }
            else{
                aux = aux._getNext();
            }
        }
        return null;
    }

    list(){
        return this._start;
    }

    invertList(){
        let aux = this._start;

        while(aux._getNext() != null){
            aux = aux._getNext();
        }

        return this._start = aux;
    }

    _findPosition(code){
        let aux = this._start;
        while (aux != null) {
            if (code < aux._getCode()) {
                return aux;
            }else if(aux._getNext() != null){
                aux = aux._getNext();
            }else{
                return aux;
            }
        }
    }
}
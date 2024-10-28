let botonAggInicio = document.getElementById("boton_agginicio");
let botonAggFinal = document.getElementById("boton_aggfinal");
let botonAggAntes = document.getElementById("boton_aggantes");
let botonAggDespues = document.getElementById("boton_aggdespues");
let botonEliminarInicio = document.getElementById("boton_eliminarinicio");
let botonEliminarFinal = document.getElementById("boton_eliminarfinal");
let botonEliminar = document.getElementById("boton_eliminar");
let botonBuscar = document.getElementById("boton_buscar");
let botonImprimir = document.getElementById("boton_imprimir");

class Nodo {
    constructor(dato, siguiente) {
        this.dato = dato;
        this.siguiente = siguiente;
    }
}

class ListaEnlazada {
    constructor(limite) {
        this.inicio = null;
        this.tamaño = 0;
        this.limite = limite;
    }

    agregarInicio(dato) {
        this.validarAgregar(dato);
        if (!dato) {
            return;
        }
        let nuevoNodo = new Nodo(dato, null);
        nuevoNodo.siguiente = this.inicio;
        this.inicio = nuevoNodo;
        this.tamaño++;
    }
    

    agregarFinal(dato) {
        this.validarAgregar(dato);
        if (!dato) {
            return;
        }

        let nuevoNodo = new Nodo(dato, null);
        if (!this.inicio) {
            this.inicio = nuevoNodo;
        } else {
            let actual = this.inicio;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
        this.tamaño++;
    }

    agregarAntes(dato, referencia) {
        this.validarAgregar2(dato, referencia);
        if (!dato || !referencia) {
            return;
        }
        
        let nuevoNodo = new Nodo(dato);
    
        if (this.inicio.dato === referencia) {
            nuevoNodo.siguiente = this.inicio;
            this.inicio = nuevoNodo;
        } else {
            let actual = this.inicio;
            let previo = null;
    
            while (actual != null && actual.dato !== referencia) {
                previo = actual;
                actual = actual.siguiente;
            }
    
            if (actual != null) {
                nuevoNodo.siguiente = actual;
                previo.siguiente = nuevoNodo;
                alert('Dato insertado correctamente');
            } else {
                alert('No se encontró el nodo de referencia. No se pudo insertar.');
                return;
            }
        }
        this.tamaño++;
    }

    agregarDespues(dato, referencia) {
        this.validarAgregar2(dato, referencia);
        if (!dato || !referencia) {
            return;
        }
        
        let nuevoNodo = new Nodo(dato);
        let actual = this.inicio;

        if (actual) {
            while (actual != null && actual.dato !== referencia) {
                actual = actual.siguiente;
            }
            
            if (actual != null) {
                nuevoNodo.siguiente = actual.siguiente;
                actual.siguiente = nuevoNodo;            
                this.tamaño++;
                alert('Dato insertado correctamente');
            } else {
                alert('No se encontró el nodo de referencia. No se pudo insertar.');
                return;
            }
        }
    }
    

    eliminarInicio() {
        if (!this.inicio) {
            alert('La lista está vacía. No se puede eliminar el nodo de inicio.');
            return;
        }

        this.inicio = this.inicio.siguiente;
        this.tamaño--;
        alert('Primer nodo eliminado.');
    }

    eliminarUltimo() {
        if (!this.inicio) {
            alert('La lista está vacía. No se puede eliminar el último nodo.');
            return;
        }

        if (!this.inicio.siguiente) {
            this.inicio = null;
        } else {
            let actual = this.inicio;
            let previo = null;

            while (actual.siguiente) {
                previo = actual;
                actual = actual.siguiente;
            }

            previo.siguiente = null;
        }

        this.tamaño--;
        alert('Último nodo eliminado.');
    }

    eliminar(dato) {
        this.validarEliminar(dato);
        if (!dato) {
            return;
        }
        if (!this.inicio) {
            return;
        }

        let actual = this.inicio;
        let previo = null;
        let final = 0;
        
        while (actual != null) {
            if (actual.dato === dato) {
                if (!previo) {
                    this.inicio = actual.siguiente;
                } else {
                    previo.siguiente = actual.siguiente;
                }
                this.tamaño--;
                alert('Dato eliminado correctamente');
            }
            previo = actual;
            actual = actual.siguiente;
            final = previo.dato
        }

        if (final.dato != dato) {
            alert('No se encontró el dato');
        }

        return null;
    }

    imprimir() {
        let resParrafo = document.getElementById("parrafo_resultado");
        if (!this.inicio) {
            alert("La lista está vacía.");
        }
        let actual = this.inicio;
        let resultado = "";
        while (actual) {
            resultado += actual.dato;
            actual = actual.siguiente;
        }
        resParrafo.innerHTML = resultado;
    }

    buscar(dato) {
        if (!dato) {
            alert("Inserta un dato por buscar.");
            return;
        }
        if (!this.inicio) {
            alert("La lista está vacía. No se puede buscar el dato.");
            return;
        }   
        let actual = this.inicio;
        let indice = 0;

        while (actual != null) {
            if (actual.dato === dato) {
                alert(`Dato ${dato} encontrado en la posición ${indice}.`);
                return indice;
            }
            actual = actual.siguiente;
            indice++;
        }
        alert(`Dato ${dato} no encontrado en la lista.`);
        return -1; 
    }

    validarAgregar(dato) {
        if (!dato) {
            alert('Inserta un dato por agregar.');
            return;
        }
        else {
            alert('Dato insertado correctamente');
        }
    }

    validarAgregar2(dato, referencia) {
        if (!dato) {
            alert('Inserta un dato por agregar.');
        }
        if (!referencia) {
            alert('Inserta un dato de referencia.');
        }
        if (dato && referencia) {
            if (!this.inicio) {
                alert('La lista está vacía. No se puede agregar el dato.');
            }
        }
        return;
    }

    validarEliminar(dato) {
        if (!dato) {
            alert('Inserta un dato por eliminar.');
            return;
        }
        if (!this.inicio) {
            alert('La lista está vacía. No se puede eliminar el dato.');
            return;
        }
    }
}

botonAggInicio.addEventListener("click", function() {
    dato = document.getElementById("input_agginicio").value;
    lista.agregarInicio(dato);
});

botonAggFinal.addEventListener("click", function() {
    dato = document.getElementById("input_aggfinal").value;
    lista.agregarFinal(dato);
});

botonAggAntes.addEventListener("click", function() {
    dato = document.getElementById("input_aggantesdato").value;
    referencia = document.getElementById("input_aggantesref").value;
    lista.agregarAntes(dato, referencia);
});

botonAggDespues.addEventListener("click", function() {
    dato = document.getElementById("input_aggdespuesdato").value;
    referencia = document.getElementById("input_aggdespuesref").value;
    lista.agregarDespues(dato, referencia);
});

botonEliminarFinal.addEventListener("click", function() {
    lista.eliminarUltimo();
});

botonEliminarInicio.addEventListener("click", function() {
    lista.eliminarInicio();
});

botonEliminar.addEventListener("click", function() {
    dato = document.getElementById("input_eliminar").value;
    lista.eliminar(dato);
});

botonBuscar.addEventListener("click", function() {
    dato = document.getElementById("input_buscar").value;
    lista.buscar(dato);
});

botonImprimir.addEventListener("click", function() {
    lista.imprimir();
});

let limite = 10;
let lista = new ListaEnlazada(limite);
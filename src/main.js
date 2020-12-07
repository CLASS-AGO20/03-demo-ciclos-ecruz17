export default class App {

    sumarParesFor() {
        let res = 0;

        for(let i = 1; i < 21;i = i + 1) {
            if (i%2 == 0) {
                res = res + i;
            }
        }       
        return res;
    }

    contarImparesFor(inicio, fin) {

        let impares = 0;

        for(let i = inicio; i <= fin; i= i + 1) {
            if(i%2 != 0) {
            impares = impares + 1;
            }
        }

        return impares;

    }

    sumarParesWhile() {

        let pares = 0;
        let i = 1;

        while(i<21) {
           
            if(i%2 == 0) {
                pares = pares + i;
            }    

            i = i + 1;

        }

        return pares;

    }

    contarImparesWhile(inicio, fin) {

        let i = inicio;
        let res = 0;

        while(i <= fin) {

            if(i%2 != 0) {
                res = res + 1;
            }

            i = i + 1;
        }
   
        return res;

    }

    sumarParesDo() {

        let i = 1;
        let pares = 0;

        do {

            if(i%2 == 0) {
                pares = pares + i;
            }

        i = i + 1;

        } while (i <= 20);

        return pares;

    }

    contarImparesDo(inicio, fin) {

        let i = inicio;
        let impares = 0;

        do {
            
            if(i%2 != 0) {
                impares = impares + 1;
            }

            i = i + 1;

        } while (i <= fin);

        return impares;

    }


}

let app = new App();

console.log(app.sumarParesFor());

console.log(app.contarImparesFor(5,10));

console.log(app.sumarParesWhile());

console.log(app.contarImparesWhile(5,10));

console.log(app.sumarParesDo());

console.log(app.contarImparesDo(5,10));
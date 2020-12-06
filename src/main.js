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


}

let app = new App();

console.log(app.sumarParesFor())

console.log(app.contarImparesFor(5,10))

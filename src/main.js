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


}

let app = new App();

console.log(app.sumarParesFor())
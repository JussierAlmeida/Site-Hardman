const nome = "jussier";
console.log(typeof nome);

const x =10;//number
console.log(typeof x);

const liste =[1,2,3]//object - array
console.log(typeof liste);

const object = {nome_: "rafael",age: 23 }//object
console.log(typeof object);

const u = true;
console.log(typeof u);

const arr =["a","b","c","d"];
for(let i =0; i < arr.length; i++){
    console.log("o valor da repetição é:" + arr[i]);
}

function soma(a,b){
    console.log(a+b);
}
soma(5,6);

soma(3,6);

soma(5,9);
//dom
//seleciona
const brand = document.querySelector("#brand");
console.log(brand);
//evento
//execução
brand.addEventListener("click", function(event){
    console.log(event.target);
    event.target.style.color = "blue";
});



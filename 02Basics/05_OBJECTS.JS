/*
        %%%%%%%%%%%  OBJECT DESTRUCTING %%%%%%%%%%

*/


const cars ={
    name : "bugatti CHiron",
    price :"32crore",
    company: "Bugati automobiles"
}

//   NOW INSTEAD OF WRITING TRADITION cars.name,cars.price,car.company method we can use the below method:


// AND IF YOU WANT TO RENAME THE KEYS WHERE NAME AS BRAND  =>  NAME: BRAND
const {name:brand,price,company} = cars


console.log(brand)
console.log(price);
console.log(company);


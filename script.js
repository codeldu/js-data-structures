const restoran = {
    name : 'Yashil ada',
    newLocation : '3cu dalan, Baki',
    categories : ['Milli', 'Gurcu', 'Italyan', 'Vegetarian'],
    starterMenu : ['Coban salati', 'Manqal salati', 'Suzme', 'Sezar', 'Turshu'],
    mainMenu : ['Kabab', 'Pizza', 'Xengel', 'Dushbere', 'Pasta'],
    openHours : {
        mon : {
            open : '10:00',
            close : '20:00'
        },
        tue : {
            open : '10:00',
            close : '22:00'
        },
        wed : {
            open : '10:00',
            close : '23:00'
        }
    },
    order : function(starterInd, mainIndex){
        return [ this.starterMenu[starterInd], this. mainMenu[mainIndex] ]
    },
    delivery : function({customerName, orders, hour = "bilinmeyen"}){
        console.log(`${customerName} saat ${hour}-da ${orders} sifarish verdi`);
    },
    cook : function(mehsul1, mehsul2, mehsul3){
        console.log(`Menim pizzam ${mehsul1}, ${mehsul2} ve ${mehsul3} terkiblidir`);
    }
}



let mehsullar = ['Pendir', 'Pomidor','Sosis'];


restoran.cook(...mehsullar);

// console.log(mehsullar);

// let newMenu = [ "Levengi", ...restoran.mainMenu];
// restoran.mainMenu = newMenu;

// let allMenu = [...restoran.mainMenu, ...restoran.starterMenu];
// console.log(allMenu);

// let myName = "Huseynaga";

// let letters = [...myName];

// console.log(letters);

// restoran.mainMenu.unshift("Levengi");

// console.log(restoran);

// console.log(newMenu);

// let sifarish = {
//     customerName : "Qeribeli",
//     orders : "Pizza",
//     // hour : "14:00"
// }

// restoran.delivery(sifarish);


// let {openHours} = restoran;
// console.log(openHours);

// let {openHours: {mon : {open : achiq, close: bagli}}} = restoran;


// console.log(achiq, bagli);



// let { name : ad = "Ad teyin edilmeyib", newLocation : loc = "Teyin edilmeyib", menu : mnu = "Menu teyin edilmeyib"} = restoran;

// console.log(ad , loc , mnu);

// let { name : ad , newLocation : konum} = restoran;

// let a = 5;
// let b = 8;

// let obj = {a: 22, b : 10};

// // ({a , b} = obj);

// let { a : first, b : second} = obj;


// console.log(first,second);






// let [first, ,second] = restoran.categories;

// console.log(first,second);

// let temp = first;
// first = second;
// second = temp;

// [second, first] = [first,second]

// console.log(first,second)


// console.log(restoran.order(1,3));

// let [meze, yemek] = restoran.order(1,3);


// let nestedArr = [2, 4, [6 ,[ 8, 10]]];

// let [a,b,[c,[d,e]]] = nestedArr;

// console.log(a,b,c,d,e);


// let myArr = [2];

// let [a='Error',b='Error',c='Error'] = myArr;

// console.log(a,b,c);


// Spread operators (...)

// let arr = [5,6,7,8];


// let newArray = [1,2,3,4,...arr];

// console.log(newArray);

// let obj = {
//     name : "Ayxan"
// }

// let secObj = {...obj};

// secObj.name = "Muslum";

// console.log(obj);
// console.log(secObj);
// console.log(secObj);

// let newObj = {
//     ...obj,
//     age: 20
// }

// console.log(newObj);



// let numArray = [1,2,4,6,7,9];

// let sum = 0;

// for (const x in numArray) {
//     sum += numArray[x];
// }

// console.log(sum);


console.log(sum(1,2));
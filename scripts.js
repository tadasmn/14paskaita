//1.SORT Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.
const friends = ["Tadas", "Jovita", "Mindaugas", "Toris", "Algis"]
friends.sort();
console.log(friends);
//2. SORT Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka.
const friends2 = ["Zigmas", "Jovita", "Mindaugas", "Toris", "Algis"]
friends2.sort((a,b)=>{
    if(b>a){
        return 1
    }else {
        return -1
    }
})
console.log(friends2);
//3. SORT Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).
const nums = [5, 10, 20, 11, 12, 1, 0, 14, 25]
nums.sort((a,b)=> {
    return b-a
    })
console.log(nums);
//4. SORT Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią skaičių (vieną skaičių).
const nums2 = [10, 5, 20, 4]
nums2.sort((a,b)=> {
    return b-a});
    console.log(nums2[0]);
//1.REDUCE Parašyk array su penkiais mėgstamiausiais tavo skaičiais. Su reduce visus juos sudėk ir grąžink vieną skaičių.
const numbers = [1,2,3,4,5,100];
console.log(numbers.reduce((a,c)=>a+c,0));
//2. REDUCE Ne vien skaičius sudėti galime. Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"]) ir naudojant reduce - grąžink skaičių, 
//kiek šiame array elementų yra su 3 simboliais (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce).
const letters = ["BMW", "MCB", "VWG", "Toyota", "AUDI", "AMG"];
const number  = letters.reduce((a,c)=>{
    if(c.length === 3) {
        return a+1
    } else {return a}
},0);
console.log(number);
//3. Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array naudojant reduce.
const numbers3 = [-2,2,536,842,365,365,745,369,6,25,52];
const biggest = numbers3.reduce((acc,val)=>{
    if (val>acc) {
        return val
    } return acc 
})
console.log(biggest);

//PRATIMAI SU JS MASYVU METODAIS
//1. Nusikopijuokite array:Kaip matome - šitame masyve yra objektai (o iš objekto pasiimame reikšmę - t.y. property, rašydami objektas.property).
//Prafiltruojame masyvą, kad rodytų tik pilnamečius.

const people = [
    {
      name: "Petras",
      age: 18
    },
    {
      name: "Jonas",
      age: 15
    },
    {
      name: "Antanas",
      age: 20
    },
    {
      name: "Urtė",
      age: 10
    },
    {
      name: "Diana",
      age: 25
    },
    {
      name: "Ieva",
      age: 16
    }
  ];
 console.log(people.filter((x)=>{
    return x.age >=18
 }));
 //2. Pakoreguojame aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Tai rezultatas turi būti: ["Petras", "Antanas", "Diana"].

let names = people.filter((x) => {return x.age >=18})
console.log(names.map((vardai) => {return vardai.name}))

//3.Antro pratimo array A-Z tvarka išrykiuokite. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.
console.log(people.filter(x => x.age >=18).map(vardai => vardai.name).sort())
//4. Sukurkite funkciją. Ji priims vieną argumentą - array su objektais, kurie turės du parametrus - name ir price. Grąžins - brangiausią ir pigiausią prekes. 
//Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje - tik du).
//Pvz:
//iškvietimas: fn([{name: "lemonade", price: 50}, {name: "lime", price: 10}])
//grąžins: {brangiausias: "lemonade", pigausias: "lime"}

const drinks = [
    { name: "lemonade", price: 50 },
    { name: "alus", price: 25 },
    { name: "gira", price: 40 },
    { name: "sultys", price: 30 },
    { name: "lime", price: 10 }
  ]

  const brangiausias = drinks.reduce((acc,val)=>{
    if (val.price > acc.price){
        return val
    } return acc
  })

  const pigiausias = drinks.reduce((acc,val)=>{
    if (val.price < acc.price){
        return val
    } return acc
  })

  console.log("brangiausias:",brangiausias.name, "pigiausias:", pigiausias.name)

  const  myfn = (items)=>{
    items.sort((a, b) => a.price - b.price)
    return {pigiausias: items[0].name, brangiausias: items[items.length - 1].name}
  }
  
  console.log(myfn(drinks))
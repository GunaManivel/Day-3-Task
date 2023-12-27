const URL ="https://restcountries.com/v3.1/all"
const obj = new XMLHttpRequest();
obj.open("GET",URL)
obj.send();
obj.onload =() =>{
   //console.log(JSON.parse(obj.response))
   const countries = JSON.parse(obj.response);
   for(const country of countries)
   {
    console.log("country:",country.name.common)
    console.log("region:",country.region)
    console.log("subregion:",country.subregion)
    console.log("population:",country.population)
   }
    
}
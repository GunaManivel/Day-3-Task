let obj1 = { name:"Person 1" , age:5,}
let obj2 = { age:5 , name:"Person 1" }
function compare(obj1,obj2)
{
    for(let key in obj2)
    {
        if(obj1[key] !== obj2[key])
        {
            return false;
        }
    }
    return true;
}
console.log(compare(obj1,obj2))
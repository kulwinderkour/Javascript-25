const button = document.getElementById("search");
const input = document.getElementById("city")



async function getData(cityname){
    const promise  = await fetch(`http://api.weatherapi.com/v1/current.json?key=b2ea3d58fa684856b4742448250807&q=${cityname}&aqi=yes
`)
        return await promise.json()

}


button.addEventListener('click', async ()  =>{
    const value = input.value;
    const result = await getData(value)    
    console.log(document.body.innerHTML = `<pre>${JSON.stringify(result,null,2)}</pre>`);
})

// b2ea3d58fa684856b4742448250807
//http://api.weatherapi.com/v1/current.json?key=b2ea3d58fa684856b4742448250807&q=London&aqi=yes

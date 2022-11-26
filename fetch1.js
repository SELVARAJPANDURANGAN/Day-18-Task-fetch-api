
    async function getCountry(){
        try{
            
             var cityName = await fetch(`https://restcountries.com/v3.1/all `)
             var result= await cityName.json()
             console.log(result)
         // Random1//
         var randomCity = Math.floor(Math.random()*result.length)
         console.log(randomCity)
         console.log(result[randomCity].name.common)
         
         var cityNames= result[randomCity].name.common
         console.log(cityNames)
         var trt =document.getElementById('trt')
     trt.innerHTML=cityNames
     // cpital
     var capitalname= result[randomCity].capital
     var capital =document.getElementById('capital')
    //  capital.innerHTML=capitalname//capitalname
     console.log(capital.innerHTML)
     //region
     var regionname= result[randomCity].region
     var region =document.getElementById('region')
    //  region.innerHTML=regionname//regionname
     console.log(region.innerHTML)
//latlng
     var latlngname = result[randomCity].capitalInfo.latlng
     var latlng =document.getElementById('latlng')
    //  latlng.innerHTML=latlngname//latlng
     console.log(latlng.innerHTML)

     var meds = result[randomCity].flags.png
      console.log(meds)
      var ttt=document.getElementById('flag')
  
          var weatherReport = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=175fa9771bfa1b408feb60f0443a32d7`)
      var result1= await weatherReport.json()
      console.log(result1)
      sel.innerHTML=` <div class="card"
      <h4 id="trt"></h4>
<div id="flag">
<img src="${meds}" style="width:403px;height:200px" class="card-img-top" alt="..."></div>
      <div class="card-body mt-3 py-3">
        <h5 class="card-title" id="capital">Capital Name:${capitalname}</h5>
        <p class="card-text" id="region">Region:${regionname}</p>
        <p class="card-text"><small class="text-muted" id="latlng">Latitude& Longtude:${latlngname}</small></p>
     
        </div><div class="card" style="width:25.2rem">
         <div class="card-body style="width:21.2rem"">
            <h5 class="card-title mt-3 py-3">Card title</h5>
            <p class="card-text">Temperature : ${result1.main.temp}</p>
            <p class="card-text">Windspeed: ${result1.wind.speed}</p>
            <p class="card-text">Humidity : ${result1.main.humidity}</p>
           
          </div>
        </div>
        <button class="btn btn-primary" onclick="getCountry()" type="submit" value="submit">Click for Weather</button>
        `
      }
         
      catch (err){
        console.log("Some error occured"+ err)
    }}
    getCountry()
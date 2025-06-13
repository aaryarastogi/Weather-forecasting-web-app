const Submit_Btn=document.getElementById('Submit_Btn')
const CityName=document.getElementById('CityName')
const city_name=document.getElementById('city_name');
const temp_real_value= document.getElementById('temp_real_value');
const temp_status = document.getElementById('temp_status');
const datahide= document.querySelector('.middle_layer');

const getInfo=async(event)=>{
    event.preventDefault();
    let cityval=CityName.value;
    if(cityval===""){
        city_name.innerText=`Please write the city name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=eeda40fb24359b1b514156d19a81fbae`
            const response=await fetch(url);
            const data=await response.json();
            const arrData=[data];
            city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_value.innerText=arrData[0].main.temp;
            temp_status.innerText=arrData[0].weather[0].main;
            const tempMood=arrData[0].weather[0].main;
            if(tempMood=="Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68'></i>"
            }
            else if(tempMood=="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #0097e6'></i>"
            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>"
            }
            else{
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6'></i>"
            }

            datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText=`Please write the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}
Submit_Btn.addEventListener('click',getInfo);
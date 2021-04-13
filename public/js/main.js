const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");

const temp_status = document.getElementById("temp_status")
const temp_real = document.getElementById("temp_real");

const datahide = document.querySelector(".middle_layer")


const getInfo = async(event) => {
    event.preventDefault();
    //alert('hi')


    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = "plz write the city name before search";
        datahide.classList.add("data_hide");
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=fc80c90453454237c61208972b34f055`
            const response = await fetch(url);
            const data = await response.json()
            console.log(data);

            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;


            const tempMood = arrData[0].weather[0].main;

            if (tempMood === "Clear") {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            } else if (tempMood === "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            } else if (tempMood === "Rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-rain' style='color:#a4b0be;'></i>"
            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"

            }
            datahide.classList.remove("data_hide");
        } catch (e) {
            city_name.innerText = "plz write the city name properly";
            datahide.classList.add("data_hide");
        }

    }

}
submitBtn.addEventListener("click", getInfo);
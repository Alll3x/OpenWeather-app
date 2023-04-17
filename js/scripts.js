const apiKey = '1839c68f0785750cffcd06dde6135704'
const flagUrl1 = 'https://flagsapi.com/'
const flagUrl2 = '/flat/64.png'

const cityInput = document.querySelector('#city-input')
const SearchBtn = document.querySelector('#search')
      SearchBtn.addEventListener('click', (e)=>{
        e.preventDefault()
        const city = cityInput.value
        showWeatherData(city)
      
      })

const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperature span')
const descElement = document.querySelector('#description')
const weatherIconElement = document.querySelector('#weather-icon')
const countryElement = document.querySelector('#country')
const umidityElement = document.querySelector('#umidity span')
const windElement = document.querySelector('#wind span')

const weatherContainer = document.querySelector('#weather-data')

const showWeatherData = async (city) =>{
  const data = await getWeatherData(city)

  cityElement.innerText = data.name
  tempElement.innerText = parseInt(data.main.temp)
  descElement.innerText = data.weather[0].description
  weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
  countryElement.setAttribute('src', `${flagUrl1}${data.sys.country}${flagUrl2}` )
  umidityElement.innerText = `${data.main.humidity}%`
  windElement.innerText = `${data.wind.speed}km/h`

  weatherContainer.classList.remove('hiden')
}

const getWeatherData = async (city) =>{
  const apiWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
  const res = await fetch(apiWeatherApi)
  const data = await res.json()

 return data
}

cityInput.addEventListener('keyup', (e) =>{
  if(e.code === "Enter"){
    const city = e.target.value
    showWeatherData(city)
  }
})
const APIKey = 'KYkLppGWlZZk6HOBQ9JuIpMepWcAcp0U'
const baseUrl = `http://dataservice.accuweather.com/`

const getCityUrl = cityName =>
	`${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherUrl = ( {Key} ) =>
	`${baseUrl}currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
	try
	{
		const response = await fetch(url)

		if (!response.ok) throw new Error('nao foi possivel obter os dados')
		
		return response.json()
	}
	catch ({ name, message }) {
		alert(`${name}: ${message}`)
	}
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather = async cityName => {
	const [cityData] = await getCityData(cityName)
	return fetchData(getWeatherUrl(cityData))
}
getCityWeather('Lavras')
	.then(console.log)

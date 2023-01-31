const APIKey = 'KYkLppGWlZZk6HOBQ9JuIpMepWcAcp0U'
const getCityUrl = cityName =>
	`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
	try
	{
		const cityUrl = getCityUrl(cityName)
		const response = await fetch(cityUrl)

		if (!response.ok) throw new Error('nao foi possivel obter os dados')
		
		const [cityData] = await response.json()
		return cityData
	}
	catch ({ name, message }) {
		alert(`${name}: ${message}`)
	}
}

getCityData('Lavras')
	.then(res => console.log(res))

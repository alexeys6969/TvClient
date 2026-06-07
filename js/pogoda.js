    const lat = 57.99169;
    const lon = 56.2502;
    
    const apiKey = 'a8aabd17-0df6-480d-a8be-a0d809b594ee';
    
    const weatherNames = {
        'clear': 'Ясно',
        'partly-cloudy': 'Малооблачно',
        'cloudy': 'Облачно',
        'overcast': 'Пасмурно',
        'drizzle': 'Морось',
        'light-rain': 'Небольшой дождь',
        'rain': 'Дождь',
        'moderate-rain': 'Умеренный дождь',
        'heavy-rain': 'Сильный дождь',
        'showers': 'Ливень',
        'wet-snow': 'Дождь со снегом',
        'light-snow': 'Небольшой снег',
        'snow': 'Снег',
        'snow-showers': 'Снегопад',
        'thunderstorm': 'Гроза'
    };
    
    const weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    
    const tempElement = document.getElementById('weatherTemp');
    const tempSmallElement = document.getElementById('weatherTempSmall');
    const tempSmallElementSec = document.getElementById('weatherTempSmallSec');
    const conditionElement = document.getElementById('weatherCondition');
    const weekdayElement = document.getElementById('weatherWeekday');
    const weekdayElementSec = document.getElementById('weatherWeekdaySec');
    
    function updateWeekday() {
        const today = new Date();
        weekdayElement.textContent = weekdays[today.getDay()];
        weekdayElementSec.textContent = weekdays[today.getDay() + 1]
    }
    async function loadWeather() {
        try {
            const url = `https://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}&limit=1`;
            const response = await fetch(url, {
                headers: {
                    'X-Yandex-API-Key': apiKey
                }
            });
            
            if (!response.ok) {
                throw new Error(`Ошибка ${response.status}`);
            }
            
            const data = await response.json();
            
            const fact = data.fact;
            const temp = fact.temp;
            const condition = fact.condition;
            
            const tempText = temp > 0 ? `+${temp}°` : `${temp}°`;
            
            const conditionText = weatherNames[condition] || 'Переменная облачность';
            
            tempElement.textContent = tempText;
            tempSmallElement.textContent = tempText;
            tempSmallElementSec.textContent = tempText;
            conditionElement.textContent = conditionText;
            updateWeekday();
            
            
        } catch (error) {
            console.error('Ошибка загрузки погоды:', error);
            useDemoWeather();
        }
    }
    loadWeather();
    setInterval(loadWeather, 30 * 60 * 1000);
    setInterval(updateWeekday, 60 * 60 * 1000);
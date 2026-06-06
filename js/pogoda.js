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
    const conditionElement = document.getElementById('weatherCondition');
    const weekdayElement = document.getElementById('weatherWeekday');
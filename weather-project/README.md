# Weather Project

From Udemy [The Complete 2020 Webdev Bootcamp](https://www.udemy.com/share/101qYwBEIcc1ZVTXg=/) by Angela Yu.

## Description

An Express Server web app that takes text input (e.g. city, zip) and returns the current weather from [OpenWeatherMap.org](https://openweathermap.org/).

## Authentication

Note, OpenWeatherMap.org requires API key, called an _appid_. [Get your API key](https://openweathermap.org/appid) before installing this project.

### OPEN_WEATHER_API_KEY

The API key is stored in an environment variable using [dotenv](https://www.npmjs.com/package/dotenv).

- Create the file .env in the project root.
- In .env, provide your API key in the following format.

`OPEN_WEATHER_API_KEY = 'my_app_id'`

## Screenshot

![Screenshot](https://i.ibb.co/tMjgd8s/weather-project-screenshot.png)

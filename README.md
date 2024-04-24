# Mockup API of a Smart Home :house:

The API serves as a mockup for a smart home environment. The house structure and appliances can be modified in the `home.js` file by adjusting the layout or adding new appliances.

For demonstration purposes, an artificial API has been developed to simulate the functionality of a smart mirror (see [SmartForest project](https://github.com/MarcoBendinelli/SmartForest-for-Sustainable-Living)). This API provides real-time data on home energy consumption, enabling testing and refinement of the user interface without the need for a physical connection to external servers. While the ideal setup would involve connecting to servers like Edison for real-time monitoring and insights into energy usage, this artificial API offers a simplified yet effective way to showcase the mirror's capabilities.

Link: [Smart Home API](https://smart-home-api-2j4i.onrender.com/)

To know more: [Report](doc/Smart_Home_API_Report.pdf)

## API Endpoints

The calls can be done using the following routers:
- Home Router
- Appliances Router
- Battery Router
- Photovoltaic Panels Router
- Weather Router

#### Home Router
- **Get All Home Information**: `/home`
  - Returns all information about the house.
  - [Link](https://smart-home-api-2j4i.onrender.com/home)

- **Simulate One Hour of Consumption**: `/home/simulate`
  - Simulates one hour of consumption.
  - [Link](https://smart-home-api-2j4i.onrender.com/home/simulate)

- **Reset All Data**: `/home/reset`
  - Resets all the data.
  - [Link](https://smart-home-api-2j4i.onrender.com/home/reset)

#### Appliances Router
- **Get All Appliance Information**: `/appliances`
  - Returns all information about the appliances in the house.
  - [Link](https://smart-home-api-2j4i.onrender.com/appliances)

- **Get Appliance by Name**: `/appliances/name=:name`
  - Returns information about the appliance with the specified name.
  - [Link](https://smart-home-api-2j4i.onrender.com/appliances/name=:name)

- **Turn On Appliance by Name**: `/appliances/turnOn/name=:name`
  - Turns on the appliance with the specified name.
  - [Link](https://smart-home-api-2j4i.onrender.com/appliances/turnOn/name=:name)

- **Turn Off Appliance by Name**: `/appliances/turnOff/name=:name`
  - Turns off the appliance with the specified name.
  - [Link](https://smart-home-api-2j4i.onrender.com/appliances/turnOff/name=:name)

- **Get Most Consuming Appliance**: `/appliances/mostConsuming`
  - Returns the appliance that is consuming the most at the moment.
  - [Link](https://smart-home-api-2j4i.onrender.com/appliances/mostConsuming)

#### Battery Router
- **Get Battery State**: `/batteries`
  - Returns the state of the batteries.
  - [Link](https://smart-home-api-2j4i.onrender.com/batteries)

- **Reset Battery Capacity**: `/batteries/reset`
  - Sets the capacity of the batteries to zero.
  - [Link](https://smart-home-api-2j4i.onrender.com/batteries/reset)

#### Photovoltaic Panels Router
- **Get Photovoltaic Panel Output**: `/panels/output`
  - Returns the energy collected by the photovoltaic panels (in kWh).
  - [Link](https://smart-home-api-2j4i.onrender.com/panels/output)

#### Weather Router
- **Get Current Weather**: `/meteo`
  - Returns the current weather.
  - [Link](https://smart-home-api-2j4i.onrender.com/meteo)

- **Simulate Weather Using Basic Fuzzy Logic**: `/meteo/change`
  - Simulates the weather using basic fuzzy logic.
  - [Link](https://smart-home-api-2j4i.onrender.com/meteo/change)

- **Change Weather to Sunny**: `/meteo/sunny`
  - Changes the weather to sunny.
  - [Link](https://smart-home-api-2j4i.onrender.com/meteo/sunny)

- **Change Weather to Cloudy**: `/meteo/cloudy`
  - Changes the weather to cloudy.
  - [Link](https://smart-home-api-2j4i.onrender.com/meteo/cloudy)

- **Change Weather to Rainy**: `/meteo/rainy`
  - Changes the weather to rainy.
  - [Link](https://smart-home-api-2j4i.onrender.com/meteo/rainy)

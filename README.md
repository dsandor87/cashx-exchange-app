# Code challenge

## Technologies used

- React
- CSS
- Context API
- Git
- Vercel

## Overview

[Link to the project](https://cashx.vercel.app/)

### Brief

- Project was to build a basic single-page web application that displays the latest currency
  conversion pair rates for all available currencies worldwide consumed from an API. The
  ability to change the base currency for the pair rates should be possible and a User should
  be able to use the latest rates to calculate a currency conversion. React application that consumes a public API.
  -Please upload your code to version control so we can read your code, and or deploy you
  code using any service of choice.

### Timeframe

- There is no hard limit on how much time you can spend on it. Especially, if you want to go
  the extra mile by doing some extra improvements, though we would recommend around 3 -
  4 hours.

### The App

![The app](https://github.com/dsandor87/cashx-exchange-app/blob/main/readme/Screenshot%202022-05-16%20at%2007.28.32.png?raw=true)

### Process

The brief mentioned we can use any API to get the information for the exchange rate I chose that API which is been recommended in the brief ExchangeRate I read the API documentation, and I started looking for ideas on how I can build this project. I try to get inspiration for how should look like the user and will interact with the app. I started looking for good examples for exchange sites I have an app on my phone XE currency converter I found useful for different approaches and ideas on how they answer for this really common task. I started to do sketches on paper like wireframes and how to try to design my take on an exchange app.
To begin with, I started to set up a skeleton of the project. I initiate the react app and I immediately added the context API
The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

With this configuration, I got flexibility I can add and build all functionality in just one file In the Currency Context I didn't need to set up a component level state.

Based on my wireframe I started to create a react functional component that is an input and a drop-down list.

The <input> tag specifies an input field where the user can enter data I will use this element to collect the numeric value that the user would like to exchange for a different currency and a dropdown list that contains all the available currency.

I build a hardcoded version of that
/image how it looks code snippet

It needs to be dynamic, so I read the API documentation and registered on the website to obtain an API key.

I moved to the Currancy.js file and started to fetch the data. I could use 3rd party library as axios but I would like to showcase I can use the built-in function that has been provided. I explored what kind of endpoint the API has and the response I got.

GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD

{
"result": "success",
"documentation": "https://www.exchangerate-api.com/docs",
"terms_of_use": "https://www.exchangerate-api.com/terms",
"time_last_update_unix": 1585267200,
"time_last_update_utc": "Fri, 27 Mar 2020 00:00:00 +0000",
"time_next_update_unix": 1585353700,
"time_next_update_utc": "Sat, 28 Mar 2020 00:00:00 +0000",
"base_code": "USD",
"conversion_rates": {
"USD": 1,
"AUD": 1.4817,
"BGN": 1.7741,
"CAD": 1.3168,
"CHF": 0.9774,
"CNY": 6.9454,
"EGP": 15.7361,
"EUR": 0.9013,
"GBP": 0.7679,
"...": 7.8536,
"...": 1.3127,
"...": 7.4722, etc. etc.
}
}

### DropDown

First I would like to sort the all currency dropdown. I looked at the API response and I realize all the under the conversion_rates key I have that information I just need to get only the keys of that object

const options = Object.keys(data.conversion_rates);

and I created a piece of state to store that data

const [currencyOptions, setCurrencyOptions] = useState([]);

I move the component and map through the currency options and I got the dropdown working

The next step was to capture the currency choices. We have 2 choices the base currency and the currency we want to convert to. Let's set up somevariablee for these to add default value with useState and pass to CurrencyRow component

We got that default value. In the following steps we need to make sure when the user is choosing a ddifferentcurrency option it will change currently thats mot the case because we not lisstening to that event . We need to hook up an onChange event for each different currency selectors. We are passing a function in which is passing the event object and we can get the event.target.value which is the choosen currency option and we can set that value in our state.

### Numeric input

I set up another piece of state named amount to capture the numeric value.
because we want the user able to change the rates from any of the inputs. we need to know which input had been chaned we need to introduce a new pice of states amountInFromCurrency
exchange rate.

with these variables we able to sort the 2 way conversion in no time, also we need to cature the input changes we are doing the same creating function to sort that.

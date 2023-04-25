## PropFind

### Making Process
- Market research (26m)
- Design (1h 10m)
- Setup & Coding (2h 25m)
- Tests (30m)

### Setup
- Run `yarn` or `npm install` command to install dependencies
- Run `yarn server` or `npm run server` to start the dummy api
- Use `yarn ios/android` or `npm run ios/android` to run the app
#### Running tests
- Use `yarn tests` or `npm run tests` to run the tests

### Testing
There are three addresses in the dummy api. You can use any of them to test the app.
```json
"addresses": [
	{
		"street":  "381 Garden Ave",
		"city":  "Michigan",
		"state":  "MI",
	},
	{
		"street":  "290 Shadow Ln",
		"city":  "Virginia",
		"state":  "VA"
	},
	{
		"street":  "2859 State 7 Rte",
		"city":  "New York",
		"state":  "NY"
	}
]
```

### UI/UX Explained
I wanted to make a simple and minimalist app. So I used few colors and kept the components as simple as possible.

Figma link: https://www.figma.com/file/n89MfZDyVJWm70ABLpKU8F/PropFind?node-id=0%3A1&t=tySZr9F6V7SPVdpH-1


### Stack & Motives
- React Native
- React Navigation
	_Why: React Navigation it's the best option for navigation in react-native (it's recommended by react-native's team._
- React Native Testing Library
	_Why: React Native Testing Library it's similar to Testing Library for React apps, it uses jest syntax with plus functions to use in React Native. It's easy to use and has a good documentation._
- Axios
	_Why: Best option for making api calls in react apps. It provides better control and custom features._
- Json-server
	_Why: It's good to use a fake api to simulate a real application. Json-server it's easy to install and use._
- styled-components
	_Why: Great option to style react apps and it's very similar to css._
- react-native-svg
	_Why: Recommended library for using svg in react-native apps._

### If I had more time I would have...
- Added E2E tests using Detox
- Improved unit tests
- Improved design (Property Details as a Bottom Sheet like in Figma)
- Added map navigation to look for properties
- Added documentation to Figma
- Used a real dummy api (a free public api)
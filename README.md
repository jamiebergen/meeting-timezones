# Meeting Timezone Calculator

A WordPress plugin to calculate meeting times for users in various timezones. The interface was built with React.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Node
```

### Installing

To run the React app in your local development environment:

Install the dependencies in the local node_modules folder.

```
npm install
```

To run the app in development mode:
(This will Open http://localhost:3000 to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.)
*Note that you will see sample data when you run locally.

```
npm start
```

To build the app for production:

```
npm run build
```

## Deployment

To run this as a WordPress plugin, run a build and then copy the following files/folders into a new folder called red-mtg-tz-calc. Zip the resulting folder and import as a WordPress plugin.

* red-mtg-tz-calc.php
* red-mtg-tz-calc.css
* build

## WordPress Plugin Setup

In order for users to appear in the Meeting Timezones admin interface, you must set their timezones from their user profile page (Admin -> Users -> Select user to update).


## Built With

* [Moment.js](https://momentjs.com/) - To handle dates/times
* [Moment Timezone](https://momentjs.com/timezone/) - To handle timezone calculations
* [React Datepicker](https://github.com/Hacker0x01/react-datepicker) - A datepicker component for React

## Authors

* **Jamie Bergen** - *Initial work* - [My Website](https://jamiebergen.com/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

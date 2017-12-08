# Meeting Timezone Calculator

A WordPress plugin to calculate meeting times for users in various timezones. The interface was built with React, and it runs in the WordPress admin dashboard.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

First be sure to have [Node.js](https://nodejs.org/en/) installed. You should be running a Node version matching the [current active LTS release](https://github.com/nodejs/Release#release-schedule) or newer for this plugin to work correctly. You can check your Node.js version by typing `node -v` in the Terminal prompt.

You should also have the latest release of [npm](https://npmjs.org). To update npm, type this into your terminal: `npm install npm@latest -g`

### Installing

To run the React app in your local development environment:

Install the dependencies in the local node_modules folder.

```
npm install
```

To run the app in development mode:

```
npm start
```

To build the app for production:

```
npm run build
```

## Deployment

To deploy this as a WordPress plugin, run a build and then copy the following files/folders into a new folder called red-mtg-tz-calc. Zip the resulting folder and import it as a WordPress plugin.

* red-mtg-tz-calc.php
* red-mtg-tz-calc.css
* build

## WordPress Plugin Setup

* Once the plugin is activated its interface is accessed via Admin -> Tools -> Meeting Timezones.
* In order for individuals to appear in the Meeting Timezones admin interface, they must be added to the site as users, and their timezones must be set from their user profile page (Admin -> Users -> Select user to update).

## Built With

* [Moment.js](https://momentjs.com/) - To handle dates/times
* [Moment Timezone](https://momentjs.com/timezone/) - To handle timezone calculations
* [React Datepicker](https://github.com/Hacker0x01/react-datepicker) - A datepicker component for React

## Authors

* **Jamie Bergen** - *Initial work* - [My Website](https://jamiebergen.com/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

# Magic: The Dashboard

A dashboard to know every detail of your Magic the Gathering collection

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [Benchmarks](#benchmarks)
- [Video](#video)

## Installation

Clone this repository into your `xampp/htdocs` with 

```sh
gh repo clone Zygmut/Magic-The-Dashboard
```

or with any means necessary.

## Usage

You'll need to use third party software to convert your Magic the Gathering collection into a database. Another way is to manually import each card into the `mtd.sql` file. These two databases should follow the `Card` data structure as the querys depend into some attribute names.

First, you'll need to host the database. In our testings we used [XAMPP](https://www.apachefriends.org/download.html). Once in the phpmyadmin, create a databse called `mtd` and import the `mtd.sql` file into it; This will import all of your cards into the database.

Finally, just open `localhost/magic-the-dashboard` 

## Technologies

This project was made using xampp, html, css and javascript. [XAMPP](https://www.apachefriends.org/download.html) will host the databse. To access it we use a custom made `query` function that returns a json with all the contents of the resulting query (The file can be found under `assets/php/query.php`).

JavaScript allows us to manage and configure all the charts. To be more specific, because we use [Highcharts](https://www.highcharts.com/) as our graph library, we have one js file for each graph that holds all the necessary configuration. Furthermore, we use two more js files:

- **chartHandler.js**: To manage all the charts (make the db calls, parse the data, call the charts) 
- **colorPalette.js**: To hold our color palette, as we access it in some charts

HTML and CSS hold the usual meaning, document strucutre and style. The only thing to take into account is the use of [Bootstrap](https://getbootstrap.com/) for the html elements as it made it easier to create elaborated elements with less lines of code

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/zygmut/magic-the-dashboard/compare/).

## Benchmarks

To assert that the page is accesible and performace friendly we used [lighthouse](https://web.dev/performance-scoring/). This is the score :

![Ligthouse score](https://i.imgur.com/T0IzZcQ.png)

## Video

We made a quick video to overview the webpage and design options. The video can be found [here](https://youtu.be/kanR4kpMhE4)

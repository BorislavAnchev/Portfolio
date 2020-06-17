# Portfolio

The purpose of this repository is to serve as a portfolio, representing a set of aquired professional skills.

## Bank App

A single page application representing online banking app. The user can perform the standart CRUD operations in the form of creating bank accounts, switching between existing bank accounts, making deposits and withdrawls, representing the update operation and deleting bank accounts. When creating a bank account, a validation is enforced upon the user, prompting him to use the specified format for creating a bank account on his behalf. The application is created using the TDD approach and is based on the React and Redux libraries. The application works with a mocked back-end, using `axios-mock-adapter` and using a real RESTful API, written in `NodeJS`. The application is divided by feature branches and the branch using the NodeJS RESTful API is named `bank-with-server` in the [borislav-bank](https://github.com/BorislavAnchev/borislav-bank) repository.

## Bethany's Pie Shop

An online pie shop, based on the ASP.NET MVC framework. The project has working login and registration capabilities, and CRUD operations. The website consists of a page, listing all the pies that Bethany's Pie shop offers, as well as details pages for each particular pie. The project uses Enitty Framework Core and LocalDB for its database.

## Calculator

A JavaScript-based calculator that aims to mimic the behavior of an actual commercial application such as Microsoft Windows' calculator. For example no leading zeroes can be added, when pressing an operator, the current expression is shown above the input, no multiple consecutive operators can be inputted and so on. The application is developed using the TDD approach and is bundled with WebPack.

## SecuringAngularApps.API & SecuringAngularApps.STS + securing-angular-client

A project whose purpose is to exercise the securing of Angular applications with OpenID Connect and OAuth 2. SecuringAngulraApps.STS is used for the authentication and uses Identity Server 4 and ASP.NET Core Identity and the SecuringAngularAps.API provides the REST services. They both use Entity Framework Core and LocalDB for their databases.

## ChatAPI & ChatClient

A simple chat application, written in Angular, that aims to recreate the experience of using an instant messager. It uses the SecuringAngularApps.STS server for its login and authentication and ASP.NET Core Web API for the REST services. It supports setting up a custom nickname and stores the sent messages in LocalDB with the help of Entity Framework Core.

## ContactList

A simple contact list web application, written in JavaScript and modeled after the contact lists found on the modern smartphones. The application is packaged with WebPack.

## RazorPagesMovie

A movie catalog, created using ASP.NET Core and Razor Pages, implementing the MVVM pattern. The project has working CRUD capabilities for displaying the list of movies, adding new movies, and deleting or editing existing ones. The application uses Entity Framework Core and LocalDB for its database.

## RESTful-API

The RESTful API that serves as a back-end for the `Bank App`. It is written in NodeJS and uses MongoDB for its database. Link to the project repository can be found here: [RESTful-API](https://github.com/BorislavAnchev/RESTful-API)

## APM

A product management application, written in Angular. The application retrieves the list of products from a mocked API and shows them on the page. It provides filtering capabilities to filter the products based on some keyword, as well as details pages for each particular product.

## APM-NgRx

A modified version of the product management application, this project's goal is to exercise the Redux pattern in combination with Angular, in a similar way to the one used with the `Bank App`. The application also has working CRUD functionality for displaying the list of products, creating new ones, as well as deleting and editing products. The application also utilizes presentational and container components in order ot achieve better seperation of concerns.

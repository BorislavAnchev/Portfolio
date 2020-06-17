# Portfolio

The purpose of this repository is to serve as a portfolio, representing a set of aquired professional skills.

## Bank App

A single page application representing online banking app. The user can perform the standart CRUD operations in the form of creating bank accounts, switching between existing bank accounts, making deposits and withdrawls, representing the update operation and deleting bank accounts. When creating a bank account, a validation is enforced upon the user, prompting him to use the specified format for creating a bank account on his behalf. The application is created using the TDD approach and is based on the React and Redux libraries. The application works with a mocked back-end, using `axios-mock-adapter` and using a real RESTful API, written in `NodeJS`. The application is divided by feature branches and the branch using the NodeJS RESTful API is named `bank-with-server` in the [borislav-bank](https://github.com/BorislavAnchev/borislav-bank) repository.

## Bethany's Pie Shop

An online pie shop realizing login and CRUD capabilities, created using ASP.NET Core MVC and Entity Framework Core. The project implements the MVC and Repository Design Patterns.

## Calculator

A JavaScript-based calculator application, mimicking the Windows calculator's behavior. The goal of this project was to create an application whose behavior is as close as possible to a commercial grade application. For example, there can be no leading zeros when inputting a number, there can be no consequtive operators. In the case of consequtive operators, the last operator overrides the one before it and so on. The application is developed using the TDD approach and is bundled using WebPack.

## SecuringAngularApps.API & SecuringAngularApps.STS + securing-angular-client

A project whose purpose is to practice the securing of Angular applications using OpenID Connect and OAuth 2. The client is written in Angular and has login capabilities and implements CRUD operations. The SecuringAngularApps.API project provides the REST services and is based on ASP.NET Web API and the SecuringAngularApps.STS is also based on ASP.NET Web API + ASP.NET Core Identity. The user can create a regular account via the implemented registration page, by populating the database with a script or by manually creating the account in the database as the project doesn't come with pre-seeded database. An admin account, though, can only be created manually. Both the API and STS use Entity Framework Core and MS SQL LocalDB for the database.

## ChatAPI & ChatClient

A simple application aimed to imitate an instang messaging chat functionality. Written in Angular, the application supports login capabilities, using the SecuringAngularApps.STS project for authentication and the ChatAPI project for the REST services. It supports setting up a custom nickname and also stores the sent messages in a database. The application uses Entity Framework Core and MS SQL LocalDB for the database.

## ContactList

A simple web application modeled after the contact lists found on the modern smartphones. The application is packaged using WebPack.

## RazorPagesMovie

An ASP.NET Core project implementing the MVVM pattern and using Razor Pages instead of the ASP.NET Core MVC framework. The project provides CRUD capabilities for displaying a list of movies, creating, updating and deleting movies, as well as seeing individual details page for each movie.

## RESTful-API

## APM

## APM-NgRx

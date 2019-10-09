# angular-person-directory
A simple person directory built using Angular. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## System Requirements
* Node.js
* Angular CLI (installed globally)

## Usage
* npm install
* ng serve

Navigate to `http://localhost:4200/` to see the application.

## Basic architecture
Angular CLI provided initial scaffolding. In addition to standard scaffolding, two components and one service were created.
* person-list: a component that displays each person
* person-adder: a component that allows a new person to be created
* person-data-service: a service that manages person data

<!-- language: lang-none -->

     -----------------------------------------
    |             <component>                  |
    |                app                       |                  ---------------
    |                                          | uses            |   <service>   |
    |   --------------     ----------------    | ------------->  |  person-data  |                 
    |  | <component>  |   |   <component>  |   |                  ---------------
    |  | person-list  |   |  person-adder  |   |   
    |   --------------    -----------------    |                        
    ------------------------------------------

## Acknowledgments
* Bootstrap 4 (styling)

## License
Apache 2.0
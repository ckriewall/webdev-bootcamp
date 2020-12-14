# EJS Challenge 2 - with Database

From Udemy [The Complete 2020 Webdev Bootcamp](https://www.udemy.com/share/101qYwBEIcc1ZVTXg=/) by Angela Yu.

## Description

A NodeJS-backed blog formatted with bootstrap. Content is rendered using [EJS](https://ejs.co/) and EJS partials.

> EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
> No religiousness about how to organize things. No reinvention of iteration and control-flow.
> It's just plain JavaScript. [-ejs.co](https://ejs.co/)

## Enhancements

This project builds on the [original EJS Challenge](https://github.com/ckriewall/webdev-bootcamp/tree/main/ejs-challenge) by moving content to a Mongo Atlas database. Data is added/retrieved through the Mogoose ODM.

## Customization

Download and `npm install`
Add the file `.env` in the project root. Set the value of `MONGO-URI` to your own connection string.

    `MONGO_URI = mongodb+srv://my_connection_string`

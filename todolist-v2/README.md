# To Do List v2

From Udemy [The Complete 2020 Webdev Bootcamp](https://www.udemy.com/share/101qYwBEIcc1ZVTXg=/) by Angela Yu.

## Description

A daily to-do list app rendered using [EJS with Express](https://github.com/mde/ejs/wiki/Using-EJS-with-Express).

## Changes From v1

[Verion 1](https://github.com/ckriewall/webdev-bootcamp/tree/main/todolist-v1) rendered static content from an array in app.js. This version uses Mongoose to define a data a model, then read and write from Mongo.

## File Structure

- `/config`: db connection and Task model
- `/public`: static folder containing CSS
- `/views`: EJS template files (`about`, `header`, `footer`, and `list`)
- `app.js`: Express server
- `date.js`: an external module for demonstrating exports

## Screenshot

![Screenshot](https://i.ibb.co/T1zdcgj/todo-v1-screenshot.png)

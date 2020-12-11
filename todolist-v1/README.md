# To Do List v1

From Udemy [The Complete 2020 Webdev Bootcamp](https://www.udemy.com/share/101qYwBEIcc1ZVTXg=/) by Angela Yu.

## Description

A daily to-do list app rendered using [EJS with Express](https://github.com/mde/ejs/wiki/Using-EJS-with-Express).

## EJS as a Template Engine

From [ejs.co](https://ejs.co/):

> A template engine enables you to use static
> template files in your application. At runtime,
> the template engine replaces variables in a
> template file with actual values, and transforms
> the template into an HTML file sent to the client.

In EJS for Express, content is returned using `res.render()`. The first argument is the EJS template name. The second argument is an object containing key/value pairs for variables in the EJS template.

`res.render('list', { listTitle: date.getDate(), tasks: tasks })`

## File Structure

- `/public`: static folder containing CSS
- `/views`: EJS template files (`about`, `header`, `footer`, and `list`)
- `app.js`: Express server
- `date.js`: an external module for demonstrating exports

## Screenshot

![Screenshot](https://i.ibb.co/T1zdcgj/todo-v1-screenshot.png)

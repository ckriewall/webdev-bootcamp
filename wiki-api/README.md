# Wiki API

From Udemy [The Complete 2020 Webdev Bootcamp](https://www.udemy.com/share/101qYwBEIcc1ZVTXg=/) by Angela Yu.

## Description

An Express API for Wiki articles.

## Endpoints

- `/articles`

  - `DELETE`: delete all articles in the database
  - `GET`: list all articles in the database
  - `POST`: add an article to the database

- `/articles/:id`
  - `DELETE`: delete the article with specified id
  - `GET`: get the article with the specified id
  - `PUT`: edit the article with the specified id

## File Structure

- `/data`: db connection and Article model
- `app.js`: Express server and all routes

## Screenshot

This project does not render any UI.

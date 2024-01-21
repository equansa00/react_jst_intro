# JSX Exercises

This project contains a series of exercises to practice JSX and React components.

## Exercises

### Part 1

This part involves creating three components:

- `FirstComponent`: Renders an h1 with the text “My very first component”.
- `NamedComponent`: Renders a p that should accept a property of “name” and display text “My name is name”.
- `App`: Renders a div with instances of the other two components.

### Part 2

This part involves creating a `Tweet` component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.

The `App` component should render at least three tweets. The `Tweet` component should be styled using a CSS class.

### Part 3

This part involves creating a `Person` component. Inside of this component, render a p tag which displays “Learn some information about this person”. Each person should have name and age properties.

If the person is over 18 years old, display an additional h3 that says “please go vote!”. Otherwise, display an h3 that says “you must be 18”. If the person’s name is longer than 8 characters, only display the first six characters of their name.

The `Person` component should accept an array of hobbies (an array of strings) as a property. It should list each one of these hobbies as an li.

The `App` component should render at least three copies of the `Person` component on the page.

## Running the Project

To run the project, use the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser.

```


# Sprint Challenge: Single Page Applications - Rick & Morty

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Single Page Applications, React Router I - II, React Forms, and Hooks.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate with students during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack.

You have **three hours to complete** this challenge. **Plan your time accordingly.**

## Commits

In case you ever need to return to old code. Remember your ABC: Always Be Commiting!

## Description

In this challenge, you will create a Single Page Application complete with Client-Side Routing and components that are built to consume a 3rd party Web Server (API). Your handle and display data from the [Rick and Morty API](https://rickandmortyapi.com/documentation). You will design, architect, and develop a React Based SPA web app.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] Explain benefit(s) using `client-side routing`?
> Answer:
- [ ] What does AJAX stand for?
> Answer:
- [ ] What are `controlled components` in React?
> Answer:
- [ ] Name three tools/libraries for making AJAX requests.
> Answer:


## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on GitHub.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: `git checkout -b <firstName-lastName>`.
- [ ] Implement the project on this branch, committing changes regularly.
- [ ] Push commits: `git push origin <firstName-lastName>`.
- [ ] **LOOK** at your `citadel` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ] **cd** into `citadel` and run `yarn install` or `npm install` to retrieve the client side dependencies.
- [ ] **RUN** `yarn start or npm start` to fire up your React application.

Follow these steps for completing your project:

- [ ] Submit a Pull Request to merge `<firstName-lastName>` branch into master (student's repo).
- [ ] Add your TL as a Reviewer on the Pull Request.
- [ ] TL then will count the HW as done by merging the branch into master.

## Minimum Viable Product

The MVP of this project will be broken up between 2 stages. Follow each step and be sure to use your design/style skills to make this application look professional.

### Stage 1

Construct a Single Page Application using React incorporating multiple components.

Keep your components separate and design them before adding in your Router.
You can test them individually before adding in the Router (Stage 2).

Create 3 page components to display data from 3 API endpoints:

- `https://rickandmortyapi.com/api/character/` - [`docs`](https://rickandmortyapi.com/documentation/#get-all-characters)
- `https://rickandmortyapi.com/api/locations/` - [`docs`](https://rickandmortyapi.com/documentation/#get-all-locations)
- `https://rickandmortyapi.com/api/episodes/` - [`docs`](https://rickandmortyapi.com/documentation/#get-all-episodes)

- [ ] Read the docs [Rick & Morty API](https://rickandmortyapi.com/documentation/).
- [ ] Create a component to show a grid of data from the API.
  - [ ] Include `useState`, `useEffect`.
  - [ ] Use `Axios` (or `fetch`) to make a GET request to each endpoint.
  - _Example API Endpoint: `https://rickandmortyapi.com/api/character/`_
  - [ ] Display API results using a [card](https://material-ui.com/components/cards/#media), [grid](https://material-ui.com/components/grid-list/#grid-list-with-titlebars) or [list](https://material-ui.com/components/lists/#align-list-items) UI on the page.
  - [ ] Design each 'page' layout based on the available fields. (See docs for [schema](https://rickandmortyapi.com/documentation/#character-schema) details.)
  - [ ] Use a styling or component library. (Pick at least 1 of: [ReactStrap](https://reactstrap.github.io), [Semantic-UI](https://react.semantic-ui.com), [Material-UI](https://material-ui.com/). Or [styled-components](https://www.styled-components.com/), [emotion](https://emotion.sh/docs/introduction)).
  - [ ] Test each component manually by importing into `App.js` and adding to JSX.

### Stage 2

Add a Router to this application by using [React Router](https://reacttraining.com/react-router/web/guides/quick-start).

- [ ] You'll start by wrapping your `root` component in the `Router` component.
- [ ] Declare your 3 routes with `<Route>` components for each component created above..
- [ ] Include `/characters`, `/locations` and `/episodes` routes.
- [ ] In your `App` component, add a [tab bar](https://material-ui.com/components/tabs/#full-width) that will use React Routers `NavLink` components to link to your different pages.
- [ ] Make sure to use `<Link>` component instead of `<a>` elements.

### Stretch

Add a search component to your pages.

- [ ] Add the `<SearchForm />` component (see `./components/SearchForm.js`).
  - [ ] Wire up the `onSearch(name)` callback prop to support [querying the API](https://rickandmortyapi.com/documentation/#filter-characters). (To search for `rick`, you would request `/api/character/?name=rick`.)
  - [ ] _Remember:_ `useEffect` must reference any state on which it _depends_.
- [ ] Persist search form field(s) by using the custom hook `useLocalStorage`.

## _MOAR_ STRETCH 💪

There's a range of difficulty included.

- [ ] Animate page transition and/or card loading.
- [ ] Add additional fields to search form. They are unique for each endpoint. See [**Available parameters**.](https://rickandmortyapi.com/documentation/#filter-characters), etc..
- [ ] Add a [modal](https://material-ui.com/components/modal/) component view to show more details of each type of record. See if you can use a nested route for it.
- [ ] Use the [GraphQL Endpoint](https://rickandmortyapi.com/documentation/#graphql) with multiple search fields.

### Backup API URL

If the [main API service](https://rickandmortyapi.com/documentation) goes down, or you exceed rate limits, you can try the following backup URL:

**Backup URL:** https://rick-and-morty-learning-api.herokuapp.com/api/

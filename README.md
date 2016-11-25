## Project Spec
- Get pictures of dogs or cats (depending on what your favourite is) from any API. 
- Display in a grid. You can use infinite scrolling or pages.
- When you click on a picture, it will go into a single-picture view. It will expand the picture in either a lightbox or just fullscreen.
- In the single-picture view, we should be able to do 3 actions: go to the next picture, previous picture, or go back to grid mode.
- Use any third party libraries you'd like. 
- The result does not have to be beautiful, but it should be functional.

## Installation

Pull Repo Locally.

```
npm install
```

```
npm run start
```

navigate to `localhost:8080`

#### Distribution Build

```
npm run build
```

files are put in the `/public` folder

## Overview
I decided to build this project as a React App because I am still learning React and wanted to challenge myself.
I built it as an infinite scrolling application with a simple lightbox effect when an image is selected. 
Both these decisions were made as they seem to be the current standard UX for photo gallery apps.
I set a self-enforced time-limit of 3 hours to work on this project, so that I had to scale the project scope to meet the deadline.

## Dev Workflow
This project is using Webpack for real-time module reloading and along with Babel for transpiling ES2015 code. 
This workflow was chosen because I am very comfortable in Webpack and feel that the initial setup time is worth if for the features it offers.


## Future Features
If this was an ongoing project, here are a few features that I would like to implement:

1. Routing (via React Router)
2. State Change Animations
3. Search and Filter Options
4. Improved UX/UI
5. Further breakdown of components into small re-usable chunks

## Know Issues

- Inconsistent CORS issues from the Pixabay API. I suspect this is due to developing locally on localhost:8080.
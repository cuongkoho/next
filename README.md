# Step 1: Create a base CRA project

Project with the following dependencies:

* React 18
* TypeScript 4
* React Script 5 Redux 8
* React Router 6
* Material UI 5

Features:

- 1 static landing page
- 1 dynamic page that renders a number
- 1 static page that's hook to the stored  number

# Goals of migrations:

* Following the Fig pattern:
    * Keep developing current pages in pure React
    * Developing new pages + features in Next
    * Converting current pages + features into Next

# Problems + Solutions

- Routing for current React App + NextJS folder-structure routing: Solution is to use `rewrite` routing supported by NextJS
- Difference between JS and Node (writing isomorphic components): Solution is to add a check for `window` in the component level
- Upgrading libraries (MUI 5 + getting rid of `theme-ui`)
- Mismatching UI between server-rendered and browser-rendered
    - Emotions + Material UI (CSS in JS support)
- CI
ifdsf

# Step 3: Fully migrate to NextJS

# Step 4: Apply on web.koho.ca

* Routes that users can get access to directly?

https://github.com/mui/material-ui/blob/master/examples/nextjs/

itst

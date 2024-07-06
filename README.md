# Frontend Mentor Challenge - Space tourism multi-page website

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3 "https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3").

## Table of contents

- [Overview](#overview)

- [My process](#my-process)

   - [Built with](#built-with)

   - [What I learned](#what-i-learned)

    - [react-router-dom & framer-motion](#react-router-dom--framer-motion)

- [Resources](#resources)

- [Acknowledgments](#acknowledgments)

## Overview

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size

- See hover states for all interactive elements on the page

- View each page and be able to toggle between the tabs to see new information

Links:

- GitHub Repo: <https://github.com/xup60521/react-space-tourism-website>

- Live website: <https://xup60521.github.io/react-space-tourism-website/>

## My process

### Built with

- react (powered by vite)

- react-router-dom

- framer-motion

- tailwindCSS

### What I learned

#### react-router-dom & framer-motion

Though it is possible to do client side navigation with native built in hooks, react-router-dom makes it easier to do so.

Here, I use `<HashRouter>` to navigate between pages.

```tsx
// basic setup
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { routes } from "./routes.ts"

export default function Root() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}

function App() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      {route.map((item, index) => (
          <Route path={`${item.path}/*`} element={item.element()} key={`top route ${item.path} ${index}`} />
      ))}
     </Routes>
  )
}
```

We can use `<Link>` to navigate different routes. But for now, there’s no transition animation between these pages.

Luckily, there’s already a library that satisfies our need. Using `framer-motion`, we can create transition effect during navigation.

```tsx
import { AnimatePresence } from "framer-motion";

// App.tsx

<AnimatePresence>
  <Routes location={location} key={location.pathname}>
    {route.map((item, index) => (
        <Route path={`${item.path}/*`} element={item.element()} key={`top route ${item.path} ${index}`} />
    ))}
   </Routes>
</AnimatePresence>
```

In the individual element, we need to adjust some code to create animation.

```tsx
// Crew.tsx
import { motion } from "framer-motion"
export default function Crew() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: 0 }}
    >
      {/* ... */}
     </motion.main>
  )
}
```

By doing so, we successfully create the transition animation between pages. When navigating to a different page, previews element would fade out, next element would fade in.

To be honest, it’s probably better to use a full-stack framework to build a multi-page website. Using either `Remix` or `Next.js` should be good as well.

## Resources

- TailwindCSS Docs - <https://tailwindcss.com/docs>

- Google font - <https://fonts.google.com>

- react-router-dom docs - <https://reactrouter.com/en/main>

- framer-motion docs - <https://www.framer.com/motion/>

## Acknowledgments

- framer motion + react-router-dom tutorial - <https://www.youtube.com/watch?v=FdrEjwymzdY&t=655s>
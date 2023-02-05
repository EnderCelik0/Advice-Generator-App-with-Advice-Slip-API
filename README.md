# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon


### Links

- Solution URL:  (https://www.frontendmentor.io/solutions/advice-generator-using-axios-react-vite-and-vanilla-css-z5-AKUfIwq)
- Live Site URL: (https://spontaneous-churros-fb1702.netlify.app

)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- Vanilla CSS


### What I learned

*In this challange i learn how to do API calls and how to create custom reusable hooks*



```
useFetch.jsx (Custom Hook)

import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const refetch = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error, refetch };
}

export default useFetch;
```


### Useful resources

- [Creating custom hooks](https://www.youtube.com/watch?v=Vspeudp-M9k&list=PL61HOJk40QALt6xGEK_WAOzfwBHO5xYO4) - This helped me for creating custom hooks and fetch data with them. I really liked this pattern and will use it going forward.



## Author

- Frontend Mentor - https://www.frontendmentor.io/profile/EnderCelik0



```jsx
const [show, setShow] = useState(false);

useEffect(() => {
  let previousScrollPosition = 0;
  let currentScrollPosition = 0;

  window.addEventListener('scroll', function (e) {
    // Get the new Value
    currentScrollPosition = window.pageYOffset;

    //Subtract the two and conclude
    // if (previousScrollPosition - currentScrollPosition > 0) {
    //   setShow(false);
    // } else if (previousScrollPosition - currentScrollPosition < 0) {
    //   setShow(true);
    // }

    if (previousScrollPosition - currentScrollPosition < 0) {
      setShow(true);
    }

    // Update the previous value
    previousScrollPosition = currentScrollPosition;
  });
}, []);
```

wert show wieder auf false stellen

```jsx
useEffect(() => {
  if (show) {
    setTimeout(() => setShow(false), 5000);
  }

  return () => {};
}, [show]);
```

```css
.m-icon-wrapper {
  fill: transparent;
  stroke: transparent;
  // stroke-width: 10; // bei dem wert muss man auspropieren hängt immer von der svg ab
  cursor: pointer;
  position: fixed;
  bottom: 4rem;
  right: 3rem;

  svg {
    position: relative;
    overflow: visible;
    width: 2rem;
  }

  path {
    stroke-dashoffset: 0;
    stroke-dasharray: 140; // bei dem wert muss man auspropieren hängt immer von der svg ab
    transform-origin: center;
  }

  path {
    animation: stroke-animation 6s ease-in-out forwards;
  }
}

@keyframes stroke-animation {
  0% {
    stroke: $tag-font-color;
    stroke-dashoffset: 140;
  }
  30% {
    stroke-dashoffset: 0;
    stroke: $tag-font-color;
  }

  90% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    stroke-dashoffset: 0;
    stroke: $tag-font-color;
  }
}
```

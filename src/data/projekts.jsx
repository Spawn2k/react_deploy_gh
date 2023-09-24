const projekts = [
  {
    title: 'Todo - List',
    link: 'todo-list',
    level: 1,
    react: true,
    description: 'Einfaches Todo App um React kenne zu lernen. Hautpziel useState zu verstehen und anzuwenden',
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4zM100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4zm116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 0 0-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 0 0 2.1-5.4V432c0-2.2-1.8-4-4-4z"></path>
      </svg>
    ),
    tags: [
      {
        name: 'React',
        link: 'https://react.dev/',
      },
      {
        name: 'useState',
        link: 'https://react.dev/reference/react/useState',
      },
      {
        name: 'React-Icon',
        link: 'https://react-icons.github.io/react-icons/',
      },
    ],
    date: '06 - 2023',
  },
  {
    title: 'usePopcorn',
    link: 'use-popcorn',
    level: 3,
    react: true,
    description:
      'Schlichtes Movie Db App mit bewertungsfunktion. Die erste Version nur mit useEffect mit fetch, async, await, AbortController und useState umgesetzt. Mit guter planung vermeidet man Prop drilling. Die aktuelle Version wurde anstatt mit useState Hauptsächlich mit useReducer umgesetzt deutlich übersichler da die funktionslogik zentrall verwaltet wird.',
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 256 256"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M229.52,74.21a8,8,0,0,0-7.13-2A44,44,0,0,0,168,41.67a44,44,0,0,0-80,0,44,44,0,0,0-54.4,30.51,8,8,0,0,0-9.4,9.65L54.76,211.67A16,16,0,0,0,70.34,224H185.66a16,16,0,0,0,15.58-12.33L231.79,81.83A8,8,0,0,0,229.52,74.21ZM76,56a27.68,27.68,0,0,1,13.11,3.26,8,8,0,0,0,11.56-5.34,28,28,0,0,1,54.66,0,8,8,0,0,0,11.56,5.34A28,28,0,0,1,207,76.54l-38.56,11-34.49-13.8a16,16,0,0,0-11.88,0L87.57,87.56,49,76.54A28,28,0,0,1,76,56ZM70.34,208,42.91,91.44l37.85,10.81L94.86,208ZM145,208H111L96.75,101.12,128,88.62l31.25,12.5Zm40.66,0H161.14l14.1-105.75,37.85-10.81Z"></path>
      </svg>
    ),

    tags: [
      {
        name: 'React',
        link: 'https://react.dev/',
      },
      {
        name: 'useState',
        link: 'https://react.dev/reference/react/useState',
      },
      {
        name: 'useReducer',
        link: 'https://react.dev/reference/react/useReducer',
      },
      {
        name: 'React-Icon',
        link: 'https://react-icons.github.io/react-icons/',
      },
    ],
    date: '06 - 2023',
  },
  {
    title: 'React - Quiz',
    link: 'react-quiz',
    level: 3,
    react: true,
    description:
      'Kleines React Quiz App. Wieder mit useState umgesetzt, der schwierege part war die logik aufzubauen für die evaluieren der Antwort. Aktuelle Version mit useReducer, mit timer funktion und useEffect async await fetch als externe Quelle wurde JSONBin.io genutz',
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path>
      </svg>
    ),
    date: '07 - 2023',
    tags: [
      {
        name: 'React',
        link: 'https://react.dev/',
      },
      {
        name: 'useState',
        link: 'https://react.dev/reference/react/useState',
      },
      {
        name: 'useEffect',
        link: 'https://react.dev/reference/react/useEffect',
      },
      {
        name: 'useReducer',
        link: 'https://react.dev/reference/react/useReducer',
      },
    ],
  },
  {
    title: 'Word - Wise',
    link: 'word-wise',
    level: 3,
    react: true,
    description:
      'Reise tracker App. Mann kann sich eintragen wo man schon mal alles Urlaub gemacht hat. Diesmal gleich mit useReducer,useEffect, useState und React Router (BrowserRouter) umgesetzt. React Leaflet wird als map verwendet und json quelle dient wieder JSONBin.io. Aktueller Standort und schlichtes authentifizierung wurden integriert. Aktuelle Version wurden die Routen mit createBrowserRouter umgesetzt',
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 496 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm200 248c0 22.5-3.9 44.2-10.8 64.4h-20.3c-4.3 0-8.4-1.7-11.4-4.8l-32-32.6c-4.5-4.6-4.5-12.1.1-16.7l12.5-12.5v-8.7c0-3-1.2-5.9-3.3-8l-9.4-9.4c-2.1-2.1-5-3.3-8-3.3h-16c-6.2 0-11.3-5.1-11.3-11.3 0-3 1.2-5.9 3.3-8l9.4-9.4c2.1-2.1 5-3.3 8-3.3h32c6.2 0 11.3-5.1 11.3-11.3v-9.4c0-6.2-5.1-11.3-11.3-11.3h-36.7c-8.8 0-16 7.2-16 16v4.5c0 6.9-4.4 13-10.9 15.2l-31.6 10.5c-3.3 1.1-5.5 4.1-5.5 7.6v2.2c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8s-3.6-8-8-8H247c-3 0-5.8 1.7-7.2 4.4l-9.4 18.7c-2.7 5.4-8.2 8.8-14.3 8.8H194c-8.8 0-16-7.2-16-16V199c0-4.2 1.7-8.3 4.7-11.3l20.1-20.1c4.6-4.6 7.2-10.9 7.2-17.5 0-3.4 2.2-6.5 5.5-7.6l40-13.3c1.7-.6 3.2-1.5 4.4-2.7l26.8-26.8c2.1-2.1 3.3-5 3.3-8 0-6.2-5.1-11.3-11.3-11.3H258l-16 16v8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-20c0-2.5 1.2-4.9 3.2-6.4l28.9-21.7c1.9-.1 3.8-.3 5.7-.3C358.3 56 448 145.7 448 256zM130.1 149.1c0-3 1.2-5.9 3.3-8l25.4-25.4c2.1-2.1 5-3.3 8-3.3 6.2 0 11.3 5.1 11.3 11.3v16c0 3-1.2 5.9-3.3 8l-9.4 9.4c-2.1 2.1-5 3.3-8 3.3h-16c-6.2 0-11.3-5.1-11.3-11.3zm128 306.4v-7.1c0-8.8-7.2-16-16-16h-20.2c-10.8 0-26.7-5.3-35.4-11.8l-22.2-16.7c-11.5-8.6-18.2-22.1-18.2-36.4v-23.9c0-16 8.4-30.8 22.1-39l42.9-25.7c7.1-4.2 15.2-6.5 23.4-6.5h31.2c10.9 0 21.4 3.9 29.6 10.9l43.2 37.1h18.3c8.5 0 16.6 3.4 22.6 9.4l17.3 17.3c3.4 3.4 8.1 5.3 12.9 5.3H423c-32.4 58.9-93.8 99.5-164.9 103.1z"></path>
      </svg>
    ),
    date: '07 - 2023',
    tags: [
      {
        name: 'React',
        link: 'https://react.dev/',
      },
      {
        name: 'useState',
        link: 'https://react.dev/reference/react/useState',
      },
      {
        name: 'useEffect',
        link: 'https://react.dev/reference/react/useEffect',
      },
      {
        name: 'useReducer',
        link: 'https://react.dev/reference/react/useReducer',
      },
      {
        name: 'React Leaflet',
        link: 'https://react-leaflet.js.org/',
      },
      {
        name: 'React Router',
        link: 'https://reactrouter.com/en/main',
      },
      {
        name: 'JSONBin.io',
        link: 'https://jsonbin.io/',
      },
    ],
  },
  {
    title: 'Pizza',
    link: 'react-pizza',
    level: 4,
    react: true,
    description:
      'Bestell Lieferservice App. Statemanagement wurde mit Redux umgesetzt, send/request wurden mit createBrowserRouter mit der Loader/Action funktion umgesetzt anstatt mit useEffect',
    date: '07 - 2023',
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15zm-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48-152a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm104 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"></path>
      </svg>
    ),
    tags: [
      {
        name: 'React',
        link: 'https://react.dev/',
      },
      {
        name: 'useState',
        link: 'https://react.dev/reference/react/useState',
      },
      {
        name: 'useEffect',
        link: 'https://react.dev/reference/react/useEffect',
      },
      {
        name: 'Redux',
        link: 'https://redux.js.org/',
      },
      {
        name: 'React Leaflet',
        link: 'https://react-leaflet.js.org/',
      },
      {
        name: 'React Router',
        link: 'https://reactrouter.com/en/main',
      },
      {
        name: 'JSONBin.io',
        link: 'https://jsonbin.io/',
      },
    ],
  },
  {
    title: 'Fitness',
    link: 'https://spawn2k.github.io/gh-fitness/',
    level: 5,
    react: false,
    date: '08 - 2023',
    description: 'Fitness Website mit on scroll reveal,Parallax effect, Svg draw on scroll. Der schwierige part war die logik, path im synch zu halten da path länge nicht linear verläuft. Leider noch keine Ahnung wie svg responsive zu machen 😢. Problem ist sobald viewport verkleinert wird muss an verschiedenen stellen path länge verändert werden.',
    icon: (<svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.2739 9.86883L16.8325 4.95392L18.4708 3.80676L21.9122 8.72167L20.2739 9.86883Z" fill="currentColor"></path><path d="M18.3901 12.4086L16.6694 9.95121L8.47783 15.687L10.1985 18.1444L8.56023 19.2916L3.97162 12.7383L5.60992 11.5912L7.33068 14.0487L15.5222 8.31291L13.8015 5.8554L15.4398 4.70825L20.0284 11.2615L18.3901 12.4086Z" fill="currentColor"></path><path d="M20.7651 7.08331L22.4034 5.93616L21.2562 4.29785L19.6179 5.445L20.7651 7.08331Z" fill="currentColor"></path><path d="M7.16753 19.046L3.72607 14.131L2.08777 15.2782L5.52923 20.1931L7.16753 19.046Z" fill="currentColor"></path><path d="M4.38208 18.5549L2.74377 19.702L1.59662 18.0637L3.23492 16.9166L4.38208 18.5549Z" fill="currentColor"></path></svg>),
    tags: [
      {
        name: 'onScroll',
        link: 'https://www.youtube.com/watch?v=r1wDGIKmX6s&ab_channel=Codehal',
      },
      {
        name: 'onScroll Svg',
        link: 'https://www.youtube.com/watch?v=FJ44qmE5odc&ab_channel=DesignCourse',
      },
      {
        name: 'Svg chronologically',
        link: 'https://stackoverflow.com/questions/32982539/how-to-scroll-draw-each-svg-path-one-at-a-time-chronologically',
      },
    ]
  },
  {
    title: 'Japan',
    link: 'https://spawn2k.github.io/gh_tokyo/',
    level: 4,
    react: false,
    date: '09 - 2023',
    description: 'Welcome to Japan 😊. Diesmal ein größeres Projekt mit vielen verscheidenen Elementen. Im header onLoad mit css Keyframes. Position des Bildes kann man mit der Maus auf der X achse verändern. Intersection Observer wurden an manchen Stellen verwendet. Parallel effect sowohl horizontal als auch vertikal. Positionierung von den Elementen wurden Hauptsächlich mit Grid umgesetzt',
    icon: (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336.375 22.123c.747 27.58 3.127 51.431-1.747 70.892h-20.54c-12.376 22.876-11.185 40.564-2.362 55.333l16.002-8.366c2.867-9.458-28.632-22.734 14.187-27.753 5.796 2.848 20.874 9.41 39.09 17.227 3.817-34.507 26.088-36.795 47.47-45.863l-14.343-29.667c-35.396 14.004-55.536-16.018-77.757-31.803zm4.879 127.87c-11.753 1.278-18.274 7.788-23.853 15.24-5.893 21.864-.11 43.726 1.325 65.59l-37.102 61.617c-21.8 17.135-20.912-.866-23.666-11.705-18.465 18.51-15.916 40.93-24.037 60.733l-68.241 5.963-54.99 45.715 32.795 13.25 6.294-13.913 48.365-19.875 19.215.661 1.986 21.202 14.576 17.227 33.127-29.815-8.613-17.889c16.54-9.194 16.06 3.64 23.19 6.626l16.998-6.808 7.994-14.583 6.718 12.634 13.5-23.52 13.34 13.01 15.654-25.787 13.13-123.6zM190.857 382.877l-11.263 12.258-14.576-1.325-15.405 20.208 14.742 20.868 33.127-18.55 15.9-20.54c-4.955-8.08-11.457-14.096-22.525-12.92zm-77.518 20.208c-10.171 4.3-20.488 7.123-29.813 19.877l24.514 20.538c-9.749 12.92-6.887 25.838-7.62 38.758l16.895 7.62 15.239-11.263c-2.385-18.249 3.108-35.186 11.263-51.68l-6.626-13.25z"></path></svg>),
    tags: [
      {
        name: 'Horizontal Slider',
        link: 'https://www.youtube.com/watch?v=PkADl0HubMY&t=22s&ab_channel=Hyperplexed',
      },
      {
        name: 'Clip path',
        link: 'https://www.plantcss.com/',
      },
      {
        name: 'CSS Card Effekt',
        link: 'https://www.youtube.com/watch?v=M4LkYnhMKIM&ab_channel=UnleashedDesign',
      },
      {
        name: 'CSS Card Effekt',
        link: 'https://www.youtube.com/watch?v=M4LkYnhMKIM&ab_channel=UnleashedDesign',
      },
      {
        name: 'Intersection Observer API',
        link: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API',
      },
      {
        name: 'Web Animations API',
        link: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API',
      },
     
    ]
  },
  {
    title: 'Amazing Coffee',
    link: 'https://spawn2k.github.io/gh_amazing_cafe/',
    level: 2,
    react: false,
    date: '09 - 2023',
    description: 'Schönes Projekt aus den Webdesign Kurs. Gute Übung für responsive ',
    icon: (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" ><path d="M6 18a6.06 6.06 0 0 0 5.17-6 7.62 7.62 0 0 1 6.52-7.51l2.59-.37c-.07-.08-.13-.16-.21-.24-3.26-3.26-9.52-2.28-14 2.18C2.28 9.9 1 15 2.76 18.46z"></path><path d="M12.73 12a7.63 7.63 0 0 1-6.51 7.52l-2.46.35.15.17c3.26 3.26 9.52 2.29 14-2.17C21.68 14.11 23 9 21.25 5.59l-3.34.48A6.05 6.05 0 0 0 12.73 12z"></path></svg>),
    tags: [
      {
        name: 'Webdesign Kurs',
        link: '',
      },
      {
        name: 'Responsive',
        link: '',
      },
     
    ]
  },
  {
    title: 'Tabs',
    link: 'https://spawn2k.github.io/js-active-link/tab',
    level: 3,
    react: false,
    date: '09 - 2023',
    description: 'Tab functionalität mit video function. Der schwierige part war die anpassung des hintergrund and die größe des inhalts.',
    icon: (<svg height="1em" width="1em" viewBox="-2.5 0 18 18">
        <g id="Page-1" stroke="currentColor" strokeWidth="1" fill="currentColor" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-343.000000, -760.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M298.479989,610.79211 L293.68268,610.399562 L293.674903,605.424658 C293.674903,605.076493 293.34938,604.438356 292.559457,604.438356 C291.946183,604.438356 291.44401,604.880219 291.44401,605.424658 L291.44401,613.803288 L290.518545,612.627616 C290.126361,612.132493 289.328661,612.070356 288.846486,612.498411 C288.472078,612.831781 288.419861,613.355507 288.722054,613.742137 L291.120709,617.697205 C291.328466,617.964493 291.670655,618 292.036175,618 L297.407872,618 C298.467768,618 299.379902,617.459507 299.587659,616.538301 L299.956512,612.988603 C300.17649,612.013151 299.543219,611.10674 298.479989,610.79211 M288.111003,607.39726 C287.497729,607.39726 287,606.956384 287,606.410959 L287,605.178082 C287,598.273973 298.110026,598.273973 298.110026,605.178082 L298.110026,606.410959 C298.110026,606.956384 297.612296,607.39726 296.999023,607.39726 C296.38575,607.39726 295.888021,606.956384 295.888021,606.410959 L295.888021,605.178082 C295.888021,601.232877 289.222005,601.232877 289.222005,605.178082 L289.222005,606.410959 C289.222005,606.956384 288.724276,607.39726 288.111003,607.39726" id="tap_click_force_touch-[#1383]">

</path>
            </g>
        </g>
    </g>
</svg>),
    tags: [
      {
        name: 'Tab Animation',
        link: 'https://lokeshdhakar.com/dev-201-stripe.coms-main-navigation/',
      },
      {
        name: 'Epic Slider',
        link: 'https://www.youtube.com/watch?v=9VzQO_kHN2A&ab_channel=UnleashedDesign',
      },
     
    ]
  },
];


projekts.sort((a,b) => {
  return a.date < b.date ? 1: a.date > b.date ? -1: 0

})
export default projekts;

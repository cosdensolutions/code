# React Developer Roadmap (2024)

A comprehensive React developer roadmap for 2024 covering every aspect of React and beyond.

## 1. React Fundamentals

You should know and be comfortable with **all of the following:**

- **JSX**
  - [How to write JSX](https://react.dev/learn/writing-markup-with-jsx)
  - How to conditionally render elements
  - How to loop over items
  - [Adding Javascript in JSX](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- **Components**
  - [How to create components](https://react.dev/learn/your-first-component)
  - Component lifecycle (mount, update, unmount)
  - The different types of components
    - UI components (buttons, inputs, cards, etc)
    - Feature components (`SignInForm`, `ProductsFilters`, etc.)
    - Page components (`SignInPage`, `ProductsPage`, etc.)
    - How to split larger components into smaller ones ([example 1](https://youtu.be/PisA-OPisUY), [example 2](https://youtube.com/shorts/OwXQd6YOySg))
- **Props**
  - [How to pass data through props](https://react.dev/learn/passing-props-to-a-component)
  - How components re-render when props change
  - [Prop drilling and why to avoid it](https://dev.to/codeofrelevancy/what-is-prop-drilling-in-react-3kol)
- **Events**
  - [How to react to inputs](https://react.dev/learn/reacting-to-input-with-state)
  - [Understanding React events (buttons, inputs)](https://www.knowledgehut.com/blog/web-development/handling-react-events-guide)

## 2. Working With Hooks

You should know and have worked with **all of the following hooks:**

- [**useState**](https://youtu.be/V9i3cGD-mts)
  - How to create and update state
  - How state updates trigger re-renders
  - [Setting state using updater functions](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state)
- [**useEffect**](https://youtu.be/-4XpG5_Lj_o)
  - Understanding the `useEffect` lifecycle (mount, update, cleanup)
  - How to correctly set the dependency array
  - [When not to use `useEffect`](https://youtube.com/shorts/cKFqwy5PThk)
- [**useCallback**](https://youtu.be/MxIPQZ64x0I)
  - When to use `useCallback`
  - [How `useCallback` prevents unnecessary re-renders](https://react.dev/reference/react/useCallback#skipping-re-rendering-of-components)
  - [How to correctly set the dependency array](https://react.dev/reference/react/useCallback#parameters)
- [**useMemo**](https://youtu.be/vpE9I_eqHdM)
  - When to use `useMemo`
  - [How `useMemo` prevents unnecessary calculations](https://react.dev/reference/react/useMemo#skipping-expensive-recalculations)
  - [How `useMemo` prevents re-rendering of components](https://react.dev/reference/react/useMemo#skipping-re-rendering-of-components)
  - [How to correctly set the dependency array](https://react.dev/reference/react/useMemo#parameters)
- [**useRef**](https://youtu.be/42BkpGe8oxg)
  - [How to manipulate the DOM with a ref](https://react.dev/reference/react/useRef#manipulating-the-dom-with-a-ref)
  - [Referencing a value with a ref](https://react.dev/reference/react/useRef#referencing-a-value-with-a-ref)
  - The difference between `useRef` and `useState`
- [**useContext**](https://youtu.be/HYKDUF8X3qI)
  - [How to create a context through `createContext`](https://react.dev/reference/react/useContext#passing-data-deeply-into-the-tree)
  - How to create a provider component
  - How to access context through `useContext`

## 3. Implementing Features

You should be able to implement **some of the following features:**

- **Client-Side Routing**
  - [Using React Router](https://reactrouter.com/en/main)
  - [Bundle splitting and lazy-loading per route](https://reactrouter.com/en/main/route/lazy)
  - [Using `lazy` from React](https://react.dev/reference/react/lazy)
- [**Data Fetching**](https://youtu.be/00lxm_doFYw)
  - Understanding how to fetch data with `useEffect` (loading, errors, caching, race conditions)
  - [Using Tanstack Query](https://tanstack.com/query/latest)
- [**Forms**](https://www.w3schools.com/react/react_forms.asp)
  - How to validate user input in forms (emails, passwords, etc.)
  - How to send form data to server
  - How to handle file uploads
  - [Using React Hook Form](https://react-hook-form.com/)
  - [Using Formik](https://formik.org/docs/overview)
- **State Management**
  - [Using Redux with Redux Toolkit](https://redux-toolkit.js.org/)
  - [Using Zustand](https://github.com/pmndrs/zustand)
  - [Using Jotai](https://jotai.org/)
- **Authentication**
  - How to handle user sign in
  - How to handle access tokens and token refreshes
  - Social sign in (Google, Facebook, GitHub, etc.)
  - [Using Supabase](https://supabase.com/)
  - [Using Firebase](https://firebase.google.com/docs/auth)
  - [Using Clerk](https://clerk.com/)
- [**Accessibility**](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - Understanding why accessibility is important
  - Using semantic HTML
  - How to implement keyboard navigation
  - How to add aria labels
  - [Using React Aria](https://react-spectrum.adobe.com/react-aria/)
- **Testing**
  - [How to implement e2e integration tests](https://youtu.be/6BkcHAEWeTU)
    - [Using Cypress](https://www.cypress.io/)
    - [Using Playwright](https://playwright.dev/)

## 4. Styling Solutions

You should be familiar with **some of the following styling solutions**:

- [**Tailwind**](https://tailwindcss.com/)
- [**CSS Modules**](https://www.makeuseof.com/react-components-css-modules-style/)
- [**Styled Components**](https://styled-components.com/)
- [**Material UI**](https://mui.com/)
- [**Chakra UI**](https://chakra-ui.com/)
- [**Ant Design**](https://ant.design/docs/react/introduce)

## 5. React Frameworks

You should have worked with **one of the following:**

- [**Vite**](https://vitejs.dev/)
  - How to run a simple React application
- [**Next.js**](https://nextjs.org/)
  - [Understanding file-based routing](https://nextjs.org/docs/app/building-your-application/routing)
  - [Understanding server components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
  - [Understanding server actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [**Remix**](https://remix.run/)

## 6. Beyond React

You should have **all of the following qualities**:

- **Teamplayer**
  - How to work within a team
  - How to perform code reviews
  - How to give and receive feedback
- **Efficiency**
  - How to prioritise tasks
  - How to handle tech debt
  - How to meet deadlines and goals
- **Continuous Learning**
  - How to continuously learn and grow
  - How to stay up to date with your skills
- **Networking**
  - Going to meetups or events
  - Contributing to open source projects
  - Networking within the company you work in

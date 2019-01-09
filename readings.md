https://www.fullstackreact.com/articles/redux-with-mark-erikson/

Why use redux:
    - Predictable state updates make it easier to understand how the data flow works in the application
    - The use of "pure" reducer functions makes logic easier to test, and enables useful features like "time-travel debugging".
    - Centralizing the state makes it easier to implement things like logging changes to the data, or persisting data between page refreshes
    - Single source-of-truth of the data throughout an application
    - Passing props down the application can become confusing to trace. It also makes it harder to move components around because there is a coupling between the components and their parents
    - Props need to passed through components/functions that don't use them
    - All data in an application follows the same lifecycle pattern, making the logic of your app more predictable and easier to understand
    - Better performance by comparing references instead of properties
    - Easier maintenance: all state altering actions in one place
    - Predictable: Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
    - Centralized: Centralizing your application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more.
    - Debuggable: The Redux DevTools make it easy to trace when, where, why, and how your application's state changed. Redux's architecture lets you log changes, use "time-travel debugging", and even send complete error reports to a server.
    - Flexible: Redux works with any UI layer, and has a large ecosystem of addons to fit your needs.
    <!-- - Better performance as  -->

Considerations:
    - How much to store in the Redux store vs individual app
    - Callbacks vs observables
    - Passing new and old state to compare references
    - Using ngrx
    - Side effects (library)

https://blog.ng-book.com/introduction-to-redux-with-typescript-and-angular-2/

Principles:
    - State is never mutated directly
    - Reducer must be a pure function (must not use any data outside of its arguments)
    - A reducer does not change the state instead, it returns a new state.

Parts:
    - An Action, which defines what to do (with optional arguments)
    - The state, which stores all of the data in our application
    - The Reducer which takes the state and the Action and returns a new state.

https://www.youtube.com/watch?v=f97ICOaekNU
https://www.youtube.com/watch?v=owFiLgOqw_Y&index=10&list=PLW2eQOsUPlWJRfWGOi9gZdc3rE4Fke0Wv


Basics
    - Principles/Structure
    - Advantages
Patterns
    - Basic
    - Old VS New
    - Tools
    - Observables
    - Effects

https://toddmotto.com/ngrx-store-understanding-state-selectors

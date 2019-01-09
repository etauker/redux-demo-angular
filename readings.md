https://www.fullstackreact.com/articles/redux-with-mark-erikson/


Principles:
    - State is never mutated directly
    - Reducer must be a pure function (must not use any data outside of its arguments)
    - A reducer does not change the state instead, it returns a new state.

Components:
    - An Action, which defines what to do (with optional arguments)
    - The state, which stores all of the data in our application
    - The Reducer which takes the state and the Action and returns a new state.

Advantages:
    - Centralised state management:
        - Single source-of-truth of the data throughout an application
        - Easier state sharing between different parts of the application
        - Easier to implement logging
    - Simplifies code:
        - Predictable state changes make behaviour more predictable / easier to understand
        - Properties don't need to be propagated through components/functions that don't use them
            - Tidier code, less coupling
        - Helps consistency across different environments (frontend/backend)
    - Easier debugging and maintenance:
        - All state "altering" actions defined in one place
        - Use of "pure" reducer functions
        - Makes time travel possible
        - Redux Dev Tools (https://github.com/zalmoxisus/redux-devtools-extension)


Considerations:
    - How much to store in the Redux store vs individual app
    - Callbacks vs observables
    - Passing new and old state to compare references
    - Using ngrx
    - Side effects (library)

https://blog.ng-book.com/introduction-to-redux-with-typescript-and-angular-2/


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

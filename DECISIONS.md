# DECISIONS.md

## Architectural Decision

One decision I spent some time on was state management for the cart.

My first thought was to use Redux Toolkit since that's what I would normally reach for in a larger application. However, after looking at the requirements, the only shared state needed was the shopping cart and the cart drawer UI. Using Redux would have added extra setup and boilerplate without solving a real problem in this project.

I decided to use React Context API with a custom hook instead. It keeps the code easier to follow and was enough for the current scope. The cart logic lives in a single place and can be accessed from the product listing page, product detail page, navbar, and cart drawer without prop drilling.

I also chose to persist cart data in localStorage directly from the cart provider. This keeps the persistence logic close to the state it belongs to and allows the cart to survive page refreshes.

## What I Would Improve With More Time

The biggest compromise in this implementation is the product data itself. The Fake Store API does not provide product variants such as colors, sizes, stock levels, or sale prices, so some of the variant-related UI is simulated rather than being backed by real API data.

If I had more time, I would create a small mock backend or local dataset that better represents a real e-commerce catalog. That would make the variant selection and inventory states more realistic.

I would also add tests around the cart functionality, especially quantity updates, item removal, and persistence. These are areas that can easily break as features are added.

Another improvement would be extracting some of the cart and product logic into dedicated custom hooks. The current structure is clean for the size of this project, but moving more business logic out of components would improve maintainability as the application grows.

Overall, my focus was on building a responsive UI, keeping the component structure simple, and making sure the cart experience felt reliable and persisted correctly across page reloads.

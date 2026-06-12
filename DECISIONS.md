Architectural Decision :-

For cart state management, I considered using Redux Toolkit, but for this project it felt unnecessary. The only shared state is the cart, so I chose React Context API with a custom hook to keep the implementation simple and avoid extra boilerplate.

-----------------------------------------------------------

What I Would Improve With More Time :-

The main limitation is the Fake Store API. It doesn't provide product variants, stock levels, or sale pricing, so some e-commerce features had to be simplified.

With more time, I would use a richer mock dataset or backend to support real variants and inventory states. I would also add tests around cart operations and extract more business logic into custom hooks as the application grows.

I considered adding pagination, but since the API returns a small number of products, I decided to keep everything on a single page and focus on the overall user experience instead.
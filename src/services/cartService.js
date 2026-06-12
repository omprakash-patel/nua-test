export const addToCartApi = (product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.3; // 30% failure

      if (shouldFail) {
        reject(
          new Error(
            "Failed to add item to cart. Please try again."
          )
        );
      } else {
        resolve(product);
      }
    }, 1000);
  });
};
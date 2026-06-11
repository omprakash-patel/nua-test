import { X, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import useCart from "../../stores/useCart";
import styles from "../../styles/CartDrawer.module.scss";

const CartDrawer = ({
  isOpen,
  onClose,
}) => {
  const {
    cartItems,
    subtotal,
    grandTotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

const { cartCount } = useCart();
  return (
    <>
      <div
        className={`${styles.overlay} ${
          isOpen ? styles.show : ""
        }`}
        onClick={onClose}
      />

      <aside
        className={`${styles.drawer} ${
          isOpen ? styles.open : ""
        }`}
      >
        <div className={styles.header}>
  <div>
    <h2>Shopping Cart</h2>
    <span className={styles.itemCount}>
      {cartCount} {cartCount === 1 ? "item" : "items"}
    </span>
  </div>

  <button
    className={styles.closeButton}
    onClick={onClose}
    aria-label="Close cart"
  >
    <X size={20} />
  </button>
</div>

        <div className={styles.content}>
          {cartItems.length === 0 ? (
  <div className={styles.empty}>
    <ShoppingBag
      size={60}
      strokeWidth={1.5}
      className={styles.emptyIcon}
    />

    <h3>Your cart is empty</h3>

    <p>
      Looks like you haven't added
      anything to your cart yet.
    </p>

    <Link
          to="/"
      className={styles.shopButton}
      onClick={() => {
        onClose();
        navigate("/");
      }}
    >
      Continue Shopping
    </Link>
  </div>
) : (
            <>
              <div className={styles.items}>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className={styles.cartItem}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div
                      className={styles.details}
                    >
                      <h4>{item.title}</h4>

                      <p>
                        {item.color &&
                          `${item.color} • `}
                        {item.size}
                      </p>

                      <span>
                        $
                        {item.price.toFixed(
                          2
                        )}
                      </span>

                      <div
                        className={
                          styles.actions
                        }
                      >
                        <div
                          className={
                            styles.quantity
                          }
                        >
                          <button
                          disabled={item.quantity<=1}
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity -
                                  1
                              )
                            }
                          >
                            -
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity +
                                  1
                              )
                            }
                          >
                            +
                          </button>
                        </div>

                        <button
                          className={
                            styles.remove
                          }
                          onClick={() =>
                            removeFromCart(
                              item.id
                            )
                          }
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            <div className={styles.summary}>
  <div className={styles.summaryRow}>
    <span>Subtotal</span>
    <strong>${(subtotal || 0).toFixed(2)}</strong>
  </div>

  <div className={styles.summaryRow}>
    <span>Shipping</span>
    <span className={styles.freeShipping}>
      Free
    </span>
  </div>

  <div className={styles.divider} />

  <div className={styles.totalRow}>
    <span>Total</span>
    <strong>
      ${(grandTotal || 0).toFixed(2)}
    </strong>
  </div>

  <button className={styles.checkout}>
    Proceed to Checkout
  </button>

  <p className={styles.secureText}>
    🔒 Secure checkout
  </p>
</div>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;
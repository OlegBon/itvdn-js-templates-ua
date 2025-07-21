class ProductAvailabilityChecker {
  constructor() {
    this.availableProducts = ["Product A", "Product B", "Product C"];
  }

  checkAvailability(product) {
    return this.availableProducts.includes(product);
  }
}

class ShippingManager {
  constructor() {
    this.shippingMethods = ["Standard Shipping", "Express Shipping"];
  }

  processShipping(orderDetails) {
    console.log(
      `Shipping order for ${orderDetails.product} using ${orderDetails.shippingMethod}`
    );
    return true;
  }
}

class PaymentProcessor {
  processPayment(orderDetails) {
    console.log(
      `Processing payment for ${orderDetails.product} with amount $${orderDetails.amount}`
    );
    return true;
  }
}

class OrderFacade {
  constructor() {
    this.productAvailabilityChecker = new ProductAvailabilityChecker();
    this.shippingManager = new ShippingManager();
    this.paymentProcessor = new PaymentProcessor();
  }

  placeOrder(orderDetails) {
    if (
      !this.productAvailabilityChecker.checkAvailability(orderDetails.product)
    ) {
      console.log(`Product ${orderDetails.product} is not available.`);
      return false;
    }

    if (!this.paymentProcessor.processPayment(orderDetails)) {
      console.log("Payment processing failed.");
      return false;
    }

    if (!this.shippingManager.processShipping(orderDetails)) {
      console.log("Shipping processing failed.");
      return false;
    }

    console.log("Order placed successfully!");
    return true;
  }
}

// Приклад використання
const orderFacade = new OrderFacade();
const orderDetails = {
  product: "Product A",
  amount: 100,
  shippingMethod: "Standard Shipping",
};

orderFacade.placeOrder(orderDetails);

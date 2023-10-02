import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

   // Check if logo is loaded
   const logo = header.getAllByTestId("logo");
   expect(logo[0].src).toBe("http://localhost/dummy.png");

});

test("Online status should be ✔ on rendering header", () => {
    // Load Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
     // Check if online status is ✔
     const onlineStatus = header.getByTestId("online-status");
     expect(onlineStatus.innerHTML).toBe("<h1>✔</h1>");
  
  });

  test("cart items should be 0 on rendering header", () => {
    // Load Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
     // Check if cart items are 0
     const cart = header.getByTestId("cart");
     expect(cart.innerHTML).toBe("<a href=\"/cart\">Cart - 0 items</a>");
  
  });
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalProgressBar } from "components";
import Products from "containers/Product";
import ProductDetail from "containers/ProductDetail";
import createClient from "config/createClient";

function App() {
  return (
    <ApolloProvider client={createClient()}>
      <BrowserRouter>
        <GlobalProgressBar />

        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/product/:productId" component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

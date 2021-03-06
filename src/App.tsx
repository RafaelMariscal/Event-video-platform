import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import SidebarContextProvider from "./context/SidebarContextProvider";
import { client } from "./lib/apollo";
import { Router } from "./Router";

export function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <SidebarContextProvider>
          <Router />
        </SidebarContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard.Page";
import Account from "./components/pages/Account.Page";
import PageNotFound from "./components/pages/Notfound.Page";
import LoginForm from "./components/pages/LoginForm.Page";
import SignUpForm from "./components/pages/SignUpForm.Page";
import Pricing from "./components/pages/Pricing.Page";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>}></Route>
          <Route path="/pricing" element={<Layout><Pricing/></Layout>}></Route>
          <Route path="/account" element={<Layout><Account /></Layout>}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/signUp" element={<SignUpForm />}></Route>
          <Route path="/reset" element={<h1>reset</h1>}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

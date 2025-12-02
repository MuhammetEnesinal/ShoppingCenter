import { useState } from "react";
import MainLayout from "./components/MainLayout";
import AppRouter from "./AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <MainLayout>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <AppRouter />
    </MainLayout>
  );
}

export default App;

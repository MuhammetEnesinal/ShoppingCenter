import { useState } from "react";
import MainLayout from "./components/MainLayout";
import AppRouter from "./AppRouter";

function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}

export default App;

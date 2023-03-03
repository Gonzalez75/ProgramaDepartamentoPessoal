import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";

import "./App.css";
import { Crud } from "./Components/Crud";

export function App() {
  return (
    <>
      <Header></Header>
      <Crud></Crud>
      <Footer></Footer>
    </>
  );
}

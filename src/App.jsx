import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Form } from "./components/Form";
// import { Btn } from "./components/Btn";

export function App() {
  return (
    <div>
      <Header />
      <div id="Hero">
        <Hero />
      </div>
      <div id="Form">
        <Form />
      </div>
      {/* <Btn Text="teste" /> */}

      <Footer />
    </div>
  );
}

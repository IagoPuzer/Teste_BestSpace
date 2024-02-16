import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
// import { Btn } from "./components/Btn";

export function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="mx-auto max-w-6xl my-12 space-y-6">
        <form className="w-full">
          <input
            type="text"
            placeholder="Busque em suas notas..."
            className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
          />
        </form>

        <div className="h-[1px] bg-slate-700" />

        <div className="grid grid-cols-3 auto-rows-[250px] gap-6"></div>
      </div>
      <img src="./assets/banner-novo.png" alt="" className="z-20" />
      {/* <Btn Text="teste" /> */}
      <div id="Footer">
        <Footer />
      </div>
    </div>
  );
}

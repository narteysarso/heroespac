import {
  NavBar,
  Header,
  Footer,
  About,
  Products,
  About1,
  About2,
} from "../components/main";


export default function Home() {
  return (
    <>
      <div className="">
        <NavBar />
        <Header />
        <About />
        <Products />
        <About1 />
        <About2 />
        <Footer />
      </div>
    </>
  );
}

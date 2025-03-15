import { NavBar, Header, OurProds, Footer,  } from "../components/Prods";

function Products() {
  return (
    <>
      <div className="">
        <NavBar />
        <Header />
        <OurProds />
        {/* <Prods /> */}
        <Footer />
      </div>
    </>
  );
}

export default Products;

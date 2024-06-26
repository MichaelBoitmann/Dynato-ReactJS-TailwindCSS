import Nav from './components/Nav';
import { 
  CustomerReviews,  
  Hero, 
  PopularProducts, 
  Services, 
  SpecialOffer, 
  Subscribe, 
  SuperQuality,
  Footer, 
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding ">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full ">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8 padding font-white">
        <Footer />
      </section>
    </main>
  )
}

export default App
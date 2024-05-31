import Header from "@/modules/Header";
import Hero from "@/modules/Hero";

const Home = () => {
  return (
    <div className="w-full">
      <header className="absolute top-10 w-full right-0 left-0 z-20 2xl:max-container max-2xl:px-16 max-lg:px-8 max-sm:px-4">
        <Header />
      </header>

      <main>
        <section className="2xl:max-container max-2xl:px-16 max-lg:px-8 max-sm:px-4">
          <Hero />
        </section>

        <section className="padding-y">Popular Products</section>
        <section className="padding-y">Super Quality</section>
        <section className="sm:py-12 py-4">Services</section>
        <section className="padding-y">Special</section>
        <section className="padding-y">Customers</section>
        <section className="padding-y">Updates</section>
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Home;

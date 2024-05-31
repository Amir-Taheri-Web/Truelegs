import Header from "@/modules/Header";

const Home = () => {
  return (
    <div className="max-container">
      <header>
        <Header />
      </header>

      <main>
        <section className="padding-y">Hero</section>
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

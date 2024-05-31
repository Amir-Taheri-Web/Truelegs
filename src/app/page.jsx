import Header from "@/modules/Header";

const Home = () => {
  return (
    <div className="2xl:max-container max-2xl:px-16 max-lg:px-8 max-sm:px-4">
      <header className="relative top-8 w-full">
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

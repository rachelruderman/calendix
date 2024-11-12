import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="text-center mt-28">
        <p className="text-gray-600 ">Trusted by these companies</p>
        <div className="flex gap-8 *:h-6 mt-6 justify-center">
          <img src="/" alt="Company" />
          <img src="/" alt="Company" />
          <img src="/" alt="Company" />
          <img src="/" alt="Company" />
        </div>
      </section>
    </>
  );
}

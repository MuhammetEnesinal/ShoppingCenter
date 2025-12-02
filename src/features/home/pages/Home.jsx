import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import FeaturedCategories from "../components/FeaturedCategories";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <Benefits />
      <FeaturedCategories />
      <Newsletter />
    </div>
  );
}

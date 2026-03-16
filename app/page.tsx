import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import CategoryCard from "../components/CategoryCard"
import FeaturedProducts from "../components/FeaturedProducts"
import Benefits from "../components/Benefits"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <CategoryCard/>
      <FeaturedProducts/>
      <Benefits/>
      <Footer/>
    </main>
  )
}
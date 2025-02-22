import ContactForm from "@/components/landing/contact"
import UpcomingEvents from "@/components/landing/events"
import Footer from "@/components/landing/footer"
import HeroSection from "@/components/landing/hero"
import AnimalImages from "@/components/landing/images"
import CardInfo from "@/components/landing/info"
import Numbers from "@/components/landing/number"
import SpeciesOfWeek from "@/components/landing/species"

const LandingPage = () => {
  return (
    <div>
      <img src="./bgtexture.svg" className="repeat-infinite w-full absolute -z-20"/>
        <div className="min-h-screen w-full">
          <HeroSection />
          <Numbers />
          <AnimalImages />
          <SpeciesOfWeek />
          <CardInfo />
          <UpcomingEvents />
          <ContactForm />
          <Footer />
        </div>
    </div>
  )
}

export default LandingPage

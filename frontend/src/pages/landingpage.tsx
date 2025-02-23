import ContactForm from "@/components/landing/contact"
import UpcomingEvents from "@/components/landing/events"
import HeroSection from "@/components/landing/hero"
import AnimalImages from "@/components/landing/images"
import CardInfo from "@/components/landing/info"
import Numbers from "@/components/landing/number"
import SpeciesOfWeek from "@/components/landing/species"
import HoverExpandGallery from "@/components/landing/imgexpand"

const LandingPage = () => {
  return (
    <div>
      <div className="min-h-screen w-full">
        <div
          className="min-h-screen w-full bg-cover bg-repeat"
          style={{ backgroundImage: "url('/bgtexture.svg')" }}
        >
          <HeroSection />
          <Numbers />
        </div>
        <AnimalImages />
        <SpeciesOfWeek />
        <CardInfo />
        <UpcomingEvents />
        <HoverExpandGallery />
        <ContactForm />
      </div>
    </div>
  )
}

export default LandingPage

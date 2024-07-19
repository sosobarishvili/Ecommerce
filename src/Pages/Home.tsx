import EarphonesSection from "../Components/Earphones-section/EarphonesSection"
import Gear from "../Components/Gear/Gear"
import Hero from "../Components/Hero/Hero"
import ProductsSection from "../Components/Products-section/Products-section"
import SecondSpeaker from "../Components/Second-speaker/SecondSpeaker"
import SpeakerSection from "../Components/Speaker-section/SpeakerSection"


const Home = () => {
  return (
    <div>
      <Hero />
      <ProductsSection />
      <SpeakerSection />
      <SecondSpeaker />
      <EarphonesSection />
      <Gear />
    </div>
  )
}

export default Home
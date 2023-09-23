import { useThemeContext } from "../context/theme"
import Card1 from "./Card1"
import Card2 from "./Card2"

const Banner = () => {
    const {theme}=useThemeContext()
  return (
    <section className="h-5/6">
       <div className="lg:max-w-5xl mx-auto rounded-xl shadow-md 
       overflow-hidden md:max-w-2xl h-full">
  <div className="md:flex h-full">
    <Card1/>
<div className={`md:shrink-0 ${!theme?"bg-orange-600":"bg-blue-600"} `}>
      <img className=" object-cover md:h-full md:w-48 lg:w-96 lg:mx-4" 
      src="/src/assets/pngegg.png" 
      alt="Modern building architecture"/>
    </div>
    <Card2/>

  </div>
</div>
</section>
  )
}

export default Banner
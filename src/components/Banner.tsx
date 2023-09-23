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
    {/* <div className="p-8 bg-slate-300">
      <div 
      className="uppercase tracking-wide text-sm text-indigo-500
       font-semibold">
        Company retreats
        </div>
      <a href="#" 
      className="block mt-1 text-lg leading-tight 
      font-medium text-black hover:underline">
        Incredible accommodation for your team
        </a>
      <p className="mt-2 text-slate-500">
        Looking to take your team away on a retreat to enjoy awesome 
        food and take in some sunshine? We have a list of places to do just that.
        </p>
    </div> */}
  </div>
</div>
</section>
  )
}

export default Banner
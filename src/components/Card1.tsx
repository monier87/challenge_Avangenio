import { useThemeContext } from "../context/theme"

const Card1 = () => {
    const {theme}=useThemeContext()
  return (
    <div className={`p-8 font-bold h-full rounded-l-lg
    ${theme?"text-gray-800 bg-slate-50":" bg-gray-800 text-white"}
     `}>
      <h1 
      className=" flex flex-col pt-12 tracking-wide text-5xl">
        start <br/><br/> streaming <br/><br/> games <br/><br/>differently
    </h1>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
      <p className="my-10 text-slate-500">
       gamor now has stream party plaform
        </p> 
        <div className="flex gap-4">
        <button className={`rounded-full bg-gray-800 border-white
          ${theme?"text-gray-800":" bg-gray-600 text-white"}
         text-white py-4 px-4 shadow-lg`}>Create account
         </button>
         <button className={`${theme?"text-gray-800 bg-white":" bg-gray-800 text-white"}`}>Sign In</button>
        </div>
    </div>
  )
}

export default Card1
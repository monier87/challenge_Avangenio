import ItemCard from "./ItemCard";

const categories=[
    {
    id:"01",
    title:"Action Games"
},  {
    id:"02",
    title:"Sports Games"
},  {
    id:"03",
    title:"Adventure Games"
},  {
    id:"04",
    title:"Arcade Games"
},  {
    id:"05",
    title:"Fantasy Games"
},  {
    id:"06",
    title:"Strategy Games"
},  {
    id:"07",
    title:"Shooter Games"
},  {
    id:"View All",
    title:"All Categories"
},
]


const Categories = () => {
  return (
    <div className=" pt-8 flex flex-col justify-start">
      <h1 className="pl-32 text-xl font-bold dark:text-white">Trending Categories</h1>

      
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 pt-16 mx-36 ">
            {categories.map(item=>(
                <ItemCard data={item} />
            ))}
      
       
      </div>
      
    </div>
  );
};

export default Categories;

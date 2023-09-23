import { useThemeContext } from "../context/theme";

interface ItemCardProps {
  data: {
    id: string;
    title: string;
  };
}

const ItemCard = ({ data }: ItemCardProps) => {
  const { id, title } = data;
  const { theme, setTheme } = useThemeContext();

  if (parseInt(id) == 7) {
    return (
      <div className={`rounded-xl font-semibold ${theme ? "text-white ":" bg-gray-800"} `} >

<div className="bg-red-300 relative ">
  <img className="object-fill rounded-xl absolute h-[185px] w-96 opacity-50 "
   src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" 
   />
</div>

        <div
          className={` absolute p-10  flex flex-col gap-4
              ${!theme && "text-white font-semibold "} `}
        >
          <h4>{id}</h4>
          <p>{title}</p>
          ➡️
        </div>
      </div>
    );
  }

  return (
  

    <div
      className={`p-10 rounded-xl flex flex-col gap-4
        ${!theme ? " bg-gray-800 text-white font-semibold ":" bg-white"} `}
    >
      <h4>{id}</h4>
      <p>{title}</p>
      ➡️
    </div>
  
  );
};

export default ItemCard;

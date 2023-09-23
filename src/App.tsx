// import './App.css'
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import { useThemeContext } from "./context/theme";

function App() {
  const { theme } = useThemeContext();

  return (
    <div
      className={`${
        theme ? "bg-gray-200" : " dark:bg-gray-900"
      } py-4 sm:py-12 `}
    >
      <Navbar />
      <Banner />
      <Categories />


    </div>
  );
}

export default App;

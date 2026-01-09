import Card from "./components/Card";
import { data } from "./data/data";
import img from "./assets/imgbg01.jpg"

function App(){

  return (
    <div className="bg-stone-800 text-white min-h-screen relative">
      <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover"/>
      <h1 className="font-work2 text-center py-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-sky-700 relative">User's List</h1>

      <div className="flex flex-wrap gap-6 justify-center relative sm:gap-8 lg:gap-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60
        pb-10">
        {
          data.map((item) => { 
            return(
              <div key={item.id}>
                <Card item={item}/>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;


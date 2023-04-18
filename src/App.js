import { Route, Routes, NavLink } from "react-router-dom"
import cn from "classnames"
import Menu from "./pages/Menu"
import Orders from "./pages/Orders"
const nav = [
  {
    path: "/orders",
    label: "Orders"
  },
  {
    path: "/",
    label: "Menu"
  },
]
function App() {
  return (
    <div className="App w-full min-h-screen overflow-hidden bg-black text-white text-sm flex gap-6 px-3 lg:px-0">
      {/* Sidebar */}
      <div className="fixed grow-0 shrink-0 w-[80px] md:w-[200px] md:pl-10 text-center md:text-left pt-6">
        <h1 className="font-semibold md:text-xl text-center mb-6">CosyPOS</h1>
        <nav>
          <ul className="flex flex-col gap-3 text-gray-100">
            {nav.map((item,i) => (
              <NavItem key={i} item={item} />
            ))}
          </ul>
        </nav>
      </div>
      <div className="pl-[105px] md:pl-[225px] w-full">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
      
    </div>
  );
}

function NavItem({item}) 
{
  console.log(item.path);
  const isActive = window.location.pathname ===  item.path
  return <>
    <li >
      <NavLink to={item.path} className={({isActive }) =>
        isActive ? 'bg-gray text-white rounded-md px-4 py-2.5 font-medium block' : 'px-4 py-2.5 font-medium block'
      }>

        <span className="block md:hidden">icon</span>
        <span className="hidden md:block">{item.label}</span>
      </NavLink>
    </li>
  </>
}
export default App;

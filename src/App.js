import { Route, Routes, Link } from "react-router-dom"
import cn from "classnames"
import Menu from "./pages/Menu"
import Orders from "./pages/Orders"
const nav = [
  {
    path: "/reservation",
    label: "Reservation"
  },
  {
    path: "/tables",
    label: "Table service"
  },
  {
    path: "/",
    label: "Menu"
  },
  {
    path: "/delivery",
    label: "Delivery"
  },
]
function App() {
  return (
    <div className="App w-screen min-h-screen bg-black text-white text-sm flex gap-6 pt-6">
      {/* Sidebar */}
      <div className="grow-0 shrink-0 w-1/5 pl-10">
        <h1 className="font-semibold text-xl text-center mb-6">CosyPOS</h1>
        <nav>
          <ul role={"list"} className="flex flex-col gap-3 text-gray-100">
            {nav.map((item,i) => (
              <NavItem key={i} item={item} />
            ))}
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

function NavItem({item}) 
{
  const isActive = window.location.pathname ===  item.path
  return <>
    <li className={cn('px-4 py-2.5 font-medium', {'bg-gray text-white rounded-md' : isActive})}>
      <Link to={item.path}>
        {item.label}
      </Link>
    </li>
  </>
}
export default App;

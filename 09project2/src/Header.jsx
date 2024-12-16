import react from "react"
import { NavLink } from "react-router-dom"

function Header(){
    return(
        <>
        <div className="w-full items-center h-[110px] flex flex-wrap flex-row justify-around  bg-gray-600">
            <div className="w-[140px] h-[90px] border-[1px] bg-yellow-400 hover:bg-yellow-600 rounded-lg p-3 ">
                 <NavLink
                to="/"
                    className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} text-gray-700  hover:text-orange-700 `
                }> 
                Home
                </NavLink>
            </div>
            
            <div className="w-[140px] h-[90px] border-[1px] bg-yellow-400 hover:bg-yellow-600 rounded-lg p-3 ">
                 <NavLink
                 to="/customer"
                
                    className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} text-gray-700  hover:text-orange-700 `
                }> 
                Customer
                </NavLink>
            </div>
            <div className="w-[140px] h-[90px] border-[1px] bg-yellow-400 hover:bg-yellow-600 rounded-lg p-3 overflow-hidden ">
                 <NavLink
                to="/order"
                    className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} text-gray-700  hover:text-orange-700 `
                }> 
                Order
                </NavLink>
            </div>
            <div className="w-[140px] h-[90px] border-[1px] bg-yellow-400 hover:bg-yellow-600 rounded-lg p-3 ">
                 <NavLink
                to="/bill"
                    className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} text-gray-700  hover:text-orange-700 `
                }> 
                Bill
                </NavLink>
            </div>
            <div className="w-[140px] h-[90px] border-[1px] bg-yellow-400 hover:bg-yellow-600 rounded-lg p-3 ">
                 <NavLink
                to="/payment"
                    className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} text-gray-700  hover:text-orange-700 `
                }> 
                Payment
                </NavLink>
            </div>
        </div>
        </>
    )
}

export default Header
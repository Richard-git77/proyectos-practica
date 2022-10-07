import {  NavLink, useNavigate } from "react-router-dom"

export const Navbar = () => {










  return (
         <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4">

        <div className="navbar-nav">

            <NavLink className='nav-item nav-link' to='Principal'>Game seeker</NavLink>
            <NavLink className='nav-item nav-link' to='sortByCategory'>Sort By Category</NavLink>
            <NavLink className='nav-item nav-link' to='SortByName'>Sort By Name</NavLink>


            
        </div>





         </nav>   
    
  )
}

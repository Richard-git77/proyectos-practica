import { Navigate, Route, Routes } from "react-router-dom"
import { SortByName,Principal, SortByCategory} from '../components'
import { Navbar } from "../components/Navbar"




export const AppRouter = () => {
  return (
    <>
    
    <Navbar/>


    <div className="container">
    <Routes>
        <Route path="sortByCategory" element={<SortByCategory/>}/>
        <Route path='sortByName' element={<SortByName/>}/>
        <Route path='Principal' element={<Principal/>}/>
        <Route path='/*' element={<Navigate to='/AppRouter'/>}/>
        
    </Routes>
    </div>
    </>
  )
}


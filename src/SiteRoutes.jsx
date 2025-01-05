import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Taskpage from "./pages/Taskpage";

export default function SiteRoutes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/list' element={<Taskpage />} />
                </Routes>
            </Router>
        </>
    )
}
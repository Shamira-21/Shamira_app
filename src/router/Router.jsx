import {Routes, Route} from 'react-router'
import Home from '../pages/Home'
import Reviews from '../pages/Reviews'
import MainLayout from '../layouts/MainLayout'
import Services from '../pages/Services'


function Router() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/"element={<Home />} />
                <Route path="/services"element={<Services />} />
                <Route path="/reviews"element={<Reviews />} />
            </Route>
        </Routes>
    )
}

export default Router


import './app.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Registration from "./pages/registration/Registration";
import RegTest from "./pages/reg-test/RegTest";
import SignIn from "./pages/login/Login";



function App() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<SignIn/>}></Route>
            <Route path='/registration' element={<Registration/>}></Route>
            <Route path='/test' element={<RegTest/>}></Route>
        </Routes>
    );
}

export default App;

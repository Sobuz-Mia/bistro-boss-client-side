import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            This is main layout
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;
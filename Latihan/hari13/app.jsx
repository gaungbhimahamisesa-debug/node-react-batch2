import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CRUDAxios from "./pages/CRUDAxios";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <CRUDAxios></CRUDAxios>
         </>
    )
}

export default App;
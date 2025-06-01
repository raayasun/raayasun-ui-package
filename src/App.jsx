import {useState} from 'react'
import {CardButton} from "./index.js";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
function App() {
    return (
        <>
            <BrowserRouter>
               <div className={"row"}>
                   <div className={"col-2 mt-3 me-3"}>
                       <CardButton title={"دامداری من"} imageUrl={"/img/svg.svg"}/>
                   </div>
               </div>
            </BrowserRouter>
        </>
    );
}

export default App

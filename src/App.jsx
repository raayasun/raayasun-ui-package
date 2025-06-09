import {useState} from 'react'
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import SomeBtn from "./components/Buttons/SomeBtn/SomeBtn.jsx";
import SomeBtnMini from "./components/Buttons/SomeBtnMini/SomeBtnMini.jsx";
import EventBtn from "./components/Buttons/EventBtn/EventBtn.jsx";
import Input from "./components/Inputs/FloatingInputs/Input.jsx";
import MainCard from "./components/Cards/MainCard.jsx";
import './style.css'
import {MainButton} from "./index.js";
function App() {
    return (
        <>
            <BrowserRouter>
              <div className={"container"}>
                  <div className={"row"}>
                      <div className={"col-2 mt-3 me-3"}>
                          <MainButton title={"دامداری من"} imageUrl={"/img/svg.svg"}/>
                      </div>
                      <div className={"col-12 mt-3"}>
                          <SomeBtn title={"دامداری من"} imageUrl={"/img/svg.svg"} iconUrl={"/img/arrow-left.svg"}
                                   subTitle={"سلام"}/>
                      </div>
                      <div className={"mt-4 "}>
                          <SomeBtnMini title={"دامداری من"} imageUrl={"/img/svg.svg"} iconUrl={"/img/arrow-left.svg"}/>
                      </div>
                      <div className={"mt-4 "}>
                          <EventBtn title={"دامداری من"} subTitle={"12345678"} date={"04-03-10 22:30"} bgColor={"info"}/>
                      </div>
                      <div className={"mt-4"}>
                      <MainCard>
                          <Input type={"text"} placeholder={"lichking.shadow@example.com"} label={"ایمیل"}/>
                          <Input type={"number"} placeholder={""} label={"شماره تلفن"}/>
                      </MainCard>
                      </div>
                  </div>
              </div>
            </BrowserRouter>
        </>
    );
}

export default App

import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import './style.css'
import {EventBtn, Input, MainButton, MainCard, PrimaryBtn, Radio, Select, SomeBtn, SomeBtnMini} from "./index.js";
import {useState} from "react";

function App() {
    const options = [
        {
            value: '1',
            name: 'amir'
        },
        {
            value: '2',
            name: 'ali'
        }
    ]

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
                            <SomeBtnMini title={"دامداری من"} imageUrl={"/img/svg.svg"}
                                         iconUrl={"/img/arrow-left.svg"}/>
                        </div>
                        <div className={"mt-4 "}>
                            <EventBtn title={"دامداری من"} subTitle={"12345678"} date={"04-03-10 22:30"}
                                      bgColor={"info"}/>
                        </div>
                        <div className={"mt-4"}>
                            <MainCard>
                                <Input type={"text"} placeholder={"lichking.shadow@example.com"} label={"ایمیل"}/>
                                <div className={"my-3"}>
                                    <Input type={"number"} placeholder={""} label={"شماره تلفن"}/>
                                </div>
                                <PrimaryBtn title={"ثبت"} type={"button"}/>
                            </MainCard>
                            <div className={"mt-3"}>
                                <Select label={"لیست بچه ها"} options={options}/>
                            </div>
                            <div className={"mt-3"}>
                                <Radio
                                    label="مرد"
                                    value="male"
                                    name="gender"

                                    />

                            </div>
                            <div className={"mt-3"}>
                                <Radio
                                    label="زن"
                                    value="female"
                                    name="gender"

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </>
);
}
export default App

import {console} from '../data/Console.js'
import {system} from '../data/System.js'
import panel from '../assets/panel.png'
import '../App.css'

function ScreenDevice() {

    return (
        <>
            <div
                className="screenprofil w-[792px] h-[405px] bg-gray-200 transform translate-x-[564px] translate-y-[165px]">
                <div className={"blockB    rounded-[12px]  flex-wrap justify-between pt-[29px] pl-[64px] gap-[7px]"}>
                    <div
                        className={"block w-[663px] h-[252px]  flex bg-[#D5D5D5] rounded-[12px]   flex-wrap justify-between  gap-[7px]"}>
                        <div className={"block-left pl-[30px] pt-[16px]"}>
                            <p className={"left-title text-3xl font-semibold text-black pb-[36px]"}>Об устройстве</p>
                            <div className={"left-row flex pb-[17px] items-center"}>
                                <p className={"row-title text-lg text-black"}>Название:</p>
                                <p className={"row-data ml-[20px] flex justify-center items-center w-[131px] h-[36px] bg-[#E8E8E8] rounded-[12px]  text-black outline outline-[#64BBD8] outline-1"}>{console.Name}</p>
                            </div>
                            <div className={"left-row flex pb-[17px] items-center"}>
                                <p className={"row-title text-lg text-black"}>Модель:</p>
                                <p className={"row-data ml-[35px] flex justify-center items-center w-[131px] h-[36px] bg-[#E8E8E8] rounded-[12px]  text-black outline outline-[#64BBD8] outline-1"}>{console.Model}</p>
                            </div>
                            <div className={"left-row flex pb-[17px] items-center"}>
                                <p className={"row-title text-lg text-black"}>Гарантия:</p>
                                <p className={"row-data ml-[23px] flex justify-center items-center w-[131px] h-[36px] bg-[#E8E8E8] rounded-[12px]  text-black outline outline-[#64BBD8] outline-1"}>{console.HasGaratny}</p>
                            </div>
                        </div>
                        <div className={"block-right pr-[30px] pt-[16px] w-[340px] flex flex-col items-end"}>
                            <p className={"left-title text-3xl font-semibold text-black pb-[36px] pr-[190px]"}>Система</p>
                            <div
                                className={"friends flex flex-wrap justify-between items-center h-[140px] content-between"}>
                                <div
                                    className={"friend flex items-center justify-between  w-[145px] h-[36px] bg-[#E8E8E8] rounded-[12px] outline outline-[#64BBD8] outline-1"}>
                                    <p className={"friend-title text-black pl-[10px]"}>FPS: {system.Fps}</p>
                                </div>
                                <div
                                    className={"friend flex items-center justify-between  w-[145px] h-[36px] bg-[#E8E8E8] rounded-[12px] outline outline-[#64BBD8] outline-1"}>
                                    <p className={"friend-title text-black pl-[10px]"}>HZ: {system.Hz}</p>
                                </div>
                                <div
                                    className={"friend flex items-center justify-between  w-[145px] h-[36px] bg-[#E8E8E8] rounded-[12px] outline outline-[#64BBD8] outline-1"}>
                                    <p className={"friend-title text-black pl-[10px]"}>Dolby
                                        Sound: {system.RemotePlay}</p>
                                </div>
                                <div
                                    className={"friend flex items-center justify-between  w-[145px] h-[36px] bg-[#E8E8E8] rounded-[12px] outline outline-[#64BBD8] outline-1"}>
                                    <p className={"friend-title text-black pl-[10px]"}>Remote
                                        Play: {system.DolbySound}</p>
                                </div>
                                <div
                                    className={"friend flex items-center justify-between  w-[145px] h-[36px] bg-[#E8E8E8] rounded-[12px] outline outline-[#64BBD8] outline-1"}>
                                    <p className={"friend-title text-black pl-[10px]"}>HDR
                                        Support: {system.HdrSupport}</p>
                                </div>
                                <div
                                    className={"friend flex items-center justify-between  w-[145px] h-[36px] bg-[#E8E8E8] rounded-[12px] outline outline-[#64BBD8] outline-1"}>
                                    <p className={"friend-title text-black pl-[10px]"}>Ram: {system.Ram}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className={'screen-panel mt-[29px] w-[100vw] h-[95px]'} src={panel}/>
            </div>
        </>
    )
}

export default ScreenDevice
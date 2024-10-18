import {shop1} from '../data/Shop.js'
import {shop2} from '../data/Shop.js'
import {shop3} from '../data/Shop.js'
import panel from '../assets/panel.png'
import marioshop from '../assets/shopmario.png'
import contrashop from '../assets/shopcontra.png'
import blastershop from '../assets/shopblaster.png'
import '../App.css'

function ScreenShop() {

    return (
        <>
            <div
                className="screenonstart w-[792px] h-[405px] bg-gray-200 transform translate-x-[564px] translate-y-[165px]">
                <div
                    className={"screenshop-block relative top-[20px] mx-[64px] bg-gray-300 flex flex-wrap justify-between rounded-xl flex-col px-[42px] py-[15px]"}>
                    <p className={"screenshop-tex font-bold text-2xl"}>Магазин</p>
                    <div className={"cards pt-[10px] flex justify-between"}>
                        <div className={"card flex flex-col cursor-pointer "}>
                            <img className={"card-img w-[170px] h-[158px] rounded-lg"} src={marioshop}/>
                            <p className={"card-text text-center font-bold text-lg mt-[8px] "}>{shop1.Name}</p>
                        </div>
                        <div className={"card flex flex-col cursor-pointer "}>
                            <img className={"card-img w-[170px] h-[158px] rounded-lg"} src={blastershop}/>
                            <p className={"card-text text-center font-bold text-lg mt-[8px] "}>{shop2.Name}</p>
                        </div>
                        <div className={"card flex flex-col cursor-pointer "}>
                            <img className={"card-img w-[170px] h-[158px] rounded-lg"} src={contrashop}/>
                            <p className={"card-text text-center font-bold text-lg mt-[8px] "}>{shop3.Name}</p>
                        </div>
                    </div>
                </div>
                <p className={'screen-text text-3xl text-center text-gray-600 absolute top-[304px] left-[365px]'}>14:13</p>
                <img className={'screen-panel mt-[-30px] w-[100vw] h-[95px] absolute top-[340px]'} src={panel}/>
                <p className={'screen-text text-2xl absolute text-center font-bold text-gray-600 top-[355px] left-[369px] opacity-80'}>16/10</p>
            </div>
        </>
    )
}

export default ScreenShop

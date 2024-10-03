import Card from "./Card"
import img1 from './image/nature1.png'
import img2 from './image/nature2.png'
import img3 from './image/nature3.png'
import img4 from './image/nature4.png'
import img5 from './image/nature5.png'
import img6 from './image/nature6.png'
import img7 from './image/nature7.png'
import img8 from './image/nature8.png'
import img9 from './image/nature9.png'
import img10 from './image/nature10.png'
import "./index.css"
function MainPage(){
    return(
        <>
            <h1 className="heading">Card Gallery</h1>
            <div className="cardComp">
                <Card img={img1} title='1'/>
                <Card img={img2} title='2'/>
                <Card img={img3} title='3'/>
                <Card img={img4} title='4'/>
                <Card img={img5} title='5'/>
                <Card img={img6} title='6'/>
                <Card img={img7} title='7'/>
                <Card img={img8} title='8'/>
                <Card img={img9} title='9'/>
                <Card img={img10} title="10"/>
            </div>
        </>
    )
}

export default MainPage
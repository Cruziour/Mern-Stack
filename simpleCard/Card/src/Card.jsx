import "./index.css"
function Card(props){
    return(
        <>
        <div className="card">
            <img src={props.img} alt="Nature Image" />
            <h3>Nature {props.title} Image</h3> 
        </div>
        </>
    )
}

export default Card
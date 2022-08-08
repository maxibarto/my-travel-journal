
function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl} alt="" />
            <div className="card-details">
                <div>
                    <h3 className="card-location">{props.location}</h3>
                    <a href={props.googleMapsUrl} className="card-map-url">View on Google Maps</a>
                </div>
                <h2 className="card-title">{props.title}</h2>
                <div className="card-dates">
                    <span>{props.startDate}</span><span>{props.endDate}</span>
                </div>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card
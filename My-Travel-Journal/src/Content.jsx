import React from "react";
import pin from "/assets/location.png"

export default function Content(props) {
    return (
        <section className="card--section">
            <div>
                <img src={`/assets/${props.imageUrl}`} className="card--img"/>
            </div>
            <div>
                <div className="card--stats" >
                    <img className="pin--logo" src={pin}></img>
                    <span className="card--location">{props.location}</span>
                    <a href={props.googleMapsUrl} className="card--google">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--desc">{props.description}</p>
            </div>
        </section>
    )
}
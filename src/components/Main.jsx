import React from "react";
import HornedBeast from "./HornedBeast";
import data from '../data.json';
import "./Main.css";

class Main extends React.Component {

    render (){


        return (
            <div className="main">
                {
                    data.map((item, index) => {
                        return <HornedBeast key={index} title = {item.title} imageUrl = {item.image_url} description = {item.description} />
                    })
                }
            </div>
        )
    }
}

export default Main;
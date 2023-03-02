import React from "react";
import HornedBeast from "./HornedBeast";
// import data from '../data.json';
import "./Main.css";

class Main extends React.Component {

    render (){

        // this is passed from App Component
        const filteredData = this.props.filteredData
        const handleOpenModal = this.props.handleOpenModal

        return (
            <div className="main">
                {
                    filteredData.map((item, index) => {
                        return <HornedBeast key={index} handleOpenModal = {handleOpenModal} title = {item.title} imageUrl = {item.image_url} description = {item.description} />
                    })
                }
            </div>
        )
    }
}

export default Main;
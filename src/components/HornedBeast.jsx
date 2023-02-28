import React from "react";
import "./HornedBeast.css"

class HornedBeast extends React.Component {


    render () {
        console.log(this.props)
        const title = this.props.title
        const imageUrl = this.props.imageUrl
        const description = this.props.description


        return (
            <>

            <div className="horned-beast">
                <div className="horned-beast-header">
                    <h3>{title}</h3>
                    <img src={imageUrl} alt="this an alt text" />
                </div>
                <div className="horned-beast-description">
                    <p>{description}</p>
                </div>
            </div>
            </>
        )
    }
}

export default HornedBeast;
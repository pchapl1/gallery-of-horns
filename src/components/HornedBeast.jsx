import React from "react";

class HornedBeast extends React.Component {


    render () {
        console.log(this.props)
        const title = this.props.title
        const imageUrl = this.props.imageUrl
        const description = this.props.description


        return (
            <>

            <div className="horned-beast">
                <h3>{title}</h3>
                <img src={imageUrl} alt="this an alt text" />
                <p>{description}</p>
            </div>
            </>
        )
    }
}

export default HornedBeast;
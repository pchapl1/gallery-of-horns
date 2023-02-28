import React from "react";
import "./HornedBeast.css"
import { FaHeart } from 'react-icons/fa';


class HornedBeast extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            likes : 0
        }
        
    
    }
    
    handleLikes = (e)=> {
        console.log('clicked')
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render () {

        const title = this.props.title
        const imageUrl = this.props.imageUrl
        const description = this.props.description


        return (
            <>

                <div className="horned-beast">
                    <div className="horned-beast-header">
                        <h3>{title}</h3>
                        <img onClick={this.handleLikes} src={imageUrl} alt="this an alt text" />
                    </div>
                    <div className="horned-beast-description">
                        <p>{description}</p>
                    </div>
                    <p>{this.state.likes} <FaHeart /></p>
                </div>
            </>
        )
    }
}

export default HornedBeast;
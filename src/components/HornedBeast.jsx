import React from "react";
import "./HornedBeast.css"
import { FaHeart } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            likes : 0
        }
        
    
    }

    handleClick = () => {

        this.handleLikes()

        this.props.handleOpenModal(this.props)

    }
    
    handleLikes = ()=> {
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
                <Card style={{ width: '18rem' }}>
                <Card.Img onClick={this.handleClick} src={imageUrl} alt="this an alt text" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{this.state.likes} <FaHeart /></Card.Text>

                </Card.Body>
                </Card>
                {/* <div className="horned-beast">
                    <div className="horned-beast-header">
                        <h3>{title}</h3>
                        <img onClick={this.handleLikes} src={imageUrl} alt="this an alt text" />
                    </div>
                    <div className="horned-beast-description">
                        <p>{description}</p>
                    </div>
                    <p></p>
                </div> */}
            </>
        )
    }
}

export default HornedBeast;
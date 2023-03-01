import React from "react";
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import SelectedBeast from "./components/SelectedBeast"
import data from "./data.json";

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      imageClicked : "",
      isModalOpen : false
    }
  }

  // this opens the modal and sets the imageClicked coming from
  // the Horned Beast Component

  handleOpenModal = (imageClicked) => {

    this.setState({
      isModalOpen : true,
      imageClicked : imageClicked
    })
  }

  handleCloseModal = () => {
    this.setState({
      isModalOpen : false
    })
  }

  render() {



    return (
      <>
        <Header />
        <Main data = {data} handleOpenModal = {this.handleOpenModal}/>
        <Footer />
        <SelectedBeast image = {this.state.imageClicked} show = {this.state.isModalOpen} handleClose = {this.handleCloseModal}/>
      </>

    )
  }
}

export default App;
import React from "react";
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import SelectedBeast from "./components/SelectedBeast"
import FilterForm from "./components/FilterForm";
import Container from 'react-bootstrap/Container';
import data from "./data.json";

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      imageClicked : "",
      isModalOpen : false,
      data : data,
      filteredData : data
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

  handleFilter = (filterBy) => {

    let filteredData = data.filter(beast => beast.horns === Number(filterBy) )  

    console.log(data)
    this.setState({
      filteredData : filteredData
    })
  }

  render() {

    return (
      <>
        <Header />
        <Container>
        <FilterForm handleFilter = {this.handleFilter} />
        <Main filteredData = {this.state.filteredData} handleOpenModal = {this.handleOpenModal}/>
        <Footer />
        <SelectedBeast image = {this.state.imageClicked} show = {this.state.isModalOpen} handleClose = {this.handleCloseModal}/>
        </Container>
          
      </>

    )
  }
}

export default App;
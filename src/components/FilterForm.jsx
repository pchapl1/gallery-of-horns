import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./FilterForm.css"

class FilterForm extends React.Component {

    constructor(props) {
        super(props)

    }
    handleClick = (event) => {
        event.preventDefault()
        let filterData = document.getElementById("filter")

        this.props.handleFilter(filterData.value)
    }
    render (){



        return (

        <Form className="filter-form">
            <fieldset>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="filter">Filter by number of horns</Form.Label>
                <Form.Select name="filter"  id="filter">
                <option value={1}>1 horn</option>
                <option value={2}>2 horns</option>
                <option value={3}>3 horns</option>
                <option value={100}>100</option>
                </Form.Select>
            </Form.Group>

            <Button onClick={this.handleClick} type="submit">Submit</Button>
            </fieldset>
        </Form>


        )
    }
}

export default FilterForm;
import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Search =(props) => {

        return (
            <Container>
                <Row>
                    <Col>
                        <form>
                            <label>
                                Search Employees:
                        <input
                                    value={props.search}
                                    onChange={props.handleInputChange}
                                    type="text"
                                    name="name"
                                    placeholder="Courage">
                                </input>
                            </label>
                        </form>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>

        );
    }

export default Search;

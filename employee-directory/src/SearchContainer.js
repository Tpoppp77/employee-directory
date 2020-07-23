import React, { Component } from "react";
import Search from "./components/Search/Search";
import Wrapper from "./components/Wrapper/Wrapper";
import Employees from "./employees.json";

class SearchContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: null
        };

    };

    searchEmployees = (event) => {
        let results = event.target.value;
        this.setState({ search: results })
    };

    // componentDidMount() {
    //     this.searchEmployees();
    // };

    render() {
        const list = Employees.filter((data) => {
            if (this.state.search === null) {
                return data
            } else if (data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.occupation.toLowerCase().includes(this.state.search.toLowerCase())) {
                return data
            }
        }).map((data) => {
            return (
                <div className="card">
                    <div className="img-container">
                        <img alt={data.name} src={data.image} />
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <strong>Image:</strong> {data.image}
                            </li>
                            <li>
                                <strong>Name:</strong> {data.name}
                            </li>
                            <li>
                                <strong>Phone:</strong> {data.phone}
                            </li>
                            <li>
                                <strong>Email:</strong> {data.email}
                            </li>
                            <li>
                                <strong>DOB:</strong> {data.DOB}
                            </li>
                        </ul>
                    </div>

                </div>
            )
        })
        return (
            <>
                <Search key={this.state.search} value={this.state.search} handleInputChange={this.searchEmployees} />
                <Wrapper>
                    {list}
                </Wrapper>
            </>
        );
    };
};

export default SearchContainer;

import React, { Component } from "react";
import SearchContainer from "./components/SearchContainer/SearchContainer"
// import EmployeeCard from "./components/EmployeeCard";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
// import employees from "./employees.json";

class App extends Component {
  // state = {
  //     employees
  //   };

  //   sortEmployeeName = name => {

  //     const employees = this.state.employees.filter(employee => employee.name !== name);

  //     this.setState({ employees });
  //   };

  render() {
    return (
      // <Wrapper>
      //   <Title>Employee Directory</Title>
      //   {this.state.employees.map(employee => (
      //     <EmployeeCard
      //       sortEmployeeName={this.sortEmployeeName}
      //       id={employee.id}
      //       key={employee.id}
      //       name={employee.name}
      //       image={employee.image}
      //       email={employee.email}
      //       phone={employee.phone}
      //       DOB={employee.DOB}
      //       />
            // <Wrapper />

      <>
        <SearchContainer />
      </>

      
      
      )
        
  };
}; 
export default App;
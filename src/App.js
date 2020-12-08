import React, { Component } from "react";
import Header from "./Header";
import OperationButtons from "./containers/OpersionButton/OperationButtons";
import SelectionRadios from "./containers/SelectionRadios/SelectionRadios";
import RingTable from "./containers/RingTable/RingTable";

class App extends Component {

    render() {
        console.log(this.state);
        return (
            <>
            <Header
                brand="React Workshop Lab"
                theme="dark"
                link={["Home", "Feeds"]} 
                />
                <OperationButtons />
                <SelectionRadios />
                <RingTable/>
            </>
        )
    }
}

export default App;
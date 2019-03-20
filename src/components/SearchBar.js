import React from "react"

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.updateFoodList = this.props.updateFoodList;
    }

    state = {
        searchText: ""
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.updateFoodList(e.target.value)
    }

    render() {
        const { searchText } = this.state;

        return (
            <div className="field has-addons">
                <div className="control">
                    <input onChange={this.inputHandler} name="searchText" value={searchText} className="input" type="text" placeholder="Find a repository" />
                </div>

            </div>
        );
    }

}

export default SearchBar;
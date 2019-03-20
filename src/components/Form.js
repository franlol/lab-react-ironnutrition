import React from "react"

class Form extends React.Component {

    state = {
        name: "asd",
        calories: 0,
        img: ""
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {
        const { onSubmit } = this.props;
        const { name, calories, img } = this.state;

        return (
            <form onSubmit={onSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input onChange={this.inputHandler} className="input" type="text" name="name" value={name} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Nr Calories</label>
                    <div className="control">
                        <input onChange={this.inputHandler} className="input" type="text" name="calories" value={calories} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Img:</label>
                    <div className="control">
                        <input onChange={this.inputHandler} className="input" type="text" name="img" value={img} />
                    </div>
                </div>

                <div className="control">
                    <button onClick={(e) => onSubmit(e, name, calories, img)} className="button is-primary">Submit</button>
                </div>
            </form>
        );
    }

}

export default Form
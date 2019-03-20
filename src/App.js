import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './data/foods.json'
import FoodBox from "./components/FoodBox"
import Form from "./components/Form"
import SearchBar from "./components/SearchBar"

class App extends Component {


	state = {
		foodList: [...foods],
		filteredList: [...foods],
		myList: [],
		myListTotal: 0
	}

	listFoods = () => {
		return this.state.filteredList.map((food, index) => {
			return <FoodBox addToList={this.addToList} id={index} key={`${food.name}-${index}`} name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} />
		});
	}

	addFood = (event, name, calories, image, quantity = 0) => {
		event.preventDefault();

		const newItem = { name, calories, image, quantity };
		this.setState({
			foodList: [...this.state.foodList, newItem],
			filteredList: [...this.state.filteredList, newItem]
		})
	}

	updateFoodList = (str) => {
		let { foodList } = this.state;

		let newFiltered = foodList.filter((food) => {
			return food.name.toLowerCase().includes(str.toLowerCase());
		});
		console.log(newFiltered)

		this.setState({
			foodList,
			filteredList: newFiltered
		});
	}

	addToList = (food) => {
		const { name, quantity } = food;

		let myList = [];
		let myListTotal = 0;

		//iterate my foodList and add desired quantity to returned element 'food' (in callbalk args)
		this.state.foodList.map((item) => {
			if (item.name === name) {
				item.quantity += parseInt(quantity);
			}
			if (item.quantity > 0) {
				myListTotal += (item.calories * item.quantity);
				myList.push(item);
			}
			return item;
		})

		this.setState({
			myList,
			myListTotal
		})
	}

	listFavs = () => {
		return this.state.myList.map((food, index) => {
			return (<li key={index}>{food.quantity} {food.name} - {food.quantity * food.calories} cal.</li>)
		})
	}

	render() {
		return (
			<div className="App section">

				<div className="control">
					<button className="button is-primary">show form</button>
				</div>

				<div className="container">
					<Form onSubmit={this.addFood} />
				</div>
				<hr />
				<SearchBar updateFoodList={this.updateFoodList} />
				<hr />
				<div className="columns">
					<div className="column">
						<div className="container">
							{this.listFoods()}
						</div>
					</div>
					<div className="column">
						<h1>Today foods</h1>
						<ul>
							{this.listFavs()}
							<hr/>
							<p>Total: {this.state.myListTotal}</p>
						</ul>
					</div>

				</div>

			</div>
		);
	}
}

export default App;

// "name": "Pizza",
// "calories": 400,
// "image": "https://i.imgur.com/eTmWoAN.png",
// "quantity": 0
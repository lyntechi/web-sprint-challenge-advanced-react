import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor() {
    super();
    this.state = {
      plants: [],
      searchText: "",
    };
  }

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/

  componentDidMount() {
    axios
      .get("http://localhost:3333/plants")
      .then((response) => {
        this.setState({
          plants: response.data.plantsData,
        });
        console.log(response.data.plantsData);
      })
      .catch((error) => {
        console.log("error happend with response", error);
      });
  }

  handleInput = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    let filteredPlants = this.state.plants.filter((plant) => {
      return plant.name.toLowerCase().includes(this.state.searchText);
    });

    return (
      <main className="plant-list">
        <SearchForm handleInput={this.handleInput} />
        {filteredPlants.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}

import React, { Component } from 'react';

class RestaurentUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      adress: null,
      reating: null,
      id: null
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/restaurent/" + this.props.match.params.id)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        this.setState({
          name: result.name,
          emails: result.emails,
          id: result.id,
          adress: result.adress,
          reating: result.reating,
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  update() {
    fetch("http://localhost:3000/restaurent/" + this.state.id, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.emails,
        adress: this.state.adress,
        reating: this.state.reating
      })
    })
    .then((response) => {
      if (response.ok) {
        alert("Restaurant has been updated successfully");
      } else {
        alert("Failed to update restaurant");
      }
    })
    .catch((error) => {
      console.error('Error updating restaurant:', error);
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Restaurant Update</h1>
        <div>
          <input
            onChange={(event) => {
              this.setState({
                name: event.target.value,
              });
            }}
            placeholder="Restaurant Name"
            value={this.state.name || ''}
          />
          <br /><br />
          <input
            onChange={(event) => {
              this.setState({
                rating: event.target.value,
              });
            }}
            placeholder="Rating"
            value={this.state.reating || ''}
          />
          <br /><br />
          <input
            onChange={(event) => {
              this.setState({
                adress: event.target.value,
              });
            }}
            placeholder="Adress"
            value={this.state.adress || ''}
          />
          <br /><br />
          <input
            onChange={(event) => {
              this.setState({
                emails: event.target.value,
              });
            }}
            placeholder="Email"
            value={this.state.emails || ''}
          />
          <br /><br />
          <button onClick={() => this.update()}>
            Update Restaurant
          </button>
        </div>
      </div>
    );
  }
}

export default RestaurentUpdate;

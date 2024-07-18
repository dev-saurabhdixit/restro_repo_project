import React, { Component } from "react";

export default class RestaurantCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      emails: null,
      adress: null,
      reating: null,
    };
  }

  create() 
   {
    fetch("http://localhost:3000/restaurent",{
    method: "post",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(this.state)
   }).then((result)=>{
    result.json().then(()=>{
    alert("Restaurent has been added")
    })
   })
 }

  render() {
    return (
      <div>
        <h1>RestaurantCreate</h1>
        <div>
          <input
            onChange={(event) => {
              this.setState({
                name: event.target.value,
              });
            }}
            placeholder="Restaurant Name"
          />
          <br /><br />
          <input
            onChange={(event) => {
              this.setState({
                reating: event.target.value,
              });
            }}
            placeholder="Rating"
          />
          <br /><br />
          <input
            onChange={(event) => {
              this.setState({
                adress: event.target.value,
              });
            }}
            placeholder="Address"
          />
          <br /><br />
          <input
            onChange={(event) => {
              this.setState({
                emails: event.target.value,
              });
            }}
            placeholder="Email"
          />
          <br /><br />
          <button onClick={() => this.create()}>
            Add Restaurant
          </button>
        </div>
      </div>
    );
  }
}

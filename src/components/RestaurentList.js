import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class RestaurentList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }

  componentDidMount() {
   this.getData()
  }
  getData(){
    fetch("http://localhost:3000/restaurent").then((response) => {
      response.json().then((result) => {
        console.log(result);
        this.setState({ list: result });
      });
    });
  }

  delete(id) {
    fetch("http://localhost:3000/restaurent/" + id, {
      method: "DELETE",
      // headers: {
      //   'content-type': 'application/json'
      // },
    }).then((result) => {
      result.json().then(() => {
        alert("Restaurant has been deleted");
        this.componentDidMount(); // Refresh the list after deletion
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Restaurant List</h1>
        {this.state.list ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Location</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.reating}</td>
                    <td>{item.adress}</td>
                    <td>
                      <Link to={"/update/" + item.id}>
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                      <span onClick={() => this.delete(item.id)}>
                        <FontAwesomeIcon icon={faTrash} color="red" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Please wait...</p>
        )}
      </div>
    );
  }
}

export default RestaurentList;

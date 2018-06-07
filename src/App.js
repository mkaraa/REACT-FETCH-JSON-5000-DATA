import React from 'react';
//import ReactDOM from "react-dom";
//mport logo from './logo.svg';
import './App.css';
//import index from "./index";
import './index.css';
import index from './index';
import axios from "axios";

//Define App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

  }

  //componentWillMount
  //componentDidMount
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos").
      then((Response) => Response.json()).
      then((res) => {
        this.setState({
          data: res
        });
        console.log("Res :", res);
      })
  }
  /*
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/photos").
      then(res=> {
      const data = res.a;
      this.setState({data});
    })
  }*/
  //render

  render() {
    console.log("Data :", this.state.data);
    return (
      <div id="container" key={this.state.data.id}> 
        {
          this.state.data.map((data) =>
            <div>
              <div id="albumId">
                Album ID: {data.albumId}
              </div>
              <div id="title">
                Title: {data.title}
              </div>
              <div id="photo">
                Album Photos : <img src = {data.url} />
              </div>
              <div id="photo">
                <img src = {data.thumbnailUrl} />
              </div>
            </div>
          )}
      </div>
    );
  }


}
export default App;
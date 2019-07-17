import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { muscles, exercises } from "./store";

class App extends Component {
  //as exercises changes thus we put them inside state
  state = {
    exercises,
    catagory: ""
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }

  //handlechange on foooter
  handlechange = catagory => {
    this.setState({
      catagory
    });
  };

  render() {
    const exercises = this.getExercisesByMuscles();
    const { catagory } = this.state;
    return (
      <Fragment>
        <Header />
        <Content exercises={exercises} />
        <Footer
          muscles={muscles}
          handlechange={this.handlechange}
          catagory={catagory}
        />
      </Fragment>
    );
  }
}

export default App;

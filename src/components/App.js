import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { muscles, exercises } from "./store";

class App extends Component {
  //as exercises changes thus we put them inside state
  state = {
    exercises
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

  render() {
    const exercises = this.getExercisesByMuscles();
    return (
      <Fragment>
        <Header />
        <Content exercises={exercises} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;

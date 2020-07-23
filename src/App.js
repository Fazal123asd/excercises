import React, { Component } from 'react'
import {Header, Footer} from './componemts/Layout/index'
import Excercises from './componemts/Excercises/Excercises'
import {muscles, exercises} from './store'

class App extends Component{
  state ={
    exercises,
    catogory: '',
    exercise: {},
    editMode: false
  }

  handleCatogory = catogory =>{
    this.setState({catogory})
  }
  
  getExercisesByMuscles  () {
    const initExcercises = muscles.reduce((exercises, catogory)=>({
      ...exercises,
      [catogory]: []
    }),{})
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) =>{
      const {muscles} = exercise
      exercises[muscles] = exercises[muscles] ? 

      [...exercises[muscles], exercise] : [exercise]
      return exercises
    },initExcercises)
    )
  }

  handleExerciseSelected = (id) =>{
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }))
  }

  handleExcerciseCreate = (exercise) =>{
    this.setState(({exercises}) => ({exercises: [...exercises, exercise]}))
  }

  handleDelete = (id) =>{
    this.setState(({exercises, exercise}) =>({
      exercises:  exercises.filter(ex => ex.id !== id),
      editMode: exercise.id !== id,
      exercise: exercise.id === id ? {} : exercise
    }))
  }

  handleExerciseSelectEdit = id => {
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))
    
  }

  handleExcerciseEdit= exercise =>{
    this.setState(({exercises}) =>({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise

      ],
      exercise
    }))
  }
  render(){
   const exercises = this.getExercisesByMuscles()
   const {catogory, exercise, editMode} = this.state
    return(
      <React.Fragment>
        <Header
         muscles={muscles} 
         exercises={exercises}
         onExcerciseCreate={this.handleExcerciseCreate}/>

        <Excercises onDelete={this.handleDelete}
         exercise={exercise} 
         exercises={exercises}
         editMode= {editMode}  
         muscles={muscles}
         catogory={catogory} onselect={this.handleExerciseSelected}
         onselectEdit= {this.handleExerciseSelectEdit}
         onEdit={this.handleExcerciseEdit}
         />
        <Footer muscles={muscles} catogory={catogory} onSelect={this.handleCatogory}/>
      </React.Fragment>
     
    )
  }
}

export default App;
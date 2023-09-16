import React from "react"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const partsList = [part1, part2, part3];
  const exercisesList = [exercises1, exercises2, exercises3];

  return (
    <div>
      <Header course={course} />
      <Content partsList={partsList} exercisesList={exercisesList}/>
      <Total exercisesList={exercisesList}/>
    </div>
  )
}

const Header = ({course}) => {
  return (
    <p>{course}</p>
  )
}

const Content = ({partsList, exercisesList}) => {
  return (
    <div>
      {partsList.map((part, index) => ( // Utilisez map pour parcourir la liste des parties
        <p key={index}>
          {part} {exercisesList[index]}
        </p>
      ))}
    </div>
  );
  
}

const Total = ({exercisesList}) => {
  let numberOfEx = 0;
  exercisesList.forEach(exercise =>{numberOfEx += exercise});
  return <p>Number of exercises {numberOfEx}</p>
}

export default App
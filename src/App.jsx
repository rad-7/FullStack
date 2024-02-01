const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1><strong>{props.course}</strong></h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <ul>
        <li>{props.part1} <strong>{props.exercises1}</strong></li>
        <li>{props.part2} <strong>{props.exercises2}</strong></li>
        <li>{props.part3} <strong>{props.exercises3}</strong></li>
      </ul>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>The total of all exercises is <strong>{props.exercises1 + props.exercises1 + props.exercises3}</strong></p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content 
        part1 = {part1} exercises1 = {exercises1}
        part2 = {part2} exercises2 = {exercises2}
        part3 = {part3} exercises3 = {exercises3}
      />
      <Total 
      exercises1 = {exercises1}
      exercises2 = {exercises2}
      exercises3 = {exercises3}
      /> 

    </div>
  )
}

export default App
const Header = (props) => {
  return (
    <div>
      <h1><strong><i>{props.course}</i></strong></h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <ul>
        <li>{props.part1.name} <strong>{props.part1.exercises}</strong></li>
        <li>{props.part2.name} <strong>{props.part2.exercises}</strong></li>
        <li>{props.part3.name} <strong>{props.part3.exercises}</strong></li>
      </ul>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        The total of all exercises is {' '}
        <strong>
          {props.part1.exercises + props.part2.exercises + props.part3.exercises}
        </strong>
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack Application Development'
  
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
  name: 'State of a component',
  exercises: 14
  }

  return (
    <div>
      <Header course = {course}/>
      <Content part1 = {part1} part2 = {part2} part3 = {part3} />
      <Total part1 = {part1} part2 = {part2} part3 = {part3} />

    </div>
  )
}

export default App
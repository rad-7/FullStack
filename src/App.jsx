const Header = (props) => {
  return (
    <div>
      <h1><strong>{props.course}</strong></h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
       <ol>
        <li>{props.parts[0].name} <strong>{props.parts[0].exercises}</strong></li>
        <li>{props.parts[1].name} <strong>{props.parts[1].exercises}</strong></li>
        <li>{props.parts[2].name} <strong>{props.parts[2].exercises}</strong></li>
      </ol> 
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        The total of all exercises is {' '}
        <strong>
          {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
        </strong>
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack Application Development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },

    {
      name: 'Using props to pass data',
      exercises: 7
    },

    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total parts = {parts}  />

    </div>
  )
}

export default App
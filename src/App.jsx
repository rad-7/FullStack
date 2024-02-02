const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1><strong>{props.course.name}</strong></h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
       <ul>
        <font size ='5'>
          {
            props.course.parts.map((item) => (
              <li>{item.name} <strong>{item.exercises}</strong></li>
            ))
          }
        </font>
      </ul> 
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  let total = 0 
  props.course.parts.forEach((item) => total += item.exercises)
  return (
    <div>
      <p>
        <font size = '5'>
          The total of all exercises is {' '}
          <strong> {total} </strong>
        </font>
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
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
  }
  return (
    <div>
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course}  />

    </div>
  )
}

export default App
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Mike'
    }

    this.updateName = this.updateName.bind(this)
  }

  updateName() {
    this.setState({
      name: "Michael",
    });
  }

  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
)
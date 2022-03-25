import React from 'react';
import './App.css';
import StopWatch from './components/Stopwatch';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      hour: '',
      min: '',
      sec: '',
      clicked: false,
    }
  }

  handleChange = ({ target }) => {
    let { name, value } = target;
    this.setState((prevSt) => ({ ...prevSt, [name]: value }));
  }

  handleClick = (e) => {
    e.preventDefault();
    let { hour, min, sec } = this.state;
    if (hour === '') hour = 0;
    if (min === '') min = 0;
    if (sec === '') sec = 0;
    const time = parseFloat(hour) * 3600 + parseFloat(min) * 60 + parseFloat(sec);
    this.setState({ clicked: true, time, hour: '', min: '', sec: '' });
  }

  closeStopwatch = () => {
    this.setState({ clicked: false });
  }

  render() {
    const { time, hour, min, sec, clicked } = this.state;
    const setTime = (<form onSubmit={ this.handleClick } className="flex-sect">
      <section className="input-sect">
        <input
          type="text"
          name="hour"
          placeholder="HH"
          onChange={ this.handleChange }
          pattern={/\d*/}
          value={ hour }
        />
        <input
          type="text"
          name="min"
          placeholder="MM"
          onChange={ this.handleChange }
          pattern={/\d{1,2}/}
          value={ min }
        />
        <input
          type="text"
          name="sec"
          placeholder="SS"
          onChange={ this.handleChange }
          value={ sec }
          pattern={/\d{1,2}/}
          max="60"
        />
      </section>
      <button type="submit" onClick={ this.handleClick }>Start</button>
    </form>)
    return (
      <div className="App">
        {/* <img className="image" src="https://www.pngkey.com/png/full/22-223345_hogwarts-castle-png-harry-potter-hogwarts-png.png" alt="Hogwarts castle" /> */}
        {!clicked && setTime}
        {clicked && (
          <section>
            <StopWatch time={ time } />
            <button type="button" onClick={ this.closeStopwatch }>Close Stopwatch</button>
          </section>
        )}
      </div>
    );
  }
}

export default App;

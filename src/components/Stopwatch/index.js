import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timer: 0,
  }

  startButtonClicked = () => {
    this.timerId = setInterval(this.clocktick, 1000)
  }

  clocktick = () => {
    this.setState(prevstate => {
      const {timer} = prevstate
      return {timer: timer + 1}
    })
  }

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  resetbtnClicked = () => {
    this.setState({timer: 0})
  }

  onSeconds = () => {
    const {timer} = this.state
    const seconds = Math.floor(timer % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  onMinutes = () => {
    const {timer} = this.state
    const minutes = Math.floor(timer / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time = `${this.onMinutes()}:${this.onSeconds()}`

    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="clock-container">
          <div className="clock-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="timer-img"
            />
            <p>Timer</p>
          </div>
          <p className="timer">{time}</p>
          <div>
            <button
              type="button"
              className="button button1"
              onClick={this.startButtonClicked}
            >
              Start
            </button>
            <button
              type="button"
              className="button button2"
              onClick={this.componentWillUnmount}
            >
              Stop
            </button>
            <button
              type="button"
              className="button button3"
              onClick={this.resetbtnClicked}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

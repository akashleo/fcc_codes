class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const result = this.props.fiftyFifty ? "You Win!" : "You Lose!";
    {
      /* Change code below this line */
    }
    return <h1>{result}</h1>;
    {
      /* Change code above this line */
    }
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      // Complete the return statement:
      return {
        counter: prevState.counter + 1,
      };
    });
  }
  render() {
    const expression = Math.random() > 0.5 ? true : false; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
        <Results fiftyFifty={expression} />
        {/* Change code above this line */}
        <p>{"Turn: " + this.state.counter}</p>
      </div>
    );
  }
}

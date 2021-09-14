class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar name={this.state.name} />
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
  
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is:
      <span>{this.props.name}</span></h1>
      {/* Change code above this line */}
    </div>
    );
  }
};
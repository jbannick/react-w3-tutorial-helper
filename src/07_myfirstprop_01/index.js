class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>
  }
}

const myelement = <Car brand="Prius" />;

ReactDOM.render(myelement, document.getElementById('root'));
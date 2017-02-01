const React = require('react')

class Product extends React.Component{
  render(){
    return(
      <div>
        <h1> Name: {this.props.name} </h1>
        <ul>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightInRange

}


function weightInRange(props, propName){
  var value = props[propName]
  if (value === undefined){
    return new Error( propName + "is required.")
  } else if (isNaN(value)){
      return new Error( propName + "should be a number.")
    } else if (value < 80 || value > 300) {
      return new Error( propName + " should be between 80 to 300.")
  }
}


module.exports = Product

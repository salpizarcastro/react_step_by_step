import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './Game.js';
import * as serviceWorker from './serviceWorker';

const today = new Date()

const user = {
          name: 'Sandra',
          last: 'Alpizar',
          email: 'sandra.alpizar@gmail.com',
          dob: new Date(2020, 12, 31)};

var fullname = () => {
  return user.name + ' ' + user.last;
}

const element = <h1>Hello {user.name}!</h1>;
const greetings = (
  <h2>
    Hello {fullname()}! Today is {today.getMonth()}/{today.getDate()}/{today.getFullYear()}
  </h2>);

const meme = 'https://mamasgeeky.com/wp-content/uploads/2020/03/coronavirus-meme-1.jpg'

function Greetings (user){
  if(user){
    return (
      <section>
        <h1>Hello {fullname()}!</h1>
        <h2>Today is {today.getMonth()}/{today.getDate()}/{today.getFullYear()} {today.toLocaleTimeString()}</h2>
        <img src = {meme} alt = 'meme'/>
      </section>);
  }
  return (<h2>Hello Stranger</h2>);
}
//setInterval(buildGreetings, 1000);

class GreetingComp extends React.Component {
  render(){
    return(Greetings(user));
  }
}

function Hello (props) {
  return (<h1>Hello {props.first} {props.last}!</h1>);
}

function Today(props) {
  return (<h2>Today is {props.today.getMonth()}/{props.today.getDate()}/{props.today.getFullYear()} {props.today.toLocaleTimeString()}</h2>);
}

function Meme (props) {
  return(<img src = {props.url} alt = 'meme'/>);
}

function Greetingsprops (props) {
  console.log('Toggle: ', props.isToggleOn);
  if (props.toggle){
    return (
      <section>
        <Hello first = {user.name} last = {user.last}/>
        <Today today = {today} />
        <Meme url = {meme} />
      </section>);
  } else if (!props.toggle) {
    return (
      <section>
        <Hello first = 'Steve' last = 'Grupico'/>
        <Today today = {today} />
        <Meme url = {meme} />
      </section>);
  }
  else if (props.first){
    return (
      <section>
        <Hello first = {props.first} last = {props.last}/>
        <Today today = {today} />
        <Meme url = {meme} />
      </section>);
  }
  return (<h2>Hello Stranger</h2>);
}

const constwprops = <Greetingsprops first = 'Sandra' last = 'Alpizar' />;

function SnackItem (props) {
  return <li>{props.value}</li>;
}


function SnackList (props){
  //const snacks = ['chocolates', 'gummies', 'popcorn'];
  //const listSnacks = props.snacks.map((snack) =>
    //<li key = {snack.id.toString()}>{snack.id} {snack.text}</li>);
    //<SnackItem key = {snack.id.toString()} value = {snack.text} />);
  const listSnacks = props.snacks;
  return (
    <ul>{listSnacks.map((snack) =>
      <SnackItem key = {snack.id.toString()} value = {snack.text} />)}</ul>
  );
}

class NameForm extends React.Component {
  constructor (props){
    super (props);
    this.state = {value : ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit = {this.handleSubmit}>
        <label>
          Name:
          <input type = 'text' value = {this.state.value} onChange = {this.handleChange} />
          <input type="submit" value="Submit" />
        </label>
      </form>
    )
  }
}

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <label>
          Essay:
          <textarea value = {this.state.value} onChange ={this.handleChange} />
        </label>
        <input type = 'submit' valye = 'Submit' />
      </form>
    );
  }
}

function SnackOptions (props){
  const listSnacks = props.snacks;
  return (
    listSnacks.map((snack) =>
      <option value = {snack.id.toString()}>{snack.text}</option>)
  );
}

class SnackForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: '0'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("Inside snacks form: ", event.target.value);
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log("Inside submit snacks form: ", this.state.value);
    alert('Favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <label>
          Pick your favorite snack:
          <select value = {this.state.value} onChange = {this.handleChange}>
            <SnackOptions snacks = {[{id: 0, text:'coconut'}
                                  , {id: 1, text:'chocolates'}
                                  , {id: 2, text:'gummies'}
                                  , {id: 3, text:'popcorn'}
                                  , {id: 4, text:'chips'}]} />
          </select>
        </label>
        <input type = 'submit' valye = 'Submit' />
      </form>
    );
  }
}

class Reservation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 25
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    console.log("inputs: ", name, value);
    //var partialState = {};
    //partialState[name] = value;
    //this.setState(partialState);
    this.setState({[name]: value});
  }

  render(){
    return(
      <form>
        <label>
          Is Going:
          <input name = 'isGoing'
                type = 'checkbox'
                checked = {this.state.isGoing}
                onChange = {this.handleInputChange} />
        </label>
        <label>
          # Guests:
          <input name = 'numberOfGuests'
                type = 'number'
                value = {this.state.numberOfGuests}
                onChange = {this.handleInputChange} />
        </label>
      </form>
    );
  }
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit){
  return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius){
  return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert){
  const input = parseFloat(temperature);
  if (Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVeredict(props){
  if (props.celsius >= 100){
    return <p>Water would boil</p>
  }else{
    return <p>Water would NOT boil</p>
  }
}

class TemperatureInput extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e){
    //this.setState({temperature: e.target.value})
    this.props.onTemperatureChange(e.target.value);
  }

  render(){
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return(
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input value = {temperature} onChange = {this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props){
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '',
                  scale: ''};
  }

  handleCelsiusChange(temperature){
    this.setState({scale: 'c', temperature})
  }

  handleFahrenheitChange(temperature){
    this.setState({scale: 'f', temperature})
  }

  handleChange(e){
    this.setState({temperature: e.target.value})
  }

  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return(
      /*
      <fieldset>
        <legend>Enter temperature in celsius</legend>
        <input value = {temperature} onChange = {this.handleChange} />
        <BoilingVeredict celsius = {parseFloat(temperature)} />
      </fieldset>
      */
      <div>
        <TemperatureInput scale = 'c' temperature = {celsius} onTemperatureChange = {this.handleCelsiusChange} />
        <TemperatureInput scale = 'f' temperature = {fahrenheit} onTemperatureChange = {this.handleFahrenheitChange} />
        <BoilingVeredict celsius = {parseFloat(celsius)} />
      </div>
    );
  }
}

function Contacts() {

  return <div className = 'Contacts' />;
}

function Chat() {

  return <div className = 'Chat' />;
}

function SplitPane(props){

  return(

    <div className = 'SplitPane'>
      <div className = 'SplitPane-left'>
        {props.left}
      </div>
      <div className = 'SplitPane-right'>
        {props.right}
      </div>
    </div>
  )
}

function App2(){
  return(
    <SplitPane left = {<Contacts />} right = {<Chat />} />
  );
}

function FancyBorder(props){
  return(
    <div className = {'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props){
  return (
    <FancyBorder color = 'blue'>
      <h1 className = 'Dialog-title'>{props.title}</h1>
      <p className = 'Dialog-message'>{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}


class SignUpDialog extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }

  render(){
    return(
      <Dialog title = 'Marse Exploration Program'
              message = 'How should we refer to you?'>
              <input value = {this.state.login} onChange = {this.handleChange} />
              <button onClick = {this.handleSignUp}>Sign Me Up!</button>
      </Dialog>
    );
  }
}


class Funwprops extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: true
    };
    //callbacks
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log("This: ", this);
    this.setState(
      state => ({
        isToggleOn: !state.isToggleOn
      })
    )
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  render(){
    return (
      <div>
        <h1>Tic Tac Toe!</h1>
        <div><Game /></div>
        <h1>Forms</h1>
        <div><NameForm /></div>
        <div><EssayForm /></div>
        <div><SnackForm /></div>
        <div><Reservation /></div>
        <h1>Lift Status</h1>
        <div><Calculator /></div>
        <h1>Composition</h1>
        <div><App2 /></div>
        <div><SignUpDialog /></div>
        <h1>Timer</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}.</h2>

        <h1>Lists</h1>
        <SnackList snacks = {[{id: 1, text:'chocolates'}
          , {id: 2, text:'gummies'}
          , {id: 3, text:'popcorn'}
          , {id: 4, text:'chips'}]}/>
        {/*<Greetingsprops first = 'Sandra' last = 'Alpizar' />*/}
        {/*<Greetingsprops first = 'Steve' last = 'Grupico' />*/}

        <h1>Conditional rendering</h1>
        <button onClick = {this.handleClick.bind(this)}>
          {this.state.isToggleOn ? 'Sandra' : 'Steve'}
        </button>

        <h1>Greetings with conditional stuff</h1>
        <Greetingsprops toggle = {this.state.isToggleOn}/>
      </div>
    );
  }
}

/*
ReactDOM.render(
  <Funwprops />,
  document.getElementById('root')
);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
export default Funwprops

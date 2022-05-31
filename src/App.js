// TABLE OF CONTENTS

import React from "react";
// import ContactCard from "./components/ContactCard";
// import ToDoItem from "./components/ToDoItem";
// import todosData from "./todosData";
// import Joke from "./components/Joke";
// import jokesData from "./jokesData";
// import productsData from "./vschoolProducts";
// import Product from "./components/Product";

// // TO DO APP

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: todosData,
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(id) {
//     this.setState((prevState) => {
//       const updatedTodos = prevState.todos.map((todo) => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       });
//       return {
//         todos: updatedTodos,
//       };
//     });
//   }

//   render() {
//     const todoItems = this.state.todos.map((item) => {
//       return (
//         <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
//       );
//     });

//     return <div className="todo-list">{todoItems}</div>;
//   }
// }

// const App = () => {
//   const todoComponents = todosData.map((item) => {
//     return <ToDoItem key={item.id} item={item} />;
//   });

//   return <div className="todo-list">{todoComponents}</div>;
// };

// const App = () => {
//   return (
//     <div className="todo-list">
//       <ToDoItem />
//       <ToDoItem />
//       <ToDoItem />
//       <ToDoItem />
//     </div>
//   );
// };

// LECTURE EXERCISES

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // LIFECYCLE METHODS - START

  static getDerivedStateFromProps(props, state) {
    // return the new, updated state based upon the props
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
  }

  componentDidMount() {
    // get the data I need to correctly display
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // DEPRECATED
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return true if we want it to update, otherwise return false
  }

  componentWillUnmount() {
    // teardown or cleanup code before your component disappears (eg. remove event listeners)
  }

  // LIFECYCLE METHODS - END

  render() {
    return <div>Code goes here.</div>;
  }
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1,
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       <img
//         src="https://www.fillmurray.com/200/100"
//         onMouseOver={() => console.log("you found me!")}
//         alt="n/a"
//       />
//       <br />
//       <br />
//       <button
//         onClick={() => {
//           console.log("something");
//         }}
//       >
//         Click Me!
//       </button>
//     </div>
//   );
// }

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: false,
//     };
//   }

//   render() {
//     let logStatus;
//     if (this.state.isLoggedIn) {
//       logStatus = "in";
//     } else if (!this.state.isLoggedIn) {
//       logStatus = "out";
//     }

//     return (
//       <div>
//         <h1>You are currently logged {logStatus}</h1>
//       </div>
//     );
//   }
// }

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Emmanuel",
//       age: 38,
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hi my name is {this.state.name}</h1>
//         <p>I am a {this.state.age} year(s) old, web developer trainee!</p>
//       </div>
//     );
//   }
// }

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       answer: "yes",
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Is state important to know? {this.state.answer} </h1>
//       </div>
//     );
//   }
// }

// export default class App extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div>
//         <Header username="Emmanuel" />
//         <Greeting />
//       </div>
//     );
//   }
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <p>Welcome, {this.props.username}!</p>
//       </header>
//     );
//   }
// }

// class Greeting extends React.Component {
//   render() {
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;
//     if (hours < 12) {
//       timeOfDay = "morning";
//     } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon";
//     } else {
//       timeOfDay = "night";
//     }
//     return (
//       <h1>
//         Good {timeOfDay} to you, I said good {timeOfDay}!
//       </h1>
//     );
//   }
// }

// Functional Component

// function App() {
//   return (
//     <div>
//       <h1>Codes goes here.</h1>
//     </div>
//   );
// }

// Class component

// export default class App extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div>
//         <h1>Code goes here, again.</h1>
//       </div>
//     );
//   }
// }

// function App() {
//   const productComponents = productsData.map((item) => {
//     return (
//       <Product
//         key={item.id}
//         name={item.name}
//         price={item.price}
//         description={item.description}
//       />
//     );
//   });

//   return <div>{productComponents}</div>;
// }

// function App() {
//   const jokeComponents = jokesData.map((joke) => {
//     return <Joke key={joke.id} question={joke.question} answer={joke.answer} />;
//   });

//   return <div>{jokeComponents}</div>;
// }

// function App() {
//   return (
//     <div className="contacts">
//       <ContactCard
//         contact={{
//           name: "Mr. Whiskerson",
//           imgUrl: "http://placekitten.com/300/200",
//           phone: "(515) 555-5555",
//           email: "cat1@meow.com",
//         }}
//       />
//       <ContactCard
//         contact={{
//           name: "Mr. Whiskerson",
//           imgUrl: "http://placekitten.com/400/200",
//           phone: "(515) 555-5555",
//           email: "cat1@meow.com",
//         }}
//       />
//       <ContactCard
//         contact={{
//           name: "Mr. Whiskerson",
//           imgUrl: "http://placekitten.com/400/300",
//           phone: "(515) 555-5555",
//           email: "cat1@meow.com",
//         }}
//       />
//     </div>
//   );
// }

// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";

// function App() {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay;
//   const style = {
//     backgroundColor: "grey", // camel case, no dash
//     fontSize: 24, // no px, will default -- if using other unit of measurement, must defined as a string, in quotes ""
//   };

//   if (hours < 12) {
//     timeOfDay = "morning";
//     style.color = "#04756F";
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon";
//     style.color = "#8914A3";
//   } else {
//     timeOfDay = "night";
//     style.color = "#D90000";
//   }

//   return (
//     <div>
//       <h1 style={style}>Good {timeOfDay}!</h1>
//       {/* <Header />
//       <MainContent />
//       <Footer /> */}
//     </div>
//   );
// }

// export default App;

export default App;

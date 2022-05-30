// TABLE OF CONTENTS

import React from "react";
import ContactCard from "./components/ContactCard";
import ToDoItem from "./components/ToDoItem";

// TO DO APP

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

function App() {
  return (
    <div className="contacts">
      <ContactCard
        contact={{
          name: "Mr. Whiskerson",
          imgUrl: "http://placekitten.com/300/200",
          phone: "(515) 555-5555",
          email: "cat1@meow.com",
        }}
      />
      <ContactCard
        contact={{
          name: "Mr. Whiskerson",
          imgUrl: "http://placekitten.com/400/200",
          phone: "(515) 555-5555",
          email: "cat1@meow.com",
        }}
      />
      <ContactCard
        contact={{
          name: "Mr. Whiskerson",
          imgUrl: "http://placekitten.com/400/300",
          phone: "(515) 555-5555",
          email: "cat1@meow.com",
        }}
      />
    </div>
  );
}

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

export default App;

// TABLE OF CONTENTS

import React from "react";

// TO DO APP

const App = () => {
  return (
    <div>
      <p>clean room</p>
      <input type="checkbox" />
      <p>wash dishes</p>
      <input type="checkbox" />
      <p>vaccumm carpets</p>
      <input type="checkbox" />
      <p>dust shelves</p>
      <input type="checkbox" />
    </div>
  );
};

export default App;

// LECTURE EXERCISES

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

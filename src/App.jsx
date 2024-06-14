import React from "react";

// Button with Class Component
class ClassButton extends React.Component {
  render() {
    return (
      <button className="h-10 px-6 font-semibold rounded-md bg-slate-600 text-white">
        Hello World
      </button>
    );
  }
}

// Button with Function Component
function FunctionalButton() {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">
      Hello World
    </button>
  );
}

// Button with Arrow Function Component
const ArrowButton = () => {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white">
      Hello World
    </button>
  );
};

// Button with Arrow Function Component 2
const ArrowButton2 = (props) => (
  <button className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`}>
    {props.children}
  </button>
);

function App() {
  return (
    <>
      <div className="flex justify-center bg-sky-500 min-h-screen items-center">
        <div className="flex gap-2">
          <ClassButton />
          <FunctionalButton />
          <ArrowButton />
          <ArrowButton2 variant="bg-yellow-600">Buy Now</ArrowButton2>
        </div>
      </div>
    </>
  );
}

export default App;

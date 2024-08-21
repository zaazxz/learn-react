import React from 'react';

// Statefull component
// class Button extends React.Component {
//     render() {
//         return (
//             <>
//                 <button className="h-10 px-6 font-semibold rounded-md bg-sky-500 text-white" type="submit">
//                     Hit Me!
//                 </button>
//             </>
//         );
//     }
// }

// Stateless component
// function ButtonBlack() {
//     return (
//         <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
//             Hit Me!
//         </button>
//     )
// }

// Stateless component (Arrow Function)
// const ButtonRed = () => {
//     return (
//         <button className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white" type="submit">
//             Hit Me!
//         </button>
//     )
// }

const Button = (props) => {

    const { children = 'Click Me', type = 'button', variant = 'bg-sky-500' } = props; 

    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type={type}>
            {children}
        </button>
    )
}

function App() {
    return (
        <div className="bg-blue-700 min-h-screen text-center flex justify-center items-center text-white font-bold">
            <div className="flex gap-x-3">
                <Button variant="bg-black" type="submit">Hit Me!</Button>
                <Button variant="bg-red-500" type="submit">Delete!</Button>
                <Button />
                {/* <ButtonBlack /> */}
                {/* <ButtonRed /> */}
            </div>
        </div>
    );
}

export default App;

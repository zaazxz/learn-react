import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";

function App() {
    return (
        // Pengenalan Atomic Design
        // <div className="bg-blue-700 min-h-screen text-center flex justify-center items-center text-white font-bold">
        // <div className="flex gap-x-3">
        // <Button variant="bg-black" type="submit">Hit Me!</Button>
        // <Button variant="bg-red-500" type="submit">Delete!</Button>
        // </div>
        // </div>

        // Implementasi Non Atomic Design
        // <div className="flex justify-center min-h-screen items-center">
        //     <div className="w-full max-w-xs">
        //         <h1 className="text-3xl mb-2 font-bold text-blue-600">Login</h1>
        //         <p className="font-medium text-slate-500 mb-8">
        //             Welcome, please enter your details.
        //         </p>
        //         <form action="">
        //             <div className="mb-4">
        //                 <label
        //                     htmlFor="email"
        //                     className="block text-slate-700 text-sm font-bold mb-2"
        //                 >
        //                     E-mail
        //                 </label>
        //                 <input
        //                     type="email"
        //                     className="text-sm border rounded w-full py-2 px-2 text-slate-700 placeholder:opacity-50"
        //                     placeholder="example@gmail.com"
        //                 />
        //             </div>
        //             <div className="mb-4">
        //                 <label
        //                     htmlFor="password"
        //                     className="block text-slate-700 text-sm font-bold mb-2"
        //                 >
        //                     Password
        //                 </label>
        //                 <input
        //                     type="password"
        //                     className="text-sm border rounded w-full py-2 px-2 text-slate-700 placeholder:opacity-50"
        //                     placeholder="*****"
        //                 />
        //             </div>
        //             <Button variant="bg-blue-600 w-full">Login</Button>
        //         </form>
        //     </div>
        // </div>

        // Implementasi Atomic Design
        <div className="flex justify-center min-h-screen items-center">
            {/* <LoginPage /> */}
            <RegisterPage />
        </div>
    );
}

export default App;

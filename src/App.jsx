import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Error from "./Pages/Error";
import NavBar from "./components/NavBar";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <NavBar />
      <main className="h-screen w-full flex flex-col justify-center items-center bg-zinc-50 dark:bg-zinc-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

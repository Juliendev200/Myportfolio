import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Apropos from "./routes/Apropos";
import Logement from "./routes/Logement";

// // Change the original path to home path //
// const App = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/Apropos",
//     element: <Apropos />,
//   },
//   {
//     path: "/logement",
//     children: [
//       {
//         path: '/logement/:id',
//         element: <Logement />,
//       },
//     ],
//   },
// ],
// );
//

export default function App() {
  const basename = import.meta.env.MODE === "production" ? "/Myportfolio" : "";
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index path="/Home" element={<Home />} />
        <Route path="/website/:id" element={<Logement />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </BrowserRouter>
  );
}

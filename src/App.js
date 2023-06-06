import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/users?limit=10"
        );

        const usersData = response.data.users.map((user) => {
          return {
            id: user.id,
            firstname: user.firstName,
            lastname: user.lastName,
            image: user.image,
            phone: user.phone,
            gender: user.gender,
            city: user.address.city,
            about: user.company.title,
          };
        });

        console.log(usersData);
      } catch (err) {
        console.log(err.message);
      }
    }

    // getUsers();
  }, []);
  return (
    <Router>
      <Routes></Routes>
    </Router>
  );
}

export default App;

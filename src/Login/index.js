// import React, { useState } from "react";


// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (username === "admin" && password === "123") {
//       localStorage.setItem("token", "T");
//                                                              ;
//     } else {
//       alert("Invalid username or password");
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Login Page</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />

//       <button type="submit" className="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import './style.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(username);
  console.log(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password
    };
    console.log(data);

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" className='btn btn-primary'>Login</button>
      </form>
    </div>
  );
};

export default Login;

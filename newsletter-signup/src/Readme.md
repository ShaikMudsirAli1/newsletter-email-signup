import { useState } from "react";
import styled from "styled-components";
import UiComponents from "./UiComponents";
import db from "./firebase.js";
import firebase from "firebase/compat/app";
// import "firebase/compat/database";
import "firebase/compat/firestore";

function App() {
const [input, setInput] = useState("");
const [message, setMessage] = useState("");

// inputHandler function.
const inputHandler = (e) => {
setInput(e.target.value);
};

// submitHandler function.
const submitHandler = (e) => {
e.preventDefault();

    if (input) {
      console.log(input);

      // add to FireBase LOGIC
      db.collection("emails")
        .add({
          email: input,
          time: firebase.firestore.FieldValue.serverTimestamp(),
        })
        // setInput("");
        // setMessage("Thank you for subscribing");
        // setTimeout(() => {
        //   setMessage("");
        // }, 3000);

        .then(() => {
          setInput(""); // Clear the input field
          setMessage("Thank you for subscribing");
          setTimeout(() => {
            setMessage("");
          }, 3000);
        })
        .catch((error) => {
          console.error("Error adding email to Firebase:", error);
        });
    }

};

return (
<Div className="App">
<Container>
<UiComponents />
<Form onSubmit={submitHandler}>
<H2>Subscribe to our Newsletter</H2>
<Input type="email" name="email" id="email" onChange={inputHandler} />
<Button type="submit">Submit</Button>
</Form>
{/_ <Alert>{message}</Alert> _/}
</Container>
</Div>
);
}

// Using Styled Components for styling.
const Div = styled.div`  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  overflow: hidden;`;

const Container = styled.div`  position: relative;`;

const Form = styled.form`  position: relative;
  padding: 3rem;
  min-width: 500px;
  border-radius: 5px;
  box-shadow: 0 0 30px #333;
  background: rgba(255, 255, 255, 0.1);
  border: solid 1px rgba(255, 255, 255, 0.2);
  background-clip: padding-box;
  backdrop-filter: blur(10px);
  z-index: 2;`;

const H2 = styled.h2`  color: #fff;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;`;

const Input = styled.input`  padding: 10px;
  border-radius: 10px 0 0 10px;
  border: none;
  width: 60%;
  outline: none;
  color: #cf1d22;`;

const Button = styled.button`  background-image: linear-gradient(
    to right,
    #eb3349 0%,
    #f45c43 51%,
    #eb3349 100%;
  );
  width: 20%;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  border-radius: 0 10px 10px 0;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: black;
  color: white;
  &: hover {
    background-position: right center;
  }`;
export default App;

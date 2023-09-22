import { useState } from "react";

const StateFullForm = () => {

    const [email, setEmail] = useState(null);
    const [text, setText] = useState(null);
    const [password, setPassword] =useState(null);

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(email, text, password);
    }
    const handleEmailChange = e => {
        const value = e.target.value;
        setEmail(value)
        // console.log(value);
    }
    const handleText = e => {
        const value = e.target.value;
        setText(value);
    }
    const handlePassword = e => {
        const value = e.target.value;
        setPassword(value);
    }
  return (
    <div>
        <h3 className="text-3xl text-teal-800 font-bold text-center">StateFullForm</h3>
      <form
        onSubmit={handleSubmit}
        className="space-y-3 text-center h-52 mt-5 pt-10"
      >
        <input onChange={handleText}
          className="bg-neutral-400 shadow-lg border-teal-200 border-2"
          type="text"
          name="name"
        />
        <br />
        <input onChange={handleEmailChange}
          className="bg-neutral-400 shadow-lg border-teal-200 border-2"
          type="email"
          name="email"
        />
        <br />
        <input
          className="bg-neutral-400 shadow-lg border-teal-200 border-2"
          type="password"
          name="password"
        />
        <br />
        <input onChange={handlePassword}
          className="border-2 border-amber-800 rounded-lg px-4 py-1"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default StateFullForm;

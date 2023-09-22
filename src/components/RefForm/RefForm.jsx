import { useEffect } from "react";
import { useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, [])
    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
  return (
    <div>
      <h3 className="text-3xl text-teal-800 font-bold text-center">
        Form handleing by Ref
      </h3>
      
      <form
        onSubmit={handleSubmit}
        className="space-y-3 text-center h-52 mt-5 pt-10"
      >
        <input ref={nameRef}
          className="bg-neutral-400 shadow-lg border-teal-200 border-2"
          type="text"
          name="name"
        />
        <br />
        <input ref={emailRef}
          className="bg-neutral-400 shadow-lg border-teal-200 border-2"
          type="email"
          name="email"
        /><br />
         <input ref={passwordRef}
          className="bg-neutral-400 shadow-lg border-teal-200 border-2"
          type="password"
          name="password"
        />
        <br />
        <input
          className="border-2 border-amber-800 rounded-lg px-4 py-1"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default RefForm;

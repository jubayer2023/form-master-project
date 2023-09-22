import useCustomHook from "../Hooks/Hooks";

const CustomHookForm = () => {
    const [name, handleNameChange]  = useCustomHook('Robbin');
    const [email, handleEmailChange]  = useCustomHook('Robbin');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email);
    }
    return (
        <div>
           <h3 className="text-3xl text-teal-800 font-bold text-center">Form handleing by event</h3>
      <form
        onSubmit={handleSubmit}
        className="space-y-3 text-center h-52 mt-5 pt-10"
      >
        <input onChange={handleNameChange}
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
          className="border-2 border-amber-800 rounded-lg px-4 py-1"
          type="submit"
          value="Submit"
        />
      </form> 
        </div>
    );
};

export default CustomHookForm;
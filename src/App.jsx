import "./App.css";
// import RefForm from "./components/RefForm/RefForm";
import CustomHookForm from "./components/customHookForm/customHookForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StateFullForm from "./components/StateFullForm/StateFullForm";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center font-bold bg-amber-500 text-white p-2 m-2">
        Vite + React
      </h1>

      <div className="max-w-screen-md mx-auto bg-neutral-200">
        {/* <SimpleForm></SimpleForm>
        <StateFullForm></StateFullForm> */}
        {/* <RefForm></RefForm> */}
        <CustomHookForm></CustomHookForm>
      </div>
    </>
  );
}

export default App;

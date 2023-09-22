import { useState } from "react";

const useCustomHook = (defaultValue = null) => {
    const [inputValue, setInputValue] = useState(defaultValue);
    const handleChang = e => {
        setInputValue(e.target.value);
    }
    return [inputValue, handleChang];
};

export default useCustomHook;
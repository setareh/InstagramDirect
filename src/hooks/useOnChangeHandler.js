import { useState } from "react";

export const useOnChangeHandler = (initial) => {
    const [value, setValue] = useState(initial);

    const onChangeHandler = (e) =>
        setValue(e.target.value);
        console.log(value)

    return [value, onChangeHandler, setValue]
}
import { useInputContext } from "./Provider"

export default function Form() {
    const [input, setInput] = useInputContext()

    return (
        <>
            <form action="#">
                <Input input={input} setInput={setInput}/>
            </form>
        </>

    )
}


function Input({ input, setInput }) {


    function onChange(textInput) {
        setInput(textInput.target.value)
    }


    return (
        <>
            <input
                type="text"
                value={input}
                onChange={onChange}
            />
        </>
    )
}
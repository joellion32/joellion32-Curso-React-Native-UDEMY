import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState<number>(10);

    const increaseBy = (value: number) => {
        if (count == 0) {
            setCount(1)
        } else {
            setCount(count + value)
        }
    }

    return (
        <>
            <h3>Contador: <small>{count}</small></h3>

            <div>
                <button onClick={() => increaseBy(1)}>+1</button>
                &nbsp;
                <button onClick={() => increaseBy(-1)}>-1</button>
            </div>
        </>
    )
}

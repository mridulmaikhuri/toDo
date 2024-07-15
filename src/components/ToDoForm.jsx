import React, { useState } from "react";
import { UseToDoContext } from "../contexts";

export default function ToDoForm() {
    const [toDo, setToDo] = useState("")
    const {addToDo} = UseToDoContext()

    const add = (e) => {
        e.preventDefault()

        if (!toDo) return

        addToDo({task: toDo, completed: false})
        setToDo("")
    }

    return (
        <form onSubmit = {add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={toDo}
                onChange={(e) => setToDo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )

}
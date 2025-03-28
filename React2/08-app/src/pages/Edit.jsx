import React from "react";
import {useSearchParams} from 'react-router-dom'
import Text from "../components/Text";
import { useState } from "react";

const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0)
    console.log(params.get("url"));
    const addText = () => {
        setCount(count+1);
    }
    
    return (
        <div>
            <div>
                <img className="w-60" src={params.get("url")} alt="" />
                {Array(count).fill(0).map((e) => <Text/>)}
            </div>
            <button onClick={addText} href="#" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add Text
            </button>
        </div>
    )
};
export default EditPage;
import React, { useEffect, useState } from "react";

const Board = () => {
    const [num, setNum] = useState(0);
    const [data1, setData1] = useState('‏‏‎ ‎');
    const [data2, setData2] = useState('‏‏‎ ‎');
    const [data3, setData3] = useState('‏‏‎ ‎');
    const [data4, setData4] = useState('‏‏‎ ‎');
    const [data5, setData5] = useState('‏‏‎ ‎');
    const [data6, setData6] = useState('‏‏‎ ‎');
    const [data7, setData7] = useState('‏‏‎ ‎');
    const [data8, setData8] = useState('‏‏‎ ‎');
    const [data9, setData9] = useState('‏‏‎ ‎');
    useEffect(()=>{
        if((data1 == data2 && data1== data3) && data1 == 'X'){
            console.log("x is winner")
        }
    }, [data1, data2, data3, data4, data5, data6, data7, data8, data9])
    return (
        <div className="">
            <div className="grid grid-cols-3 items-center justify-center h-screen gap-2">
                <div className="flex items-center justify-center bg-slate-400 p-6 m-2 rounded-xl shadow-lg" onClick={()=> {
                    if(data1 === '‏‏‎ ‎'){
                        if(num%2 == 0){
                            setNum(
                                setData1('X')
                            )
                        }
                        else{
                            setNum(
                                setData1('O')
                            )
                        }
                        setNum(num+1);
                    }
                }}>{data1}</div>
                <div className="flex items-center justify-center bg-slate-400 p-6 m-2 rounded-xl shadow-lg" onClick={()=> {
                    if(data2 === '‏‏‎ ‎'){
                        if(num%2 == 0){
                            setNum(
                                setData2('X')
                            )
                        }
                        else{
                            setNum(
                                setData2('O')
                            )
                        }
                        setNum(num+1);
                    }
                }}>{data2}</div>
                <div className="flex items-center justify-center bg-slate-400 p-6 m-2 rounded-xl shadow-lg" onClick={()=> {
                    if(data3 === '‏‏‎ ‎'){
                        if(num%2 == 0){
                            setNum(
                                setData3('X')
                            )
                        }
                        else{
                            setNum(
                                setData3('O')
                            )
                        }
                        setNum(num+1);
                    }
                }}>{data3}</div>
                <div className="flex items-center justify-center bg-slate-400 p-6 m-2 rounded-xl shadow-lg" onClick={()=> {
                    if(data4 === '‏‏‎ ‎'){
                        if(num%2 == 0){
                            setNum(
                                setData4('X')
                            )
                        }
                        else{
                            setNum(
                                setData4('O')
                            )
                        }
                        setNum(num+1);
                    }
                }}>{data4}</div>
                <div className="flex items-center justify-center bg-slate-400 p-6 m-2 rounded-xl shadow-lg" onClick={()=> {
                    if(data5 === '‏‏‎ ‎'){
                        if(num%2 == 0){
                            setNum(
                                setData5('X')
                            )
                        }
                        else{
                            setNum(
                                setData5('O')
                            )
                        }
                        setNum(num+1);
                    }
                }}>{data5}</div>
                <div className="flex items-center justify-center bg-slate-400 p-6 m-2 rounded-xl shadow-lg" onClick={()=> {
                    if(data6 === '‏‏‎ ‎'){
                        if(num%2 == 0){
                            setNum(
                                setData6('X')
                            )
                        }
                        else{
                            setNum(
                                setData6('O')
                            )
                        }
                        setNum(num+1);
                    }
                }}>{data6}</div>
                <div className="flex items-center justify-center bg-slate-400 p-6 m-2 rounded-xl shadow-lg" onClick={()=> {
                    if(data7 === '‏‏‎ ‎'){
                        if(num%2 == 0){
                            setNum(
                                setData7('X')
                            )
                        }
                        else{
                            setNum(
                                setData7('O')
                            )
                        }
                        setNum(num+1);
                    }
                }}>{data7}</div>
                <div className="flex items-center justify-center bg-slate-400 p-6 m-2 rounded-xl shadow-lg" onClick={()=> {
                    if(data8 === '‏‏‎ ‎'){
                        if(num%2 == 0){
                            setNum(
                                setData8('X')
                            )
                        }
                        else{
                            setNum(
                                setData8('O')
                            )
                        }
                        setNum(num+1);
                    }
                }}>{data8}</div>
                <div className="flex items-center justify-center bg-slate-400 p-6 m-2 rounded-xl shadow-lg" onClick={()=> {
                    if(data9 === '‏‏‎ ‎'){
                        if(num%2 == 0){
                            setNum(
                                setData9('X')
                            )
                        }
                        else{
                            setNum(
                                setData9('O')
                            )
                        }
                        setNum(num+1);
                    }
                }}>{data9}</div>
            </div>
        </div>
    )
}

export default Board;
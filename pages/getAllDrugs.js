import React, { useState } from "react";

export default function GetAllDrugs() {
    const [dname, setDname] = useState("")
    const [drugData, setDrugData] = useState([])

    var pt = process.env.PORT || 3000;

    const onChangeHandler = event => {
        setDname(event.target.value);
     };

     const sendName=() => {
        fetch( `https://medicare-india-api.vercel.app/api/get_drug_data?name=${dname}`)
        .then((response) => response.json())
        .then((data) => {
            setDrugData(data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    console.log(drugData)
    }

    return(
        <div className="p-16">
            <div class="container mx-auto">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input 
                    onChange={onChangeHandler}
                    value={dname}
                    type="search" 
                    id="default-search" 
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Drugs..." required/>
                    <button 
                    onClick={sendName}
                    type="submit" 
                    class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </div>

            <div className="p-10 container mx-auto">
            {
                    drugData.length>0 ? <>
                    <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Drug Id
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Drug Name
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {
                                    drugData?.map((i) => (
                                        <p key={i} >{i.id}</p>
                                    ))
                                    }
                                </th>
                                <td class="px-6 py-4">
                                {
                                    drugData?.map((i) => (
                                        <p key={i} >{i.name}</p>
                                    ))
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    </> : <>Please Search for Drug</>
                }
            </div>


        </div>
    )
}
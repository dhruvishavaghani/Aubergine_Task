import { useEffect, useState } from "react"
import Card from "../Components/Card";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';

const Home = () =>{

    const [profile,setProfile] = useState([{}])
    const [country,setCountry] = useState('')
    const [state,setState]  = useState('')
    
    useEffect(()=>{
        async function fetchData(){
            try{
                
                let url = `http://universities.hipolabs.com/search?name=${state}`;
                if (country) {
                  url += `&country=${country}`;
                }

                const response = await axios.get(url)
                .then((res) => {
                
                const data = res.data
                
                setProfile(data)
                console.log("profile ",profile)
            });}
            catch(error){
                console.log("error "+error)
            }
        }

        fetchData();
    },[country,state])

    const handleSelect = (eventKey) => {
        setState(eventKey);
      };

    return(
        <div>
            <div>
            <ul class="flex mt-4 ml-4">
            <li class="mr-3">
    
                <input  placeholder="search country" 
                    onChange={(e)=>{setCountry(e.target.value)}}
                    className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400 outline outline-2 outline-black" />
            </li>
            <li class="mr-3">
            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                state-province
                </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item eventKey="middle">Middle</Dropdown.Item>
            <Dropdown.Item >East</Dropdown.Item>
            <Dropdown.Item >West</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
            </li>
    
        </ul>
        </div>
            <div class="flex justify-center font-bold text-4xl">UNIVERSITIES</div>
            <div class="container m-auto grid grid-cols-3 gap-4">
                {
                    profile.map((data,key) => (
                        <Card name={data.name} country={data.country} url={data.web_pages}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
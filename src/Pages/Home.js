import { useEffect, useState } from "react"
import Card from "../Components/Card";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';

const Home = () =>{

    const [profile,setProfile] = useState([{}])
    const [country,setCountry] = useState(null)
    const [state,setState]  = useState(null)
    
    useEffect(()=>{
        async function fetchData(){
            try{

                const response = await axios.get(`http://universities.hipolabs.com/search?name=${state}&country=${country}`)
                .then((res) => {
                
                const data = res.data
                
                setProfile(data)
                console.log(data[0].web_pages[0])
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
                    className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400" />
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
                    profile.map((data,id) => (
                        <Card name={data.name} country={data.country} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home
import { useEffect, useState } from "react"
import Card from "../Components/Card";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';

const Home = () =>{

    const [profile,setProfile] = useState([{}])
    const [country,setCountry] = useState('turkey')
    const [state,setState]  = useState('middle')
    
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
             <div><ul class="flex">
            <li class="mr-3">
    
                <input  placeholder="search country" 
                    onChange={(e)=>{setCountry(e.target.value)}}
                    className="outline outline-2 outline-black" />
            </li>
            <li class="mr-3">
            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
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
            <h1>UNIVERSITIES</h1>
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
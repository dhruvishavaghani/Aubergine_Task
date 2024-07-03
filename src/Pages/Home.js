import { useEffect, useState } from "react"
import Card from "../Components/Card";
import axios from "axios";

const Home = () =>{

    const [profile,setProfile] = useState([{}])

    // const profile = [{des:5,origin:"india"},{des:6,origin:"us"},
    //     {des:7,origin:"canada"}
    // ]
    
    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await axios.get('http://universities.hipolabs.com/search?name=middle&country=Turkey')
                .then((res) => {
                
                const data = res.data
                console.log("res ",data)
                
                setProfile(data)
                console.log("profile ",profile)
            });}
            catch(error){
                console.log("error "+error)
            }
        }

        fetchData();
    },[])

    return(
        <div>
            <h1>User Profiles</h1>
            <div class="container m-auto grid grid-cols-3 gap-4">
                {
                    profile.map((data,id) => (
                        <Card name={data.name} country={data.country}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
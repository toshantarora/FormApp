import React,{useState,  useEffect} from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Form } from 'semantic-ui-react';
// import {
//     useHistory
//      } from "react-router-dom";

const Form2 = (props) => {
//    const {username, age, gender} = props;
    // let history = useHistory();

 
    
     useEffect(() => {
         getItem();
     }
     ,[] )

    const [userDetails, setUserDetails] = useState({});
    const [data, setUserData] = useState([]);


    const getItem= () => {
        let val = localStorage.getItem('array');
        if(val){
            setUserData([...val]);
        }
    }
    const FormButton = (e) =>{
        e.preventDefault();
        let userData = JSON.parse(localStorage.getItem("data"));
        let obj = {...userData,...userDetails};
        data.push(obj);
        localStorage.setItem("array", JSON.stringify(data));
        
        
    }

    const handleChange = (e) =>{
        
        setUserDetails(userDetails => ({...userDetails, [e.target.name] : e.target.value}))
    }
    return (
           <div style={{marginTop:"15%"}}>
           <h1>Form 2</h1>
           <div style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
           <Form onClick={FormButton}>
                    <Form.Field>
                       <label>Education</label>
                            <input
                                placeholder='Education'
                                name='Education' 
                                type="text" 
                                onChange={handleChange}
                                value={userDetails.Education}
                                />
                    </Form.Field>
                    <Form.Field>
                        <label>Profession</label>
                                <input 
                                    placeholder='Profession'
                                    name='Profession' 
                                    onChange={handleChange} 
                                    value={userDetails.Profession} 
                                />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                                 <input 
                                      placeholder='City' 
                                      name='City'
                                      type="text"
                                      onChange={handleChange} 
                                      value={userDetails.City}

                                      />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
            </Form>
           </div>
           </div>
    
  
           
    
    )
}

export default Form2;

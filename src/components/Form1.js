import React,{useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
 useHistory
  } from "react-router-dom";

import { Button, Checkbox, Form } from 'semantic-ui-react';


// const [options] = 
//        [
//         { key: 'm', text: 'Male', value: 'male' },
//         { key: 'f', text: 'Female', value: 'female' },
//         { key: 'o', text: 'Other', value: 'other' },
//        ]



const Form1 = () => {
    let history = useHistory();


    // useEffect(() => {
       
    // }, []);
    const [userValue, setUserValue] = useState([])
   
    const formSubmit = (event) => {
        event.preventDefault();
       
           localStorage.setItem("allUserData" , JSON.stringify(userValue))
           history.push("form2");
        //         let array = [];
        //     let products = localStorage.getItem("allProducts");
        //     if(products == undefined){
        //     let obj = userValue;
        //         // obj["name"] = userValue;
        //         array.push(obj)
        //         localStorage.setItem("allProducts", JSON.stringify(array));
        //   }
        //    else
        //   {
        //   //condition to check if already exists
        //     products = JSON.parse(products);  // [{name : "products"}]
        //     let obj = userValue;
        //     // obj["name"] = userValue;
        //     products.push(obj);
        //     localStorage.setItem("allProducts", JSON.stringify(products));
        //     history.push("form2");
        //  }
           
     
       
    }

    const handleChange = (event) =>{
       
        setUserValue(userValue => ({ ...userValue, [event.target.name]: event.target.value }));
        event.persist();
    }
    return (
       
           <div style={{marginTop:"15%"}}>
           <h1>Form 1</h1>
           <div style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
           <Form onSubmit={formSubmit}>
                    <Form.Field>
                       <label>User Name</label>
                       <input placeholder='Username' name='username' type="text" value={userValue.username} onChange={handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Age</label>
                        <input placeholder='Age' name='age' value={userValue.age} onChange={handleChange} />
                    </Form.Field>

                    <Form.Field>
                        <label>Gender</label>
                        <input placeholder='Gender' name='gender' value={userValue.gender} onChange={handleChange} />
                    </Form.Field>
                   
                         {/* {
                      options.gender.map((item,index) => {
                        return(<option key={index}>{item.text}</option>)
                      })
                    } */}

                    {/* <Form.Field>
          <Radio
            label='male'
            name='male'
            // value='this'
            // checked={this.state.value === 'this'}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Female'
            name='Female'
            // value='that'
            // checked={this.state.value === 'that'}
            onChange={handleChange}
          />
        </Form.Field> */}
                    <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Next</Button>
            </Form>
           </div>
           </div>
           
    
    )
}

export default Form1;

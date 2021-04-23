import React, {useState, useEffects} from 'react';
import multipleInput from '../Style/MultipleInput.css';

const MultipleInputs = () => {
    const [person, setPerson] = useState({
        name:'',
        email:'',
        dob:'',
        city:''
    });
    const [people, setPeople] = useState([]);
   
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);
        setPerson({...person,[name]:value})
        console.log(person);
    }
    const [newPerson, setNewPerson] = useState([]);
    const handleSubmit = (e) => {
e.preventDefault();
console.log("handling the submit")
if(person.name && person.email) {
    const newPerson = {...person, id:new Date().getTime().toString()}
    setPeople([...people,newPerson ])
    setPerson({name:'',
             city: '',
             email:'',
             dob:'' })
}
 

    }
    return (
        <div className="form-container">
             <form className="form">
                        <div className="input-container">
                            <label htmlFor= "name" >Name:</label>
                             <input className="input-text" type ="text" 
                                id="name"
                                 name="name"
                                 value = {person.name}
                                 onChange={handleChange}>

                             </input>
                            </div>
                           
                            <div className="input-container">
                                <label htmlFor= "dob" >DOB:</label>
                                <input className="input-text" type ="date"
                                 id="dob" 
                                 name="dob"
                                  value = {person.dob}
                                  onChange={handleChange}></input>
                            </div>
                            <div className="input-container">
                                <label htmlFor= "city" >City:</label>
                                <input className="input-text" type ="text"
                                 id="city" 
                                 name="city" 
                                 value = {person.city}
                                  onChange={handleChange}></input>
                            </div>
                            <div className="input-container">
                                <label htmlFor= "email" >Email:</label>
                                <input className="input-text" type ="text"
                                 id="email" 
                                 name="email" 
                                 value = {person.email}
                                  onChange={handleChange}></input>
                            </div>
                            <div className="button-container">
                                <div></div>
                        <button type="submit" className="btn"  onClick = {handleSubmit}> Add Person</button>
                        </div>
            </form>
            <div className="mapped-items"> {

                people.map((item) => {
                    const {name, city, dob, email, id} = item;
                //    return ( <div id ={id}> 
                //        <h1>{name}</h1>
                //        <p>{city}</p>
                //        <p>{dob}</p>
                //        <p>{email}</p>
                //    </div> )
                    
                return (<div className="list-container" key={id}>
                <div className="left-container">
                    {/* <img className="image" src ={image} alt={name} /> */}
                    <h1 className="heading">{name}</h1>
                    <p className="age">Age: {city}</p>
                </div>
                <div className="right-container">
                    <p className="email"> {email}</p>
                    {/* <i class="lni lni-plus"></i> <br></br>
                    <i class="lni lni-minus"></i> */}
                    <p className="gender"> {dob}</p> 
                    <a className="github" href={id}>github</a>   
                 </div>
                    
           
       </div>);
                    

                })
            }</div>
        </div>
    )
}

export default MultipleInputs

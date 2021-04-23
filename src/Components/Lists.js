import React,{useState} from 'react';
import data from './Data';
import List from '../Style/List.css';

const Lists = () => {
const [people,setPeople] = useState(data);
console.log(data);
    return (
        <div className="container">
           {data.map((person) => {
               const {id,name,github,age,email, gender} =person;
               return (<div className="list-container" key={id}>
                        <div className="left-container">
                            {/* <img className="image" src ={image} alt={name} /> */}
                            <h1 className="heading">{name}</h1>
                            <p className="age">Age: {age}</p>
                        </div>
                        <div className="right-container">
                            <p className="email"> {email}</p>
                            {/* <i class="lni lni-plus"></i> <br></br>
                            <i class="lni lni-minus"></i> */}
                            <p className="gender"> {gender}</p> 
                            <a className="github" href={github}>github</a>   
                         </div>
                            
                   
               </div>);
           })}
        </div>
    )
}

export default Lists

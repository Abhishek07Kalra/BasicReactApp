import db from './firbase';
import {useState} from 'react';
import './read.css';
const Read = ()=>{

    const [info , setInfo] = useState([]);

    window.addEventListener('load', () => {
        Fetchdata();
      });

    const Fetchdata = ()=>{
        db.collection("data").get().then((querySnapshot)=>{
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);
                setTimeout(()=>{
                    console.log(info);
                }, 10000); 
            });
        })
    }
    return (
        <div>
            <center>
            <h2>Student Details</h2>
            </center>
        
        {
            info.map((data)=>(
            <Frame course={data.CourseEnrolled} name={data.Nane} age={data.Age}/>
            ))
        }
        </div>

    );
}
const Frame = ({course , name , age})=>{
    console.log(course + " " + name + " " + age);
    return (
        <center>
            <div className="div">
                <p>NAME : {name}</p> 
                <p>Age : {age}</p>
                <p>Course : {course}</p> 
            </div>
        </center>
    
    );

}
export default Read;
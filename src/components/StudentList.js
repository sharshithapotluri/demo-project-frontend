import {useEffect, useState } from "react";
import Axios from "axios";
import StudentListRow from "./StudentListRow";


function StudentList()
{
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://crud-deployment3.onrender.com/students/")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[]);


    const ListItems = () => {
        return arr.map((val,ind) => {  //[{_id,name,email,rollNo},{},{}]
            return <StudentListRow obj={val} />
        })
    }
    return (
        <table style={{maxWidth:"60%",margin:"50px auto"}} class="table table-success table-bordered table-striped">
            <thead>
                <tr style={{backgroundColor:"forestgreen"}}>
                    <th class="text-center">Name</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Roll Number</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}
export default StudentList;
import {useState} from "react";
import MockData from '../MOCK_DATA.json'
 
 const SearchTable = () =>{
    const [searchTerm, setsearchTerm] = useState("")
    return (
        <div className="container">
            <input 
            type = "text"
            placeholder = "Search.." 
            className="form-control"
             style={ {marginTop: 60, marginBottom: 20, width: "50%" }}
             onChange ={(e)=>{
                setsearchTerm(e.target.value);
             }}
             />
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                    <th>Row No</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {MockData.filter((val) => {
                        if(searchTerm === '') {
                            return val;
                        } else if (
                            val.name.toLowerCase().includes(searchTerm.toLowerCase())||
                            val.email.toLowerCase().includes(searchTerm.toLowerCase())
                        ) {
                            return val;
                        }
                    }).map((m)=> (
                        <tr key = {m.id}>
                            <td>{m.id}</td>
                            <th>{m.name}</th>
                            <th>{m.email}</th>
                            <th>{m.gender}</th>
                            <th>{m.phone}</th>
                            <th>{m.country}</th>

                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
export default SearchTable;
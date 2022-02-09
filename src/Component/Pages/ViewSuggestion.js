import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { suggestionActionId } from '../../Action/SchoolAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';



export default function ViewSuggestion(props) {
    console.log(props.id)
 
    const data = useSelector((state)=>state.AllSchools.sugg);
    console.log(data);

    const dispatch = useDispatch();
    

    useEffect(() => {
        fetchInduival();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

   
   const fetchInduival = async() => {
       const result = await axios.get(`http://localhost:8777/suggestion/getById/${props.id}`);
       
       dispatch(suggestionActionId(result.data));
       console.log(result.data);
   }



  return (<div>
    <div className="container">
      <div className="row p-5">
        <div className="h4 p-2">id: {data.id}</div>
        <div className=" h4 p-2">name : {data.name}</div>
        <div className="h4 p-2">about : {data.about}</div>
        </div>
        </div>
        </div>
  );
}

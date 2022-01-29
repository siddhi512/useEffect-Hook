import React ,{useEffect,UseState} from 'react';

const forms = () => {
    const [count,setCount]=useState(1)
    useEffect(()=>{
        console.warn(count)
    },[count==5])
    return(
       <div>
           <h1>Use Efffect Hooks in React js....{count}</h1>
           <button onClick={()=>setCount(count+1)}>Update State</button>

       </div>
       );
};

export default forms;

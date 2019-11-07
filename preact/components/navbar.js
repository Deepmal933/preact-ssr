import {h} from 'preact'
import { useEffect,useState } from 'preact/hooks';

export const Navbar = () =>{
    const [data,setData] = useState();
  
    
    return <div class="navbar">Navigation
    {
        data && <p>{data.name}</p>
    }
    </div>
}
import { myAxios } from "./helper";

export  const registerPlayer=(player)=>{
    return myAxios.post("/player",player)
     .then((response)=>response.json());  
};
export  const getPlayer=()=>{
    return myAxios.get("/player")
     .then((response)=>response.data);  
};
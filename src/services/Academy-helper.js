import { myAxios } from "./helper";

export  const registerAcademyOwner=(owner)=>{
    return myAxios.post("/academyOwners",owner)
     .then((response)=>response.json());  
};
export  const getOwner=()=>{
    return myAxios.get("/academyOwners")
     .then((response)=>response.data);  
};
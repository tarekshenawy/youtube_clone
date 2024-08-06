export  const Api_key = "AIzaSyA2A6ifakhNfKHGpd8yfoO-VP27iVdtrtM";

export const  convert_value=(value)=>{
    if(value >=1000000){
        return Math.floor(value/1000000) + "M";
    }else if(value >= 1000){
        return(Math.floor(value/1000)) +  "k";
    }else{
        return(value);
    }
}
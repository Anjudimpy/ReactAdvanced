// create post context here

// Create custom hook that returns context value here

// create a custom saved post provider here with add and reset functions
import {createContext, useContext, useState } from "react";
 
export const postContext = createContext()

export function useValue(){
    const value = useContext(postContext)
    return value

}

function CustomContext({children}){

  const [savedPosts, setSavedPosts] = useState([]);
  const [ total, setTotal] = useState(0)
  const [showSavedList, setShowSavedList] = useState(false);

    function handleSave(detail){
        
         setSavedPosts([...savedPosts, {...detail}])
         setTotal(total+1)
     } 
     
     function reset(){
        setTotal(0)
        setSavedPosts([])
     }

  return(
    <postContext.Provider value={{handleSave,showSavedList,setShowSavedList, savedPosts, total, reset}}>
        {children}
    </postContext.Provider>
  )
}

export default CustomContext
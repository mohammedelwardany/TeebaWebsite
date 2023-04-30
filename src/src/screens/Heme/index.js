
import React, { useEffect } from "react"


const Home = ()=> {

    useEffect(() => {
      console.log("hii")

    }, [])
    



    return(
        <div style={{backgroundColor:"red",height:200,width:300}}>
            <p>hello</p>

        </div>
    
        )
}
export {Home}
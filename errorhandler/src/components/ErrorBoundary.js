import React, { Component } from 'react'

 class ErrorBoundary extends Component {
     constructor(props){
         super(props)
         this.state={
             hasError:false
         }

     }
     static getDrivedStateFromError(error){
         return {
             hasError:true
         }
     }

      componentDidCatch(error, info){
        //logErrorToMyService(error,info)
        console.log(error, "errorrrrr");
        console.log(info, "error informationnnnn");
      }
    render() {
        if(this.state.hasError){
            return <p>somthing went wrong!</p>
        }
            return this.props.children
        
        
    }
}
export default ErrorBoundary
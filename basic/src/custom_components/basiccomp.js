import React,{Component} from 'react'

const Base = ()=>{
    return (
        <div>This is a simple functional component</div>
    );
}

class  BaseSample extends Component{
   render(){
    return(
        <h3>This is a simple Class component</h3>
    )
   }
} 

export  {Base,BaseSample};
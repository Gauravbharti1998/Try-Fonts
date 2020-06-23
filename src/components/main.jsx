import React from 'react'
class Main  extends React.Component
{
    constructor(){
        super()
        this.state={
            value: "",
            fontFamily :'Sans-serif'
        }
    }
    update(temp)
    {
        this.setState({value:temp.target.value})
    }
    changeFont(prop)
    {
        this.setState({
            value:this.state.value,
            fontFamily:prop.target.name
        })
    }
    render()
    {   
        let style={
            textAlign : 'center',
            fontFamily :'Georgia',
            fontSize :'35px'
        }
        let style1={
            fontFamily :this.state.fontFamily,
            fontSize :'30px'
        }
        return(
            <div>
                <h1 style={style}>Enter your text here,</h1>
                <textarea value ={this.state.value} onChange ={(temp)=>{this.update(temp)}} fontSize='18px' cols='150' rows='10'></textarea><hr/>
                <button className='button' name="Arial" onClick={(prop)=>this.changeFont(prop)}>Arial</button>
                <button className='button' name ="cursive" onClick={(prop)=>this.changeFont(prop)}>Cursive</button>
                <button className='button' name="monospace" onClick={prop=>this.changeFont(prop)}>monospace</button>
               <button className='button' name="Lucida Console" onClick={(prop)=>this.changeFont(prop)}>Lucida Console </button>
               <button className='button' name="Impact" onClick={prop=>this.changeFont(prop)}>Impact</button>
               <button className='button' name="Comic Sans MS" onClick={(prop)=>this.changeFont(prop)}>Comic Sans MS</button>
                <p style={style}> Your text looks like ,</p>
                <p style={style1}>{this.state.value}</p>
               
            </div>
        )
    }
}
export default Main
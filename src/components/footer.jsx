import React from 'react'
class Footer extends React.Component
{
    render()
    {
        const style={
            fontFamily : 'cursive',
            textAlign : 'right',
            marginBottom : '10%'
        }
        return(
            <div>
            <h4 style={style}>Made by Gaurav</h4>
            <h4><a href ="https://github.com/Gauravbharti1998/Try-Fonts">Click to see GitHub Repo</a></h4>
            </div>
        )
    }
}
export default Footer
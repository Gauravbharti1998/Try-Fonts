import React from 'react'
class Header extends React.Component
{
    render()
    {
        let style={
            textAlign : 'center',
            fontFamily :'monospace',
            marginTop :'4%',
            fontSize :'35px',
            color : 'white'

        }
        return(
            <div class="topnav">
                <a class="active" href="reload()">Home</a>
                <h1 style={style}>Hey, Wana check out your  words in these FONTS </h1>
            </div>
            )
    }
}
export default Header
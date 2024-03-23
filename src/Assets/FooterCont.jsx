import React from 'react'
import FooterName from './FooterName'
import FooterTextHeading from './FooterTextHeading'

const FooterCont = ({heading , array}) => {
    // <FooterTextHeading text={heading}/>
    return (
           array &&  array.map((curEl,ix)=>{
        return <FooterName text={curEl}/>
    })
    )

}

export default FooterCont

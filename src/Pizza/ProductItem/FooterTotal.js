import React from 'react'
import '../style.css'
function FooterTotal({Total}) {
  return (
      <>
    <div className='container_footer'>
       <p>Total</p>
       <p>{Total()}$</p>
    </div>
    <div className='checkout'>
       <button className='checkout_button'>
           Checkout
       </button>
    </div>
      </>
  )
}

export default FooterTotal
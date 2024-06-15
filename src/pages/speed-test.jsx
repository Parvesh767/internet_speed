import React from 'react'
// import { ReactInternetSpeedMeter } from 'react-internet-meter'
// import 'react-internet-speed-meter/dist/index.css
import Speed from './speed'



export default function speed() {
  // const upload_statues = useState(flase);

  const img = require("../pexels-zhangkaiyv-842654.jpg");
  const submit_handler = ()=> {
      console.log("log printed");
  };

  // const img = require('../pexels-zhangkaiyv-842654.jpg')
  return (
   
    <div className='primary'>
      <div className="i_speed">
        <h1>Your Internet Speed is </h1>
        <Speed/>
      </div>
    </div>
   
  )
}

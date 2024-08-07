import React, { useState } from 'react'
import { ReactInternetSpeedMeter } from 'react-internet-meter';

export default function Speed() {
    const [checkSpeed, SetCheckSpeed] = useState("0");
    const [onLoad, setOnLoad] = useState(true)

    return (
        <div>
            <ReactInternetSpeedMeter
                txtSubHeading="Internet connection is slow"
                outputType="" // "alert"/"modal"/"empty"
                customClassName={null}
                pingInterval={200} // milliseconds
                txtMainHeading="Opps..."
                thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
                threshold={50}
                imageUrl="https://images.pexels.com/photos/3396664/pexels-photo-3396664.jpeg?cs=srgb&dl=pexels-josiah-farrow-3396664.jpg&fm=jpg"
                downloadSize="1561257" //bytes
                callbackFunctionOnNetworkDown={(data) =>
                    setOnLoad(false)
                }
                callbackFunctionOnNetworkTest={(data) => SetCheckSpeed(data)}
                
            />

            {
                onLoad ?
                <span>...</span>
                :
                <span className="">{checkSpeed} MB/s</span>
            }
            

        </div>
    );
}

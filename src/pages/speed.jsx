import React from 'react'
import { ReactInternetSpeedMeter } from 'react-internet-meter'

export default function speed() {

    const [checkSpeed, SetCheckSpeed] = React.useState(
        "Finding internet speed."
    );

    return (
        <div>
            <ReactInternetSpeedMeter
                txtSubHeading="Internet connection is slow"
                outputType="" // "alert"/"modal"/"empty"
                customClassName={null}
                pingInterval={2000} // milliseconds
                txtMainHeading="Opps..."
                thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
                threshold={50}
                imageUrl="https://images.pexels.com/photos/3396664/pexels-photo-3396664.jpeg?cs=srgb&dl=pexels-josiah-farrow-3396664.jpg&fm=jpg"
                downloadSize="1561257" //bytes
                callbackFunctionOnNetworkDown={(data) =>
                    console.log(`Internet speed : ${data}`)
                }
                callbackFunctionOnNetworkTest={(data) => SetCheckSpeed(data)}
            />

            <div className="card-body mt-4">
                <span className="display-1">{checkSpeed} MB/s</span>
            </div>

        </div>
    );
}

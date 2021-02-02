import { getMintCheckpoints, getTestMintCheckpoints } from '../Query'
import React from 'react';
import { useQuery } from '@apollo/client';

function UserViewer() {

	const { loading, error, data } = useQuery(getTestMintCheckpoints);

	React.useEffect(() => {
	    if (!loading && !error && data) {
	        console.log({ data });
	    } else if (error) {
	    	console.log("ERROR!");
	    } else if (!loading) {

	    	console.log("Complete!");
	    }
	}, [loading, error, data]);


	if (!data) {
		return <div/>;
	}

	const mintCheckpoints = data.mintCheckpoints.map( mintCheckpoint => ({time: parseInt(mintCheckpoint.unixTimestamp), value: parseInt(mintCheckpoint.tokensMinted)}));
	console.log("Mint checkpoints aquired: ", mintCheckpoints);

  return (
    <div className="TEST">
     <TimeSeriesChart
     	chartData={mintCheckpoints}
     />
    </div>
  );
}

export default UserViewer;

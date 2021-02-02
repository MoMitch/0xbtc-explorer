import { getMintCheckpoints, getTestMintCheckpoints } from '../Query'
import React from 'react';
import { useQuery } from '@apollo/client';

function Explorer() {

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

  return (
    <div className="TEST">
     {"TEST"}
    </div>
  );
}

export default Explorer;

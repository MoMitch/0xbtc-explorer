import { gql } from '@apollo/client';

export const getMintCheckpoints = gql`
    query mintCheckpoints($first: Int!) {
    mintCheckpoints(first: $first) {
       id
	   blockNumber
	   hashrate16
	   hashrate128
    }
  }
`;

export const getTestMintCheckpoints = gql`
query GetTestMintCheckpoints {
	mintCheckpoints(first: 50, orderBy: unixTimestamp, orderDirection:desc) {
   	id
		blockNumber
		hashrate16
		hashrate128
		hashrate1024
		difficulty
		epochCount
		challengeNumber
		maxSupplyForEra
		miningTarget
		tokensMinted
		minterAddress
		unixTimestamp
  }
}
`;
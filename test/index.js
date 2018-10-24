const LinkGenerator = require('./../src');


const test = () => { 
    console.log("here");

    // init link generator
    const linkGenerator = LinkGenerator({
	verificationPK: 'b3c47b3bf28e7d6d38550d9e83a45217156a909627e88cbbb8f378e22993c4b7',
	contractAddress: '0xce5579a97be98d6ed943560389819aafbc7f229c',
	networkId: '3'
    });

    // Usage example:
    // Generating claim link for tokenId #1
    const tokenId = 5;  // nft id, e.g. 1
    const claimLink = linkGenerator.generateLinkNFT(tokenId);
    console.log(claimLink)
}

test();
// create a variable to hold your NFT's
const nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, image) {
  let nft = {
    name: name,
    description: description,
    image: image
  };
  nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    console.log("Name: " + nftCollection[i].name);
    console.log("Description: " + nftCollection[i].description);
    console.log("Image: " + nftCollection[i].image);
    console.log("---------------------------");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total NFTs Minted: " + nftCollection.length);
}

// call your functions below this line

mintNFT("House on the Rock", "This house is built on the rock", "https://www.travelwisconsin.com/uploads/places/63/63a5616d-c353-4c2f-acea-9cfe8472a79c-house-on-the-rock.jpg");
mintNFT("metacrafter", "Metacrafter is one of best platform to learn Web3 program", "image2.png")
mintNFT("Adiddas", "One of the Best brand in the world", "addidas.jpeg")
listNFTs();

getTotalSupply();

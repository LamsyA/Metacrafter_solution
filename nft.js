/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const nftCollection = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, description, image) {
    let NFT = {
        name: name,
        description: description,
        image: image
    }
    nftCollection.push(NFT)
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < nftCollection.length; i++){
        console.log("Name: " + nftCollection[i].name);
        console.log("Description: " + nftCollection[i].description);
        console.log("Image: " + nftCollection[i].image);
        console.log("---------------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs Minted: ",  nftCollection.length);
}

// call your functions below this line

mintNFT("Addidas", "this is the first", "image.png")
mintNFT("House on the Rock", "This house is built on the rock", "https://www.travelwisconsin.com/uploads/places/63/63a5616d-c353-4c2f-acea-9cfe8472a79c-house-on-the-rock.jpg");
mintNFT("metacrafter", "Metacrafter is one of best platform to learn Web3 program", "image2.png")


listNFTs()

getTotalSupply();

# Token Contract

This contract implements a basic token called MetaToken (MTK) with functionalities for minting, burning, and transferring tokens.

## License

This contract is licensed under the GPL-3.0 License. Please see the [SPDX-License-Identifier](https://spdx.org/licenses/GPL-3.0.html) for more details.

## Overview

The Token contract represents a simple token with the following properties:

- `tokenName`: A string representing the name of the token.
- `tokenAbbrev`: A string representing the abbreviation of the token.
- `totalSupply`: An unsigned integer representing the total supply of tokens in circulation.

The contract also includes a mapping named `balance`, which associates token balances with addresses.

## Token Minting

The `mint` function is used to create new tokens and assign them to a specific address. It takes the `sender` address and the desired `_amount` of tokens to be minted as parameters. The function checks that the `_amount` is greater than zero and then increases the total supply and the balance of the `sender` by the specified amount.

## Token Burning

The `burn` function allows the owner of the tokens (specified by the `_sender` address) to burn a certain `_amount` of tokens. However, the function verifies that the caller (`msg.sender`) is the owner of the tokens before executing the burning process. If the verification fails, the function reverts with an error message. The function reduces the total supply and the balance of the `_sender` by the specified `_amount`.

## Token Transfer

The `transfer` function enables token holders to transfer a certain `_amount` of tokens to another `_recipient` address. Before executing the transfer, the function checks the following conditions:
- The `msg.sender` address is not the same as the `_recipient` address.
- The `msg.sender` has a balance greater than or equal to the specified `_amount`.

If all conditions are met, the function deducts the `_amount` of tokens from the `msg.sender` balance and adds them to the `_recipient` balance.

## Usage

To use this token contract, follow these steps:

1. Deploy the Token contract.
2. The initial supply of tokens is set to zero. Use the `mint` function to create new tokens and assign them to a specific address. Specify the sender's address and the desired amount of tokens as parameters.
3. To burn tokens, call the `burn` function and provide the sender's address and the amount of tokens to be burned.
4. Use the `transfer` function to transfer tokens from one address to another. Specify the recipient's address and the amount of tokens to be transferred as parameters.

Make sure to customize the `tokenName` and `tokenAbbrev` variables according to your token's name and abbreviation.

## License

This contract is licensed under the GPL-3.0 License. For details, please see the [SPDX-License-Identifier](https://spdx.org/licenses/GPL-3.0.html) at the beginning of the contract.


# GoCard

GoCard is an on-chain multiplayer collectible card game built on Scroll where the stats of your cards are dynamically generated based on current market prices using Chainlink Price Feeds.

## Vision

Onchain multiplayer collectible card game on Scroll where the stats of your cards are generated based on current market prices using Chainlink Price Feeds

## Description

GoCard is a multiplayer collectible card game where players can open packs of cards and create decks with them. Each card's stats are generated dynamically based on current market prices using Chainlink Data Feeds on Scroll Sepolia.

There are currently 3 types of cards:

- BTC Card
- ETH Card
- LINK Card

Each card's stats are determined by the current market prices. For example, if the current ETH price is $3204.24 USD, we take the first 4 digits of the price, add them together, and then multiply the sum with the corresponding multiplier (1 = low, 2 = medium, 3 = high).

For example, LINK has a high attack, which means a multiplier of 3. If the current LINK price is $14.03 USD, it will give us an attack of 24.

Two players with decks created can play a match. It's a turn-based game where players must choose the card to attack and the card they want to attack with. The UI is updated automatically for each player in real-time, making the game multiplayer.

## How It Works

Players can open packs of cards and create decks with them. Each card's stats are generated based on current market prices using Chainlink Data Feeds on Scroll Sepolia. Players can challenge each other and engage in turn-based matches.

## Hackathon Tracks

GoCard is built for the Scroll Game Track. It's a card game where your cards are generated based on current market prices.

## Demo Link & Smart Contract Link

- [Live Demo Link](https://v0-rt-ex-01-market-clash-nextjs.vercel.app)
- [Smart Contract Address](https://sepolia.scrollscan.com/address/0x4Ad71B13a398466CCC40F98c3B38eeD00A4263e2)

## How to Play

1. Connect your wallet and open a pack of cards.
2. When cards are revealed, create the deck.
3. Go to the players tab and challenge a player.
4. You will be transported to the match page.
5. First, select the card you want to attack, and then the card you want to attack with.
6. Press attack.
7. Wait for the UI to update; now it's your opponent's turn.
8. Enjoy!

## Project Structure

- Contracts: packages/hardhat/MarketClash.sol
- Frontend: packages/nextjs


## Inspiration

Our inspiration for GoCard stemmed from the desire to create an engaging multiplayer collectible card game that integrates real-world market data in a unique and dynamic way. We aimed to leverage blockchain technology and Chainlink Price Feeds to provide players with a novel gaming experience where the value of their cards fluctuates based on current market prices.

## What it does

GoCard is an on-chain multiplayer collectible card game built on Scroll. Players can open packs of cards containing BTC, ETH, and LINK cards, each with dynamically generated stats based on current market prices. They can then create decks and challenge other players to turn-based matches, where strategy and market knowledge play a crucial role in determining the outcome.

## How we built it

We built GoCard using a combination of blockchain technology, smart contracts, and web development tools. The frontend was developed using Next.js, while the smart contracts were written in Solidity and deployed on the Scroll Sepolia Testnet. We integrated Chainlink Price Feeds to fetch real-time market data for card stat generation and leveraged Noir for writing and generating ZKPs.

## Challenges we ran into

Throughout the development process, we encountered several challenges, including:

- Integrating real-world market data into the game dynamics while ensuring fairness and balance
- Designing and implementing the turn-based multiplayer functionality with real-time updates
- Optimizing gas costs and contract efficiency to ensure a smooth gaming experience on-chain
- Addressing security concerns and vulnerabilities in the smart contracts and frontend interface
- Testing and debugging the application across various environments and platforms

## Accomplishments that we're proud of

Despite the challenges we faced, we're proud to have accomplished:

- Successfully integrating Chainlink Price Feeds to dynamically generate card stats based on real-world market prices
- Implementing a user-friendly and intuitive frontend interface for card pack opening, deck creation, and gameplay
- Establishing a secure and robust smart contract architecture to handle game logic and player interactions on-chain
- Creating a captivating gaming experience that combines strategy, skill, and real-world market knowledge

## What we learned

Through the development of GoCard, we gained valuable insights into:

- Integrating external data sources into decentralized applications using Chainlink Price Feeds
- Designing and implementing multiplayer game mechanics on the blockchain
- Optimizing smart contracts for gas efficiency and scalability
- Enhancing user experience and engagement through interactive frontend design and real-time updates

## What's next for GoCard

Looking ahead, we plan to:

- Expand the game with additional card types, abilities, and gameplay features to enhance variety and replayability
- Integrate social and community features to foster player interaction, competition, and collaboration
- Explore opportunities for tokenization, staking, and rewards to incentivize player participation and engagement
- Continuously iterate and improve the game based on user feedback, market trends, and emerging technologies
## Inspiration
Two fold: a) In the last 8 months I went from not knowing what an API was to building really cool stuff! This is an opportunity to practice my craft. b) Naked short selling can go uncontrolled and the prime brokerages who make the money from selling retail DLR's do not share. To bring this issue and address it with a technology (blockchain) that fits the problem is also exciting!

## What it does
It simulates a very simple stock interface and links in the user experience in directly buying and selling DLRs to one another in a semi-decentralized way. 

## How I built it
I decided not to put all transactions on the blockchain as it would be costly and limiting for users. Instead, users create a signed message with their intent to "rent" their holding for a period of time. In the case a buyer is found at the specified price, the transaction to borrow the tokens are put on chain using the signature.

## Challenges I ran into
Time! Also, getting details on the inner workings of DLRs was difficult as the big players like to keep this little profit center on the down low. I also struggled with creating a solid UX.

## Accomplishments that I'm proud of
The business use case is staggeringly important and an area that is not understood by many investors. Proposing an idea where some of these massive profits can be moved away from large banks and put back into the hands of retail investors is a cause worth working on. I'm also proud at how quickly I was able to piece all the moving parts together.

## What I learned
I learned how much I've recently learned by putting this all together so quickly. I also found and used some new packages for a better user experience - I have never used a modul before, for example.

## What's next for Digital Locate Receipt System for Security Tokens
If there is serious interest in the project, I'd love to work on it further. More logic can be put into selling a partial allotment of DLRs, buying a partial allotment. Some UX tweaks and an actual integration into a security token marketplace platform.

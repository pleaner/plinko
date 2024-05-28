# Plinko

## Engine

Plinko is eight consecturive trials of left and right.
That is 256 possiable paths to nine possiable outcomes.
Below is a combinatorics table of the possiable outcomes.

| Bucket | Paths | Probability | Payout |
|--------|-------|-------------|--------|
|   -4   |   1   |      0.4%   |   10   |
|   -3   |   8   |     3.13%   |    5   |
|   -2   |  28   |    10.94%   |    2   |
|   -1   |  56   |    21.89%   |    1   |
|    0   |  70   |    23.34%   |    0   |
|    1   |  56   |    21.89%   |    1   |
|    2   |  28   |    10.94%   |    2   |
|    3   |   8   |     3.13%   |    5   |
|    4   |   1   |      0.4%   |   10   |

Given the above proabailityies and payouts the expected payout per roll is 1.268.
This is much lower than the play price of 10.

With an alternative payout of [0, 5, 10, 50, 100] the expected payout is 8.307 and the game will be more engaging for the player while still being profitable for the host at 10 points per game to play.

Initially I tried to be very clever and adjust the proability of a given direction based of the outcome fo the previous roles. This turnout to not be significantly different from eaqual chance per role in a monte carlo simulation. 

Please see the tests for the outcomes for the Monte Carlo Simulation.

I chose simplictiy, and went with equal oppotunities. 
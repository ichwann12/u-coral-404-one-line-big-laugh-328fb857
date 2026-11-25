# One Line, Big Laugh

[![make.fun · u-coral-404-one-line-big-laugh-328fb857](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)
[![Rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/ichwann12/u-coral-404-one-line-big-laugh-328fb857/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)
[![Reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/ichwann12/u-coral-404-one-line-big-laugh-328fb857/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)

One single hilarious line — 79 characters, far under the 200-character limit — landing entirely on its own. No title, no setup, no explanation.

> My smartwatch congratulated me on 10,000 steps. I was in a taxi the whole time.

## How it works

`main.ts` (Node stdlib only, no network, no wall clock) reads the entry line from `entry.txt` at the repo root and writes it verbatim to the output directory given by `MAKEFUN_BOT_DIR` (falling back to `MAKEFUN_OUTPUT_DIR`).

```sh
MAKEFUN_BOT_DIR=./out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

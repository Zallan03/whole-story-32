# SPEC — Tell a Whole Story in 32 Characters

- Bounty: https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978
- Prize: $2 (1st $2) — closes 27 Nov 00:25 WIB
- Gate: 1–32 characters (MAX 32!)

## Final text (22 characters)

> TheMilkRunWas4YearsAgo

## Why this one wins (judge criteria)

1. **A Wi-Fi name, a joke, a story** — reads exactly like a network name a stranger would see in a phone's list, and it is a joke, not a plain label.
2. **Joke lands on first read** — "the milk run" instantly evokes the dad who went out for milk; "4 years ago" is the punchline: he never came back.
3. **Whole story implied** — a character (dad), a situation (left for milk), something that happened (four years, still gone); the reader fills in the rest without any more words.
4. **Fresh turn on a stock joke** — the "dad went for milk" gag is familiar, but the time stamp ("4 Years Ago") turns it into a specific, dated story instead of repeating the punchline everyone knows.
5. **Tight** — 22 of 32 characters; v2 swapped "Four" for "4", which reads more like a real Wi-Fi name and saves two characters.

## Candidates rejected

- "MyExChangedThePasswordAgain" (29) — implies a story, but the joke is generic ex-drama and the "password changed" gag is well-worn among Wi-Fi names.
- "DadWentForMilk_NeverCameBack" (29) — same story, but it spells out the ending; the final version trusts the reader to get it from "4YearsAgo", which is funnier.
- "SorryTheWiFiDiedWithUs" (23) — short and sad-funny, but the story is vague (who is "us"?) and the joke needs more filling-in than the milk-run version.

## Verification

`node --experimental-strip-types main.ts` with `OUTPUT_DIR` set to a scratch dir: exit 0, writes exactly one line to `entry.txt`, 22 characters, inside the 1–32 gate.

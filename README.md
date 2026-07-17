# Kuiz Fighter

A retro Street Fighter-style quiz game. Answer correctly to attack your opponent. Answer wrongly and they attack you!

## How to play
1. Open `index.html` in a browser (or visit the GitHub Pages link).
2. Choose a topic (Sains or Bahasa).
3. Choose your character. The computer picks a different one.
4. Answer questions. Correct = you punch. Wrong = you get punched.
5. First fighter to reach 0 HP loses.

## How to edit questions
Open any file in the `questions/` folder (e.g. `questions/sains.js`) with Notepad or any text editor.

Each question looks like this:

```js
{
  question: "Apakah planet yang paling besar?",
  answers: ["Bumi", "Musytari", "Zuhal", "Marikh"],
  correct: 1
},
```

- `question` — the question text.
- `answers` — exactly 4 choices.
- `correct` — position of the right answer, counting from 0.
  (0 = first answer, 1 = second, 2 = third, 3 = fourth)

Add, remove, or change questions freely. Just keep the commas between them.

## How to add a new topic
1. Copy `questions/sains.js` to a new file, e.g. `questions/matematik.js`.
2. Change the topic name inside: `registerTopic("Matematik", [ ... ]);`
3. Replace the questions.
4. In `index.html`, find this section and add one line:

```html
<script src="questions/sains.js"></script>
<script src="questions/bahasa.js"></script>
<script src="questions/matematik.js"></script>   <!-- new line -->
```

The new topic button appears automatically on the start screen.

## How to add a new character
1. Create a folder in `assets/characters/` with the character's name.
2. Add these images: `idle1.png` to `idle4.png`, `attack1.png` to `attack3.png`, `hit.png`, `win1.png` to `win3.png`.
3. In `index.html`, add the folder name to this line:

```js
const CHARACTERS = ["aisyah", "hikmah", "adib", "irfan"];
```

## Game settings
In `index.html`, near the top of the script:

- `MAX_HP = 100` — starting health.
- `DAMAGE = 20` — damage per answer (20 means 5 hits to win).

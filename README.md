# ❌ Tic-Tac-Toe Clone ⭕

A classic two-player Tic-Tac-Toe game built with **React**, featuring score tracking, win detection, and a clean responsive UI.

🔗 **Live Demo:** [tic-tac-toe-vmss2727.vercel.app](https://tic-tac-toe-vmss2727.vercel.app/)

---

## Features

- **Two-player local gameplay** — Player X vs Player O, taking turns on the same device
- **Win detection** — Automatically detects all 8 winning combinations (rows, columns, diagonals) and highlights the winning squares
- **Draw detection** — Recognizes when all 9 squares are filled with no winner
- **Score tracking** — Keeps a running score for X wins, O wins, and Draws across multiple rounds
- **Play Again** — Resets the board while preserving the current scoreboard
- **Restart** — Resets the board and clears all scores, with a confirmation prompt to prevent accidental resets
- **Turn indicator** — Displays whose turn it is, color-coded for X and O
- **CSS** — Styling and layout

---

## Tech Stack

| Technology | Role |
|---|---|
| React | UI components and state management |
| CSS | Styling and layout |
| Vercel | Deployment |

---

## Project Structure

```
Tic-Tac-Toe-Clone/
├── index.html            # HTML entry point
├── main.jsx              # React app entry, mounts TicTacToe component
├── TicTacToe.jsx         # Main game component (all game logic)
├── TicTacToe.module.css  # Component-scoped styles
├── package.json
└── README.md
```

---

## Future Scope

- **Single-player mode** — Play against a computer/bot opponent with varying difficulty levels (easy random moves, hard minimax AI)

---

## How to Play

1. Player **X** always goes first.
2. Click any empty square to place your mark.
3. The first player to get **3 in a row** (horizontally, vertically, or diagonally) wins.
4. If all 9 squares are filled with no winner, the game is a **Draw**.
5. Click **Play Again** to start a new round (scores are kept).
6. Click **Restart** to reset everything including scores.
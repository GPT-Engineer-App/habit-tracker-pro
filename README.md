# habit-tracker-pro

# Healthy Habits Competition App Spec

A mobile application to track daily weigh-ins, monitor weight loss, manage habit elimination goals, and visualize progress during a competitive event.

## Screens

### Home Screen

Acts as the central hub for users to navigate the app and see a summary of their progress and the competition.

- **Behavior:** Automatically fetches the latest data on app launch or refresh, displays an overview of personal progress and a leaderboard.
- **Layout:** Consists of a `Header`, `Daily Weigh-In`, `Habit Tracker`, `Progress Graph`, and a `Competition Countdown`.

## Components

### Header

Displays the competition name, user's current ranking, and a logout button.

- **Behavior:** Logout button allows the user to exit their account.
- **Styling:** Fixed at the top with clear typography, using the competition's branding colors.

### Daily Weigh-In

Allows users to enter their weight daily and shows the trend over time.

- **Behavior:** 
  - Provides a form to enter today’s weight.
  - Calculates and displays total weight loss since the competition’s start.
- **Styling:** Clean and simple input area with a submit button, graphical display of weight trend.

### Habit Elimination Entry

A text box where users can specify a habit they aim to eliminate during the competition.

- **Behavior:** 
  - Allows entry and modification until the competition starts.
  - Locks the input post-competition start.
- **Styling:** Text box with a save button, visually changes to a locked state after the competition begins.

### Habit Progress Page

Shows the number of consecutive days the user has successfully avoided the habit.

- **Behavior:** Updates daily based on user confirmation of avoiding the habit.
- **Styling:** Progress bar or streak counter, motivational messages to encourage persistence.

### Competition Countdown

Displays the remaining time until the end of the competition.

- **Behavior:** Dynamic countdown that updates in real time.
- **Styling:** Prominent, urgent design to create a sense of time pressure.

### Additional Features

#### Notifications

Sends reminders for daily weigh-ins and motivational prompts to keep up with habit elimination.

- **Behavior:** Configurable notification settings for daily reminders.
- **Styling:** Consistent with app's overall design theme.

#### Leaderboard

Shows a ranking of participants based on weight loss percentage and days of habit avoidance.

- **Behavior:** Updates in real-time as participants enter their data.
- **Styling:** List view that highlights the user's position differently from others to easily spot.

#### Settings

Allows users to customize their profile, set notification preferences, and view competition rules.

- **Behavior:** Includes forms to adjust user settings and links to informational content about the competition.
- **Styling:** Simple, user-friendly interface for easy navigation.

This spec outlines the essential functionality and layout for the Healthy Habits Competition App, ensuring participants can effectively track their progress, stay motivated, and engage competitively with others.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/habit-tracker-pro.git
cd habit-tracker-pro
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

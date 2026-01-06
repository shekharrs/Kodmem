
# Kodmem™ — Neural Archiving for Developers

Kodmem is a high-performance personal learning platform designed for engineers. It synthesizes logical syntax with biological retention using a refined Spaced Repetition System (SRS) based on the SM-2 algorithm.

## 🏗 Component Architecture & Lifecycle

This application follows a hierarchical structure where `App.tsx` serves as the primary orchestrator. Below is the step-by-step walkthrough of the component initialization and user flow.

### 1. The Entry Point (`index.tsx`)
- **Action:** Mounts the React application.
- **Role:** Imports `App.tsx` and renders it into the DOM root. It ensures `StrictMode` is active for development safety.

### 2. The Root Orchestrator (`App.tsx`)
- **Action:** Initializes the primary state machine.
- **State Managed:** 
  - `view`: Controls whether the user sees the 'landing', 'dashboard', 'review', or 'create' screens.
  - `cards`: Loads persistent data from `localStorage`.
- **First Component Rendered:** By default, it renders the `landing` view.

### 3. The Landing Experience (Step-by-Step Walkthrough)

#### Step A: Visual Foundation (`KnowledgeScene.tsx`)
- **Component:** `HeroScene`
- **Role:** This is the first visual element the user sees. It uses Three.js (via React Three Fiber) to render a low-power, ambient 3D background of "Knowledge Nodes" to set the high-tech, minimal tone.

#### Step B: The Hero Section (`App.tsx`)
- **Typography:** Features the signature "Code Into Permanence" heading using a blend of Inter (Sans) and Playfair Display (Serif Italic).
- **CTA:** Provides the first interaction point—"Launch Lab".

#### Step C: The Interactive Proof (`KodmemComponents.tsx` -> `ReviewDemo`)
- **Component:** `ReviewDemo`
- **Logic:** Before signing in, users interact with a simulated session.
- **Interaction Flow:**
  1. User views a challenge (e.g., Rust Memory Management).
  2. User must "Join Waitlist" (simulated gate) to see the answer.
  3. Upon "unlocking," the component reveals the logic and code snippet.

### 4. The Neural Dashboard (`KodmemComponents.tsx` -> `DashboardStats`)
- **Trigger:** Clicking "Enter Lab".
- **Step 1 (`DashboardStats`):** Aggregates data from the `cards` array to show total inventory and retention grades.
- **Step 2 (`DeckFilter`):** Generates categories based on the `tech` property of stored cards.
- **Step 3 (Grid):** Maps over the `filteredCards` to display individual "Neural Patterns" as cards.

### 5. The Active Recall Engine (`KodmemComponents.tsx` -> `CardReviewSession`)
- **Trigger:** Clicking "Begin Session" when `dueCards.length > 0`.
- **Workflow:**
  1. **Recall Phase:** Displays the `concept` on a 3D-flipping card.
  2. **Reveal Phase:** User clicks to reveal the `explanation` and `code`.
  3. **Assessment Phase:** User selects a grade (Again, Hard, Good, Easy).
  4. **Algorithm:** The `updateSM2` function calculates the new `efactor` and `nextReview` date based on the response.

### 6. Content Archive (`KodmemComponents.tsx` -> `CardCreator`)
- **Trigger:** Clicking "New Pattern".
- **Role:** A specialized form to capture "Patterns".
- **Fields:** Technology (Deck), Concept, Explanation (Logic), and Syntax Reference (Code).

---

## 🛠 Technical Stack
- **Framework:** React 19
- **Styling:** Tailwind CSS (Custom "Nobel Gold" palette)
- **Icons:** Lucide React
- **3D Engine:** React Three Fiber / Three.js
- **Algorithm:** Modified SM-2 (SuperMemo 2)

## 💾 Data Persistence
Kodmem uses `localStorage` to ensure your "Neural Inventory" remains permanent on your machine without requiring a complex backend for demo purposes. Data is synced to the browser's local storage every time the `cards` state updates.



<!-- Steps which will cover to create the Kodmem
1. will create the rotaional 3D circle in our Kodmem background
2. then we will jump into the navbar
3. hero section
4. footer section
5. setting up the email integration to our DB(MongoDB) -->
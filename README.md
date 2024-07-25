# Profit First Distribution Calculator

## Overview

This React application is a simple calculator based on the "[Profit First](https://amzn.to/3LF9lKN)" method by Mike Michalowicz. It's designed to help ME quickly determine how to distribute income across different accounts each time my frelance business generates income. It's based on my percentages, but anyone could reconfigure it.

The [Profit First](https://amzn.to/3LF9lKN) method advocates for a proactive approach to business finances, ensuring that profit is prioritized and expenses are managed effectively.

## Features

- Simple, user-friendly interface
- Instant calculation of fund distribution
- Responsive design using Tailwind CSS
- Based on the following Profit First allocation:
  - Business Profit: 15%
  - Owner's Pay: 45%
  - Operating Expenses: 25%
  - Taxes: 15%

## Technology Stack

- React
- Vite (for fast development and building)
- Tailwind CSS (for styling)

## Setup and Running

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   ```

## Usage

1. Enter the total amount of income you want to distribute in the input field.
2. The application will automatically calculate and display the breakdown of how much should be allocated to each account based on the Profit First percentages.

## Project Structure

- `App.jsx`: Main application component
- `components/`:
  - `AmountInput.jsx`: Component for user input
  - `BreakdownTable.jsx`: Component to display the calculated breakdown
  - `Layout.jsx`: Wrapper component for consistent layout

## Customization

You can adjust the percentage allocations in the `calculateBreakdown` function within `App.jsx` if you wish to modify the distribution ratios.


## Acknowledgements

This project is inspired by the "[Profit First](https://amzn.to/3LF9lKN)" method developed by Mike Michalowicz. For more information about the Profit First approach, please refer to Mike Michalowicz's book "[Profit First: Transform Your Business from a Cash-Eating Monster to a Money-Making Machine](https://amzn.to/3LF9lKN)".


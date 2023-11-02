[![End to End tests](https://github.com/ryosuke1256/Todo/actions/workflows/e2e.yml/badge.svg?branch=main)](https://github.com/ryosuke1256/Todo/actions/workflows/e2e.yml)

# About

The functionality of this Todo app is minimal, and the design is simple. It uses React and TypeScript as the technologies. Various levels of automated tests, following the test pyramid, are integrated into the workflow and executed

## Usage

1. Install the required dependencies: `yarn install`
2. Start the application: `yarn start`

## Development Workflow

- Test Driven Development (TDD)

## Testing Tools

We use the following testing tools:

- UI Testing: Chromatic with Storybook
- End-to-End Testing: Cypress
- Integration Testing: Jest,　React Hooks Testing Library
- Unit Testing: Jest
- Static analysis: Eslint, TypeScript

## Hooks

We employ Git hooks to enhance our development process:

- Local Development: We use Husky to set up and manage Git hooks locally
- Remote Integration: For remote integration, we rely on GitHub Actions for automated workflows

## Design System

We adopt the Atomic Design methodology for organizing our design system, and we use Storybook as our design system tool

## Future Plans

We may consider creating a backend for this application using Django

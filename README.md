# Plum Emotional Transactions - Tech test

This repo will only be a way to evaluate my dev and UI/UX skills, in no way a ready-to-production app. I'll also be using some cool new stuff to learn to kill two birds with one stone : tech test and learn having fun !  
I made the choice to not do TDD (Test Driven Dev) to focus a bit more on the UI/UX side of the project.

## Objectives
Let's not forget what this test is about :  
```
You need to use `React` and `Redux` (or equivalent like `MobX`) to build the following:

1. Display the transactions in the feed. For each transaction display the amount, description,
note and emotion.

2. Allow the user to search the feed for a description or emotion (or both?).

3. Allow the user to add/remove an emotion on a transaction.

The design and UX is completely up to you!
```

## Setup & usage
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

After cloning this repo just `npm i && npm start` and you'll be set to have a look at my work !

## Improvements

### New usages
As I studied :
* Flexbox (and [Flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid))
* [CSS-modules](https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e)

It may have some code, best practices to improve.

* Regarding the animation of the dropdown we should compute and set its max-height with real list height
* Add backward animations on CSS class remove
* Investigate how to write less constants declaration in each CSS files for de CSS-modules
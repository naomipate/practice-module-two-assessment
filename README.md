# Random People Generator Instructions

Welcome to the Random People Generator! A completely functional application that generates a list of random people...well, it should be functional anyway.

## So, what's the problem?

Unfortunately, none of the information is dynamic and the form at the top of the page is about as useful as a chocolate teapot. 😱

## The Mission

Your mission, should you choose to accept it, is to update this page so it generates a list of dynamic, random users on page load. Then, when the form is submitted, it should replace the existing cards with new ones.

- [ ] The HTML and CSS is already done, but the static cards need to be replaced with dynamic ones.
- [ ] The cards should maintain the same structure and be assigned a random theme from the `cardThemes` array.
- [ ] On page load, 10 random user cards should be generated and displayed.
- [ ] When the `fetch-users` form is submitted, the page should fetch the number of users requested and replace the existing cards.
- [ ] The `fetch-users` input box should reset after the form is submitted.

## Additional Features

But wait, there's more! Here are a few additional features that you can add to take this project to the next level:

- [ ] Add more theme options to the CSS, then update the `cardThemes` array.
- [ ] Update the maximum number of people the input allows.
- [ ] Add the persons `gender` to the card.
- [ ] Add a new form element that allows the user to choose a `gender`
- [ ] Add the persons `nationality` to the card.
- [ ] Add another new form element that allows the user to choose a `nationality`
- [ ] Update the Nationality form field to allow multiple choices.
- [ ] **Add your own functionality.** Seriously, go nuts. The sky's the limit!

## Resources

- API Documentation: https://randomuser.me/documentation#howto
- API Get 1 Random Person: https://randomuser.me/api/
- API Get X Random People: https://randomuser.me/api/?results=X
- Material Icons: https://fonts.google.com/icons?icon.set=Material+Icons+Outlined

## Hints

- Make sure you understand the structure of the cards you're building; for instance, how do you know where to define the theme?
- Test your code frequently. If it breaks, that's just part of the process. Keep calm and debug on!
- Use comments to document your code. Not only will it help you later, but it might even impress your future boss.
- Break the problem down into smaller pieces. Rome wasn't built in a day, and neither was this random people generator.
- Take advantage of online resources. You're not in this alone. The internet is a vast and wonderful place.
# Feebacks from fellow students after delivery 1

This document contains the feedback we received from fellow students after delivery 1. Some of the feedbacks that were frequently mentioned are collected into one feedback in this document. The feedbacks are translated from Norwegian to English. We have furthered reflected on the feedbacks and written down our thoughts about them. After making improvements, we have written down what we have done to improve the feedbacks.

## Cache Tanstack API calls

### Feedback

The page uses TanStack Query, but it makes unnecessary API calls. One can assume that the data will never change since it is recipes for drinks and not something that constantly changes like the weather. TanStack should not make the data stale as soon as it is received. The data could be fresh for, say, 24 hours. Every time the page is loaded, all data is fetched again. When I set staleTime to Infinity, the page never made unnecessary calls.

### Our reflection

We have not used TanStack before, so we did not know that it makes unnecessary API calls. We have now set staleTime to Infinity, so the page never makes unnecessary calls. This is something we are going to improve in the next delivery.

### Improvement

TODO

## Bether favorite-marking on the drink page

### Feedback

The favorite marking on the drink page is not so clear as it should. The heart is not filled when the drink is marked as favorite, but just having a darker color on the outline. This makes it a little bit hard to see that the drink is marked as favorite. The heart should be filled when the drink is marked as favorite.

### Our reflection

We wil change the favorite marking on the drink page to be more clear. We will make the heart filled when the drink is marked as favorite, and having it not filled when it is not marked as favorite.

### Improvement

TODO

## Mobile responsivenes

### Feedback

- Navbar responsivenes on 460px - 530px width The app scales well with smaller screens, but in the width range of 460px-530px, the icon in their logo jumps to the next line, which makes the navbar twice as high for no reason.
- On mobile, it would be useful if the navigation bar was sticky and did not disappear when scrolling down the drink list.
- The dropdown menu at the top of the drinks page could also have been a bit bigger, making it easier to use.
- Width of elements in the drinks-list. When the width of the drinks are variable it feels a little bit strange to navigate through the list. It would have been better if the width of the drinks were fixed, so that the drinks are always in the same place.

### Our reflection

- We are going to look into the different breakpoints and make sure that the navbar scales well with all screen sizes.
- We wil tro to make the navbar sticky on mobile and see how it looks, and if it looks good, we will make it sticky.
- We will look into the dropdown menu and see if we can make it bigger, and if it looks good, we will make it bigger.
- We are quiet happy with the design on the drinks-list on desktop, but might look into it on mobile. It might be smart to have a fixed width on mobile, but we will look into it and see if it looks good.

### Improvements

TODO

## File/document structure

### Feedback

- It might not be necessary to have a separate folder for each component, but rather group them together in a folder for components.
- It might not be necessary to have a separate readme file about the tests in each folder, but rather have a readme file about the tests in the whole project.

### Our reflection

- We are quiet happy with the file/document structure we have now, but we will look into the feedback and see if we can make some improvements. We dont want to restructure the whole project now, as we dont think it is necessary. We accepts that the structure might be a little bit overkill, but we think it makes it easier to scale the project.
- We will look into the content in the

### Improvements

TODO

## Hover effect on drink image on the drink page

### Feedback

When hovering over the drink image on the drink page, the image gets a little bit bigger, which makes it looks like it haves a hover effect. I can not find what this hover effect is supposed to do.

### Our reflection

It's not intenional that the image should have a clickable effect. We should remove the hover effect on the image to not cunfuse the user.

### Improvements

Solved in [#36](https://gitlab.stud.idi.ntnu.no/it2810-h23/Team-16/prosjekt-1/-/issues/36)

We have now removed the hover effect on the image. This was done by removing the `:hover` and the related style from the css file.

## Regex in tests

### Feedback

I think it might be som bug with yout tests. expect(screen.getByText(/Enjoy my Cocktail/i)).toBeDefined() passes, and expect(screen.getByText(/Enjoy my Coc/i)).toBeDefined() passes. This seems a little bit strange.

### Our reflection

This is not how it should be. We should look into the syntax of the tests and see if we can make it more accurate.

## Possibilty for filtering on the favorite page

### Feedback

Since it is possible to filter on the drinks page, it would have been nice to have the same possibility on the favorite page as well.

### Our reflection

This is a good idea. We will look into the possibility for filtering on the favorite page and see if we have time to implement it.

### Improvements

TODO

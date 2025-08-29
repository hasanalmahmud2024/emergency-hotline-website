1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById finds one element by its unique ID.
getElementsByClassName finds all elements with the same class name.
querySelector finds the first element that matches a CSS selector(.class, tag).
querySelectorAll finds all elements that match the CSS selector.

2. How do you create and insert a new element into the DOM?
we create new element with document.createElement('') and insert with .appendChild().
 const p = document.createElement('p');
parentDiv.appendChild(p);

4. What is Event Bubbling and how does it work?
If we click on an element, the event happens on that element first, then it moves up to its parent, then the parent's parent, and so on.

5. What is Event Delegation in JavaScript? Why is it useful?
we can add listener to their parent element and check which button was clicked, it is called event delegation.
It will stop event bubbling problem and less code.

6. What is the difference between preventDefault() and stopPropagation()?
preventDefault stops the browser’s normal action.
stopPropagation stops the event bubble from moving up to parent elements.

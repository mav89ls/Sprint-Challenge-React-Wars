# Answers

1.  What is React JS and what problems does it try and solve?

Created by Facebook, ReactJS is an open-source JavaScript library used for building user interfaces via re-usable UI components. It is meant to make data handling scalable, faster, and easier.

2.  What does it mean to _think_ in react?

It means approaching building your app or webpage through the use of components and modular, explicit code - just like React was meant for.

3.  Describe state.

State stores attributes inside the component and allows you to access/modify those attributes through setState by using methods outside the component. It's like the data that you have access to.

4.  Describe props.

Props, short for properties, are the single values or whole object of values that can be passed around to React components within your project. They can be created using JSX and easily accessed with _this.props_.

5.  What are side effects and how do you sync efffects in a react component to state or prop changes?

Anything that occurs or affects something outside the scope of the function being executed by your code. It is not neccesarily a negative thing, sometimes we use side effects to help us write our code by using useState and useEffect - we can tell react to perfom something AFTER a render.

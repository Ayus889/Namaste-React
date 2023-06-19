const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
);

/* how to make nested tag element like
<div id="parent">
    <div id="child">
       <h1>I am a h1 tag</h1>
       <h2>I ama a h2 tag</h2>
-> If you have to create one more child of (div id child)
here is a h2 tag. you have to put this is an ARRAY
-> After "div", { id: "child" }, Array->[React.createElement("h1", {}, "I am h1 tag"),
React.createElement("h2", {}, "I am h2 tag"),]
    </div>
-> Same as above if you have to make one more parent child2.
same thing put in an array as shown in code below.
    <div id="child2">
       <h1>I am a h1 tag</h1>
       <h2>I ama a h2 tag</h2>
    </div>
</div>
But this html code is bit easy to read
<div id="parent">
    <div id="child">
       <h1>I am a h1 tag</h1>
       <h2>I ama a h2 tag</h2>
    </div>
    <div id="child2">
       <h1>I am a h1 tag</h1>
       <h2>I ama a h2 tag</h2>
    </div>
</div>
not this React code to just creating a heading of page.It complex 
you have to create react object than pass h1 tag name, id attributes
then content of h1 tag and is you have to create more than one child 
put into the array..... Bit complex now.
-->> So Resolving this (JSX) comes in  picture.
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
/* This root where all the React code run , everything will render inside this root.
what is root-> document.getElementById("root").
This root comes from index.html part where i'm write <div id="root"></div>

-> In this core React code we creating an object(i.e parent) and 
then this object Rendeing on to the DOM and it convert into in 
HTML and show in Browser as h1 tag.. h2 tag and sooooo on...
 
-> One Curious stuff:
If we write some h1 tag or some element in index.html part
Like this in div container.
<div id="root">
   <h1>Ayush is here!</h1>
  </div>
  this will print Ayush is here in Browser.
But this div container id="root" is get controlled by React now 
because we will implement a react library in index.html.
if root.render(parent); statement executed is it quickly executed 
And change Ayush is here with this all PARENT stuff...
-> So we can say that React gets controlled over that div container which having id="root".

*/

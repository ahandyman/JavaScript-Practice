≈# JavaScript-Practice

Document Object Model (DOM)
1. Character
2. Tokens
3. Nodes
4. Dom

1. The special characters indicate a relationship that represent tokens(2)

2. Tokens are being consumed and being convereted to node(3) objects
DOCTYPE
start tag
end tag
comment
character
end-of-file

3. This list of tokens then goes through the tree construction stage. The 
output of this stage is a tree-like structure - this is the DOM! 

4. Object Model of the Document!

----------------------------------
NODES, ELEMENTS AND INTERFACE

An interface is like a blueprint, properties are like bits of information or data, and methods are functionality.

innerHTML property of an element will return html string and can be rewritten using html (unlike innerText which takes html literal) 

IMPORTANT
innerText v. textContent (probably want to use textContent)
1. innerText will return text as displayed or not displayed using css show
2. textContent will return text as written in code


.createElement()
.createTextNode()
.appendChild()
.insertAdjacentHTML()


Add new page content

<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->


---------------------------------
.addEventListener()
--------------------------------

<event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);

1. an event target - the target
2. the type of event to listen for - the type
3. a function to run when the event occurs - the listener


--------------------------------
Phases of an event
--------------------------------
1. capturing phase
2. at target phase
3. bubbling phase

During the capturing phase the code is run line by line (Top to bottom). Once it arrives at the target. It stops and starts the bubbling phase returning to the top.

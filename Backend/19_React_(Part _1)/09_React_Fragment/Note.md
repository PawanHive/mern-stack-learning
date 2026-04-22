# #9: React Fragment:

Fragments let you group a list of children without adding extra nodes to the DOM.
If you don’t want extra `<div>` in HTML:

~~~jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
~~~
##How Does React Work?

Most people will use JSX transformer to take this:

```javascript
/** @jsx React.DOM */
var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

React.render(<HelloMessage name="John" />, document.getElementById("container"));
```
<!-- .element: class="fragment" data-fragment-index="2" -->

And turn it into this: <!-- .element: class="fragment" data-fragment-index="4" -->

```javascript
/** @jsx React.DOM */
var HelloMessage = React.createClass({displayName: 'HelloMessage',
  render: function() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
});

React.render(React.createElement(HelloMessage( {name:"John"} )), document.getElementById("container"));
```
<!-- .element: class="fragment" data-fragment-index="4" -->

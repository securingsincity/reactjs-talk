##How Does React Work?

![](images/subtree-rerendering.png "logo text")  <!-- .element: class="fragment" data-fragment-index="1" -->

* Every update:  <!-- .element: class="fragment" data-fragment-index="2" -->
  * New virtual dom subtree,   <!-- .element: class="fragment" data-fragment-index="2" -->
  * diffs it with the old subtree,   <!-- .element: class="fragment" data-fragment-index="2" -->
  * calculates only the most minimal changes   <!-- .element: class="fragment" data-fragment-index="2" -->
  * queues it up   <!-- .element: class="fragment" data-fragment-index="2" -->
  * and then batch executes   <!-- .element: class="fragment" data-fragment-index="2" -->

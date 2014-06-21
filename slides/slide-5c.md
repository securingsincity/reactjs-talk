##How Does React Work?

![](images/subtree-rerendering.png "logo text")

* Every update:
  * New virtual dom subtree,
  * diffs it with the old subtree,
  * calculates only the most minimal changes
  * queues it up
  * and then batch executes

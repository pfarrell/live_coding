# Live Coding Editor
This project is an attempt to replicate and extend the demo Bret Victor gave in his
talk "[Inventing on Principal](https://www.youtube.com/watch?v=PUv66718DII)"

A core realization he shows us is that his principal led him to see the current way
we program computers as a relic from earlier ages. From punch card programming, we have
a true disconnect. Where the program must be entirely realized in the mind of the
programmer, encoded into a series of punch cards, loaded into a computer, evaluated, and
only then can the programmer examine the output. From there, we can think of how the
development of languages proceeded and is still influenced by this and pervades our
thinking.  This is a core concept Bret was led to discover by his principal. We consider
the [Read-Eval-Print-Loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) to be some sort of ultimate goal.
Indeed, this kind of tooling can reduce the time between creation and feedback, but Bret
goes further and shows how we can reimagine different ways of programming if we start
and looking at how our tools influence the creative process.

As programmers, we are bound by the tools and languages we use. Many of the
decisions around the design of these were made in different computing eras. Earlier eras
dealt with resource constraints and designed their systems around these. So many of these
constraints affected the way we created. Disk space, network bandwidth, CPU, GPU, caching,
multiple cores, high resoultion display. All have fundamentally changed over the past
decades.

At this point, let me be clear in my understanding. Bret's ultimate goal was not to demo
his software, it was to show how the principal Bret had created for himself, "creators
need an immediate connection to what they are creating" led him to reimagine
interactions programmers have with computers. The ultimate goal of Bret's demos were
not to show off the program used in the demo, but to demonstrate how his principal led
him to create that tool. I think that's why he (as far as I know) hasn't released his
tools. They aren't the point.  They're just entralling demos.

That being said, those demos had such a high <gasp> factor and I can't help but give it
a shot at figuring out how to duplicate what he did in those tools.

## Part 1: the Tree Demo
<img src="/img/bret_victor_tree_demo.jpg" width=400 align=right />

This demo shows off an IDE which has an immediate connection to what is being rendered.
Bret demonstrates creating a scene in a JavaScript canvas.

The essential aspect of this code is to have the render of the code happen as the code
is being written.

### Think of compilation as an animation loop

With JavaScript, we are dealing with interpreted code.  We are still constrained by the
Code-Reload-Examine loop.  In order to remove the "Reload" aspect of this, we should think
of compilation as a coninuous act, not as an event we trigger. This is where we can be
wasteful with CPU in order to realize a new way to interaction. Being able to make this
core element happen, we can reimagine an animation loop running which constantly re-renders
our code. Part of Bret's demo lead to this way of thinking very easily.

### Code Completion as a preview
* Code completion preview

### Interacting with constants
* Integer Slider
* Color picker

### Highlighting output as an effect of a line of code

### Highlighting code based on the effect on the result

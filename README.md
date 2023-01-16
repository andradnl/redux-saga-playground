# General

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The app can be run locally with `npm start` and viewed in your browser at [http://localhost:3000](http://localhost:3000).

# Context 🚧

# Q&A - 🚧 section under construction 🚧
1. What is Redux Saga? <br>
    *Redux Saga is a JS library built on top of Redux, which handles asynchronous operations like data fetching.*
1. What are Redux Saga effects? <br>
    *Effects or effect creators are functions you can execute as part of a Redux Saga control flow, which return plain JavaScript objects and trigger side effects. They do not perform any action, but instead instruct the middleware how to execute a given action.*
1. What are declarative effects? <br>
*Declarative effects are objects yielded within the saga by calling effect creators. These objects contain the description of an action that is to be executed by the middleware.*
1. What are some examples of effect creators? <br>
*Some commonly used effect creators are `call`, `put`, `apply`, `fork`, `take`, `takeLatest`, `takeEvery`, `takeLeading` etc.*
1. How can actions be dispatched to the Redux store? <br>
*Actions can be dispatched to the store using the `put` effect creator, called with an object containing the action type and its payload.*
1. What are blocking and non-blocking effects? <br>
*Blocking calls happen when a saga yields an effect and then waits for its outcome to resolve before resuming the execution of the generator. Non-blocking calls, on the other hand, don’t stop the execution.*
1. How can errors be handled within a saga? <br>
*We can catch errors inside a saga using `try/catch` or adjust the API service to return an error based on which we can dispatch a specific action. A last resort for handling unexpected errors that propagate to the root saga is using the `onError` hook.*
1. What are saga helpers? <br>
*Saga helper effects spawn tasks when specific actions are dispatched to the Redux store. Helper functions are high level functions built on top of lower level functions such as `take` and `fork`.*
1. What are the most common helper functions? <br>
*The most common helper functions are `takeEvery` and `takeLatest`. `takeEvery` starts a new task on each dispatched action, while `takeLatest` cancels any pending (not completed) task started previously.*
1. How does `take` work? <br>
*`take` creates an effect description that instructs the middleware to wait for a specified action to be dispatched to the store. It is a blocking call. The result of `yield take(pattern)` is the action object being dispatched.*
1. What patterns can `take` be called with? <br>
*`take` can be called with no arguments or `*`, in which case all dispatched actions will be matched. Take can also be called with a function, a string or an array.*
1. What is the `END` action? <br>
*The `END` action is a special action provided by the middleware, which when dispatched, terminates all sagas blocked on a `take` effect. If a saga was terminated this way but it still had some forked tasks still running, it would wait for all its child tasks to terminate.*
1. How does takeMaybe work? <br>
*`takeMaybe` functions the same as `take`, but it does not automatically terminate the saga on an `END` action.*
1. How do `take` and `takeMaybe` work when called with a channel? <br>
*`take` and `takeMaybe` work the same when called with a channel as they do when called with a pattern. The difference is in what the middleware is instructed to wait for. When called with a pattern, the middleware waits for specific actions. When called with a channel, the middleware waits for a specified message from the provided channel. If that channel is already closed, the generator will terminate immediately, following the same process described above.*
1. What are channels? <br>
*Channels are objects used to send and receive messages between tasks. Messages from senders are queued until an interested receiver requests a message, and registered receivers are queued until a message is available for them. Every channel has an underlying buffer.*
1. How does `takeEvery` work? <br>
*`takeEvery` spawns a new saga either on each action dispatched to the store that matches the pattern parameter it is called with, or on each specified message from a given channel parameter. `takeEvery` allows for concurrent actions to be handled, but doesn’t handle out of order responses from tasks. There is no guarantee that the tasks will be terminated in the same order they were started.*
1. How does `takeLatest` work? <br>
*`takeLatest` spawns a saga either on each action dispatched to the store matching the given pattern, or on each specified message from a given channel, automatically cancelling any ongoing saga tasks previously started.*
1. How does `takeLeading` work? <br>
*`takeLeading` spawns a saga either on each action dispatched to the store matching the given pattern, or on each specified message from a given channel, but blocks the newly spawned task until it completes, and only after that starts listening for another pattern or channel message again. As such, it is a blocking effect.*
1. How does `put` work? <br>
*`put` creates a non-blocking effect description that instructs the middleware to schedule the dispatching of an action to the store. `put` can be called with either an action parameter, or both a channel and an action parameter. When called with a channel and an action, it will instruct the middleware to put an action into the provided channel.*
1. How does `putResolve` work? <br>
*`putResolve` works the same as `put`, but the created effect is blocking.*
1. How does `call` work? <br>
*`call` creates an effect description that instructs the middleware to call the function passed as first parameter, with the arguments passed as second parameter. `call` also supports passing a `this` context to the function to be called, which is useful for invoking object methods.*
1. What is `apply`? <br>
*`apply` is an alias for `call`.*
1. What is the forking model in Redux Saga? <br>
*The forking model represents the two possible ways of dynamically instantiating sagas that can run in parallel: attached and detached. Attached forks use the `fork` effect creator, and remain attached to their parents. Furthermore, attached forks share the same semantics with the parallel effect (`all`), in the sense that the parent will terminate after all launched tasks finish their execution. Detached forks use the `spawn` effect creator and live in their own execution context, not attached to their parents.*
1. What is `fork` and how does it work? <br>
*`fork` is an effect creator that creates an effect which instructs the middleware to invoke a given (normal or generator) function in a non-blocking manner. The generator resumes as soon as the given function is invoked. Fork is relevant in the management of concurrency between different sagas. Yielding a `fork` effect creator returns a `task` object attached to its parent, whose termination the parent will wait for, even after its own body of instructions has finished executing.*
1. What is the difference between `call` and `fork`? <br>
*`call` is blocking, `fork` is non-blocking.*
1. How does error propagation work with forked tasks? <br>
*Errors from child tasks automatically bubble up to their parents. If any forked task raises an uncaught error, then the parent task will abort with the child `Error`, and the whole parent's execution tree (both forked tasks and main task if it's still running) will be cancelled.*
1. What is `spawn` and how does it work? <br>
*`spawn` is an effect creator that creates a detached forked task. A detached task and its parent are completely independent.*
1. What is `join` and how does it work? <br>
*`join` is an effect creator that creates an effect which instructs the middleware to wait for the result of a previously forked task. It will resolve with the same outcome as the joined task.*
1. What is `cancel` and how does it work? <br>
*`cancel` creates an effect description that instructs the middleware to cancel a previously forked task.*

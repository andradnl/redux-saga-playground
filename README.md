# General

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The app can be run locally with `npm start` and viewed in your browser at [http://localhost:3000](http://localhost:3000).

# Context
This project was created in the context of wanting to gather more knowledge about Redux Saga. 

The applied method of learning was based on asking short, granular questions and answering them, starting from a general level then moving on into more details. This project acts as a place to gather all of this acquired understanding in the form of a Q&A section (see below), as well as some practical attempts at understanding how different Redux Saga method behave.

# Q&A
1. **What is Redux?** <br>
*Redux is a state management library for JavaScript applications, with a large ecosystem of addons, such as Redux Toolkit, which helps jumpstart the creation of a Redux app. The core concepts of Redux are `store`, `actions` and `reducers`.*
1. **What is a Redux store?** <br>
*The store is an object that holds the global state of a Redux application, acting as the single source of truth. A Redux application can have only one store, but be composed of multiple reducers.*
1. **What is a reducer?** <br>
*A reducer is pure function that can reduce a collection of values to a single value. In the context of Redux, the single accumulated value returned by a reducer represents the new state object, calculated based on previous state and an action.*
1. **What are Redux actions?** <br>
*An action is an object with a `type` property and a `payload` property, which represents the intention of updating the global state of the application. There is no other way to update a Redux store other than dispatching actions to it. The payload of an action represents the piece of the state that need to be updated by a given reducer function.*
1. **What is Redux Saga?** <br>
*Redux Saga is a JavaScript library built on top of Redux, which acts as a middleware for handling asynchronous operations such as data fetching. Redux Saga is based on the concept of generator functions.*
1. **What are generator functions?** <br>
*Generator functions are functions whose execution is not continuous and can be "paused". They define an iterative algorithm by writing a single function using the `function*` syntax, and can `yield` multiple values one after another. Calling a generator function returns a generator object.*
1. **What are generator objects?** <br>
*Generator objects (or simply generators) are JavaScript objects that manage the execution of a generator function. Generators are iterable, which means that they implement the `@@iterator` method that defines their iteration behaviour. Generators are also special types of iterators, which means they implement the Iterator protocol by having a `next()` method that returns an object with two properties: `value` & `done`. Calling the `next()` method runs the execution of the generator function until the nearest `yield` statement. The function execution is then paused, and the yielded value is returned to the outer code.*
1. **What is a middleware?** <br>
*A middleware is a piece of code that can run after an action has been dispatched, but before it is processed by a reducer. Chronologically, this would be the order in which these steps are executed:* <br><br>
    ```
    action dispatch ⇨ middleware ⇨ reducer processes the action ⇨ store updates
    ```
    *In the context of Redux, a middleware is a higher order function that enhances the `dispatch` function to provide it with new capabilities. This becomes the main way of handling asynchronous behaviour such as data fetching. A dispatched action can be "caught" by the middleware and in response the middleware can orchestrate a data fetching operation, whose response will then be used to update the store by dispatching another action.*
1. **What is Redux Thunk?** <br>
*In the Redux ecosystem, Redux Thunk is an alternative to using Redux Saga, as well as the default (and recommended) middleware option for handling side effects and both synchronous and asynchronous logic that requires access to the Redux store. The "thunk" pattern can be defined as a piece of code that does some delayed work. In the context of Redux Thunk, thunks represent a way of writing functions whose logic can interact with a Redux store, specifically its `dispatch` and `getState` methods. A thunk function accepts these two methods as arguments:* <br><br>
    ```javascript
    const thunkFunction = (dispatch, getState) => {...}
    ```
1. **What is a side effect?** <br>
*A side effect represents a change that can be observed outside the execution context of a given function. It is often defined in relation to pure functions, which are functions that return the same output every time they are invoked and don't cause side effects. These side effects can be anything from making an HTTP request, generating a random value, mutating values, logging values to the console or any other asynchronous operations.`*
1. **What are Redux Saga effects?** <br>
*Effects or effect creators are functions you can execute as part of a Redux Saga control flow, which return plain JavaScript objects and trigger side effects. They do not perform any action, but instead instruct the middleware how to execute a given action.*
1. **What are declarative effects?** <br>
*Declarative effects are objects yielded within the saga by calling effect creators. These objects contain the description of an action that is to be executed by the middleware.*
1. **What are some examples of effect creators?** <br>
*Some commonly used effect creators are `call`, `put`, `apply`, `fork`, `take`, `takeLatest`, `takeEvery`, `takeLeading` etc.*
1. **How can actions be dispatched to the Redux store?** <br>
*Actions can be dispatched to the store using the `put` effect creator, called with an object containing the action type and its payload.*
1. **What are blocking and non-blocking effects?** <br>
*Blocking calls happen when a saga yields an effect and then waits for its outcome to resolve before resuming the execution of the generator. Non-blocking calls, on the other hand, don’t stop the execution.*
1. **How can errors be handled within a saga?** <br>
*We can catch errors inside a saga using `try/catch` or adjust the API service to return an error based on which we can dispatch a specific action. A last resort for handling unexpected errors that propagate to the root saga is using the `onError` hook.*
1. **What are saga helpers?** <br>
*Saga helper effects spawn tasks when specific actions are dispatched to the Redux store. Helper functions are high level functions built on top of lower level functions such as `take` and `fork`.*
1. **What are the most common helper functions?** <br>
*The most common helper functions are `takeEvery` and `takeLatest`. `takeEvery` starts a new task on each dispatched action, while `takeLatest` cancels any pending (not completed) task started previously.*
1. **How does `take` work?** <br>
*`take` creates an effect description that instructs the middleware to wait for a specified action to be dispatched to the store. It is a blocking call. The result of `yield take(pattern)` is the action object being dispatched.*
1. **What patterns can `take` be called with?** <br>
*`take` can be called with no arguments or `*`, in which case all dispatched actions will be matched. Take can also be called with a function, a string or an array.*
1. **What is the `END` action?** <br>
*The `END` action is a special action provided by the middleware, which when dispatched, terminates all sagas blocked on a `take` effect. If a saga was terminated this way but it still had some forked tasks still running, it would wait for all its child tasks to terminate.*
1. **How does `takeMaybe` work?** <br>
*`takeMaybe` functions the same as `take`, but it does not automatically terminate the saga on an `END` action.*
1. **How do `take` and `takeMaybe` work when called with a channel?** <br>
*`take` and `takeMaybe` work the same when called with a channel as they do when called with a pattern. The difference is in what the middleware is instructed to wait for. When called with a pattern, the middleware waits for specific actions. When called with a channel, the middleware waits for a specified message from the provided channel. If that channel is already closed, the generator will terminate immediately, following the same process described above.*
1. **What are channels?** <br>
*Channels are objects used to send and receive messages between tasks. Messages from senders are queued until an interested receiver requests a message, and registered receivers are queued until a message is available for them. Every channel has an underlying buffer.*
1. **How does `takeEvery` work?** <br>
*`takeEvery` spawns a new saga either on each action dispatched to the store that matches the pattern parameter it is called with, or on each specified message from a given channel parameter. `takeEvery` allows for concurrent actions to be handled, but doesn’t handle out of order responses from tasks. There is no guarantee that the tasks will be terminated in the same order they were started.*
1. **How does `takeLatest` work?** <br>
*`takeLatest` spawns a saga either on each action dispatched to the store matching the given pattern, or on each specified message from a given channel, automatically cancelling any ongoing saga tasks previously started.*
1. **How does `takeLeading` work?** <br>
*`takeLeading` spawns a saga either on each action dispatched to the store matching the given pattern, or on each specified message from a given channel, but blocks the newly spawned task until it completes, and only after that starts listening for another pattern or channel message again. As such, it is a blocking effect.*
1. **How does `put` work?** <br>
*`put` creates a non-blocking effect description that instructs the middleware to schedule the dispatching of an action to the store. `put` can be called with either an action parameter, or both a channel and an action parameter. When called with a channel and an action, it will instruct the middleware to put an action into the provided channel.*
1. **How does `putResolve` work?** <br>
*`putResolve` works the same as `put`, but the created effect is blocking.*
1. **How does `call` work?** <br>
*`call` creates an effect description that instructs the middleware to call the function passed as first parameter, with the arguments passed as second parameter. `call` also supports passing a `this` context to the function to be called, which is useful for invoking object methods.*
1. **What is `apply`?** <br>
*`apply` is an alias for `call`.*
1. **What is the forking model in Redux Saga?** <br>
*The forking model represents the two possible ways of dynamically instantiating sagas that can run in parallel: attached and detached. Attached forks use the `fork` effect creator, and remain attached to their parents. Furthermore, attached forks share the same semantics with the parallel effect (`all`), in the sense that the parent will terminate after all launched tasks finish their execution. Detached forks use the `spawn` effect creator and live in their own execution context, not attached to their parents.*
1. **How does `fork` work?** <br>
*`fork` instructs the middleware to invoke a given (normal or generator) function in a non-blocking manner. The generator resumes as soon as the given function is invoked. Fork is relevant in the management of concurrency between different sagas. Yielding a `fork` effect creator returns a `task` object attached to its parent. The parent will wait for the termination of the forked task(s), even after its own body of instructions has finished executing.*
1. **What is the difference between `call` and `fork`?** <br>
*`call` is blocking, `fork` is non-blocking.*
1. **How does error propagation work with forked tasks?** <br>
*Errors from child tasks automatically bubble up to their parents. If any forked task raises an uncaught error, then the parent task will abort with the child `Error`, and the whole parent's execution tree (both forked tasks and main task if it's still running) will be cancelled.*
1. **How does `spawn` work?** <br>
*`spawn` creates a detached forked task, whose execution is completely independent from the parent saga that spawned it.*
1. **How `join` it work?** <br>
*`join` instructs the middleware to wait for the result of a previously forked task. It will resolve with the same outcome as the joined task.*
1. **How does `cancel` work?** <br>
*`cancel` instructs the middleware to cancel a previously forked task.*
1. **How does `select` work?** <br>
*`select` instructs the middleware to invoke a given selector function on the current state of the store, in order to retrieve a value from it.*
1. **What are the most frequently used blocking operations in Redux Saga?** <br>
*The most frequently used blocking operations are `take`, `takeMaybe`, `call`, `apply`, `race` and `delay`.*
1. **What are the most frequently used non-blocking operations in Redux Saga?** <br>
*The most frequently used blocking operations are `takeEvery`, `takeLatest`, `takeLeading`, `put`, `fork`, `spawn` and `select`.*
1. **What is the watcher/worker model in Redux Saga?**<br>
*The watcher/worker model is a way of organising control flow in Redux Saga. Watcher sagas are sagas that create a task which runs a worker each time a certain type of action is dispatched to the store and intercepted by the middleware. Worker sagas thus interpret and handle the action and terminate.*
1. **What are effect combinators?** <br>
*Effect combinators are functions that allow for operations to be executed in parallel  in the context of Redux Saga.*
1. **What are the effect combinators exposed by Redux Saga?** <br>
*In Redux Saga, the effect combinators available are `race` and `all`.*
1. **How does `race` work?** <br>
*`race` instructs the middleware to run a race between multiple given effects, similar to how `Promise.race()` works. The result of `race` is based on whichever operation is first to resolve. When resolving a race, the middleware automatically cancels all the "losing" effects.*
1. **How does `all` work?** <br>
*`all` instructs the middleware to run multiple effects in parallel and wait for the completion of each of them, similar to how `Promise.all()` works. Either all the operations performed this way are successfully completed, in which case the execution of the generator function can resume with an array of results, or one of these operations throws an error before the others get a chance to complete, and the error propagates to the generator.*

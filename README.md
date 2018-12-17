![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 27

### Author: Ashley Breunich

### Links and Resources
* [codesandbox repo](https://codesandbox.io/s/71r673r3y1)
* [github repo](https://github.com/ashley-breunich/counter-test-lab)
* [travis](https://www.travis-ci.com/ashley-breunich/counter-test-lab)
* [warmup](https://github.com/ashley-breunich/warmups)
* [front-end - AWS](http://counter-test-lab.s3-website-us-west-2.amazonaws.com/)

### Modules


### `app.js`
#### Exported Values and Methods

##### `Class App`

###### `render() -> React.Fragment`
Returns Header, Counter, Footer


### `counter.js`
#### Exported Values and Methods

##### `Class Counter`

###### `constructor(props)`
Declares the state

###### `handleUp(e)`
Modifies the state (increases this.state.count by 1)
Calls updateCounter(count)

###### `handleDown(e)`
Modifies the state (decreases this.state.count by 1)
Calls updateCounter(count)

###### `updateCounter(count)`
Sets the state depending on the count number --> sets polarity

###### `render() -> section`
Returns state.count, resulting handleUp() link, and resulting handleDown() link


### `index.js`
#### Exported Values and Methods

##### `Class Main`

###### `render() -> Component`
Returns App


### `header.js`
#### Exported Values and Methods

##### `Class Header`

###### `render() -> Header`
Returns Header


### `footer.js`
#### Exported Values and Methods

##### `Class Footer`

###### `render() -> Footer`
Returns Footer

### Setup
#### `.env` requirements
* `NODE PATH` - NODE_PATH=src

#### Tests
You can run the tests by typing npm test in the command line.

* What assertions were made?
1. The tests assert state changes properly.
2. The tests assert that state is being transferred to the DOM.
3. The tests assert DOM stability via snapshot testing.

#### UML
[Link to UML](assets/counter-uml.jpg)
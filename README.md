# Atomic Fuel
This package contains all of the front-end library code for Atomic Jolt apps. It includes all front-end code that was previously in the `client/libs` directory.

## Installation
You should install atomic fuel into each individual app not in the client directory. Just add as a regular dependency.

`b add atomic-fuel`

## Usage
All of the code is found in the libs folder which has the following structure
```
libs/
-- actions
-- api
-- constants
-- dev
-- loaders
-- middleware
-- reducers
-- specs_support
-- store
```
If you wanted to use, for example, `libs/store/configure_store.js` you would write the following:
```Javascript
import configureStore from 'atomic-fuel/libs/configure_store.js';
```
Alternatively, there is an index file which simply exports everything for
convenience, so you can do this:
```Javascript
import { configureStore } from 'atomic-fuel';
```

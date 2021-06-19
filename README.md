# Atomic Fuel 🔋
This package contains all of the front-end library code for Atomic Jolt apps. It includes all front-end code that was previously in the `client/libs` directory.

## Installation 🔌
You should install atomic fuel into each individual app not in the client directory. Just add as a regular dependency.

`b add atomic-fuel`

## Usage 🧑‍🔬
All of the code is found in the libs folder which has the following structure
```
libs/
-- actions
-- api
-- communications
-- components
-- constants
-- decorators
-- graphql
-- libs
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

## Development 🛠️
Develop using Storybook, which features hot-reloading, browsing, and testing of React Components.

Run Storybook:
`yarn storybook`

#### Note 📝
Component file structure should be organized in the following structure.
```
src/components/
-- ComponentName/
---- index.js
---- index.spec.js
---- index.stories.js
---- styles.scss
```

## Testing 🧪
Run tests:
`yarn test`

Run tests with Chrome DevTools (i.e. use debugger in your tests):
1. Open a Chromium browser at `chrome://inspect`
2. Click on the "Open dedicated DevTools for Node"

Then you can run tests using:
`yarn test:debug`

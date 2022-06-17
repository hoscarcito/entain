# Entain-TechTest

## Description
Mobile implementation of the **Next to go** screen in React Native.

### Note
This was never tested on Android or even a real iOS device. iOS Simulator was used throughout the entire process.

## Instructions
### App
- `yarn`
- `cd ios && pod install && cd ..`
- `yarn ios`
### test
- `yarn test`


## Functional requirements:
- Display 5 races *at all times*
- Races must be sorted by time, ascending
- Race should disappear 1 minute after the start time
- The user should see the *meeting name* and the *race number* and a countdown timer
- The user should be able to toggle race categories

## Design considerations
- Atomic design. Each custom component in the design has its own place in the composition allowing for better configurability
- No state management. The app was very simple, so I applied *component* composition and handled the state on the main screen component.
- Test for the hook. In order to showcase my testing skills, I decided to test the most complex part of the app, the hook, where I utilised multiple techniques like test iterations, fixtures, mocking, globals and so on.
- No fetching more than 10 results. Although the requirement states that we should display 5 races **at all times** the solutions to do so involved a lot of complex or inefficient code, like fetching 50 results so we have enough races per category or validating that we have enough races per fetch and if not, keep fetching until we have at least 5 per category, etc. I thought describing possible solutions might be good enough to demonstrate not only the understanding of the statement but also that I'm capable of providing a solution. 

## TODO
- Improve the UI/UX - Sorry!
- Convert the project to Typescript 
- HTTP client, like axios - for better response handling, more methods, no stringify needed, etc 
- env variables - the config is currently hardcoded in the code, env variables allow us to change the config without having to modify the code/artifacts when something changes, it's safer than hardcoding as secrets are not stored in the repo, etc.
- icons - yes, icons
- Error boundary - Last bastion of defense when everything else fails
snapshot, unit and e2e testing - Better test coverage, applying the testing pyramid ensures higher quality, reduces the number of bugs introduced to the codebase, etc.
- And much more...



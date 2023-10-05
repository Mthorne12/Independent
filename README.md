# Independent

## Prerequisites
[git](https://git-scm.com/)
[Node.js (18.18.0)](https://nodejs.org/en)

### Recommended
[Visual Studio Code](https://code.visualstudio.com/): this is my preference for viewing and editing code and if you enable npm scripts in the left hand explorer pane, there are some scripts that are useful for installing and running (running `npm run ` followed by the script name from the root folder in command line should also achieve the same effect).

## Setup
After cloning the repository, open the project in visual code (or navigate to its root folder in a command  line window)
Note: you may need to run visual studio code (or your command line window) as an administrator to avoid setup issues

Run the dependencies script (npm run dependencies or just `npm ci`) to ensure all dependencies of the project are present.

If this has worked you should be able to run the open cypress script (`npm run open-cypress`) to open cypress and run individual feature files.

## Running
The test suite can be run in one of three ways:
* Running the cypress UI using the `open-cypress` script: this will allow you to run the spec files individually and interact with the results once the run completes as well as allowing you to specify a browser to run in.
* Running the suite in the UI using `run-ui` script: this will run each feature file in a new browser letting you watch the run happen and interact with the steps once the run has finished.
* Running the suit in the command line using the `run-cmd` script: this will run each feature file outputting which scenarios have passed or failed as it goes and generating screenshots of any failures (an example is shown in `cypress\screenshots\registrationJourney.feature\` which is also referenced in the difficulties faced section below).

## Difficulties faced
* iframes are difficult to interact with using cypress and require the chromeWebSecurity attribute to be turned off. Doing so can cause issues for certain tests but within the scope of this test suite it had no adverse effects.
* There were many failed requests from the webpage (not related to the test) that caused cypress to occasionally crash during debugging (and also makes it difficult to scroll through the output afterwards). To counter this I intercepted all requests and set them to not log so only requests that were intercepted for use in the tests were shown in the output.
* The performance on some pages was quite slow (specifically around login) so I had to override the timeouts on login to give the webpage time to transition.
* There is an issue with cypress .type() commands that causes them to not finish in some applications (specifically the login email box). To counter this I added to {force: true} to the type commands which seems to have gotten around the issue. I believe the issue is being looked into on the cypress side.
* The privacy box sometimes reappears on screens throughout the website after accepting it earlier in a test run which caused tests to fail as it was unexpected (this is a valid failure but would show misleading results until investigated thoroughly).
* Most elements were missing ids and some were missing any form of unique predictable identifier. This should be rectified before automating the testing on these pages fully.
* I don't know the specifics of the backend login process so test 2 is difficult to start logged in. I instead used a cut down version of the login tests to achieve the same result but passing whatever method of maintaining logged in users in with the visit call would be a better solution.
* The "premium offer" popup appears after logging in or accessing the registration page unpredictably and interferes  with the flow of the test. I made some attempts to include it in the test but the only reliable way of doing this seemed to be by using a generic timed wait on page load (this is something i wouldn't normally do as it may not be reliable on different environments) as i couldn't track down a specific request to wait for and waiting for it to appear rarely worked (possibly due to it being an iframe).
* Iterating the email address for the registration journey was relatively easy to implement however it would be a better approach to automatically clear the users created out between runs rather than creating new ones each time.
* A captcha (which does not exist on the registration page as far as i can see) blocked creating users at a certain point which meant the last few parts couldn't be run locally to check they were fully working. (the failure screenshot in `cypress\screenshots\registrationJourney.feature\` shows the issue I'm referring to)
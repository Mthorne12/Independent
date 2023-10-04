# Independent

## Prerequisites
[Node.js (18.18.0)](https://nodejs.org/en)

### Recomended
Visual Code

## Difficulties faced
iframes
many failed requests from the webpage cause cypress to occasionally crash during debugging (and also makes it difficult to scroll through the output)
performance (specifically around login)
email address validation doesn't always work
privacy box sometimes reappears on the login screen after accepting it
many elements missing ids or alternative ways to locate them easily
dont know the specifics of the backend login process so test 2 would be very difficult to start logged in. i instead used a cut down version of the login tests to achieve the same result
there is an intermittent issue with cypress that causes it to not fully finish typing a .type() method. this was solved with a {force: true} after some research into fixes
The "premium offer" popup appears after logging in unpredictabley and interfeers with the flow of the test. It doesn't appear to be interactable with cypress reliabley. i made some attempts to include it in the test but the only reliable way of doing this seemed to be manually clicking it within the cypress runner.
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
The "premium offer" popup appears after logging in or accessing the registration page unpredictabley and interfeers with the flow of the test. i made some attempts to include it in the test but the only reliable way of doing this seemed to be by using a generic timed wait on page load (this is something i wouldnt normally do as it may not be reliable on different environments) as i couldnt track down a specific request to wait for and waiting for it to appear rarely worked (possibly due to it being an iframe).
Iterating the email address for the registration journey is relatively easy to implement using environment variables however these will reset between runs making it difficult to showcase it working here. it would be possible to use an external file storing an iterator to have it increment globally between runs however it would be a better approach to automatically clear the users created out between runs rather than creating new ones each time
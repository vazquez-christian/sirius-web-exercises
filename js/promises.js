"use strict";

let userLastCommit = (user) => {
    return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': gitApi}})
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            for (let event of data) {
                if (event.type === "PushEvent") {
                    console.log(new Date(event.created_at));
                    break;
                }
            }
        });
}

userLastCommit("vazquez-christian");

let wait = milliseconds => new Promise (resolve => {
    setTimeout(resolve, milliseconds);
});

wait(1000).then(() => console.log("Your promise resolved after 1 second."));
wait(3000).then(() => console.log("Your promise resolved after 3 second."));
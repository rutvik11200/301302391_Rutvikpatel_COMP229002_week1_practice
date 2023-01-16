// Division
export function halfOf(x) {
    return x / 2;
    }

// Multiplication
export function multiply(x, y) {
    return x * y;
    }

// Var
export function iterateVar() {
    for(var i = 0; i < 10; i++) {
        console.log(i);
        }
    console.log(i);
    }

// Let
export function iterateLet() {
        for(let i = 0; i < 10; i++) {
        console.log(i);
        }
    }

// Additio111n
export function add(x, y = 0) {
    return x + y;
    }
    

export function userFriends(user, ...friends) {
        console.log(user + ' has ' + friends.length + ' friends');
        }

export function userTopFriends(firstFriend, secondFriend, thirdFriend) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriend);
    }

export function parent() {
    const message = 'Hey there!!';
    function child() {
    alert (message);
    }
    child();
}

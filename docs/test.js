let totalPosts = 0;
let ref = {
    get current() {
        console.log("Stack Watch Get")
        return totalPosts;
    },

    set current(value) {
        totalPosts = value;
    }
}
function sleep(interval) {
    return new Promise(resolve => {
        setTimeout(resolve, interval);
    })
}
async function getPosts(userId) {
    const users = [{ id: 1, posts: 5 }, { id: 2, posts: 3 }];
    const delay = Math.random() * 1000;
    console.log("睡眠：", delay, "userId:", userId, "检索值：", users.find((user) => user.id === userId).posts)
    await sleep(delay);
    return users.find((user) => user.id === userId).posts;
}

async function addPosts(userId) {
    console.log("Every Initial value:", "ref.current")
    ref.current += await getPosts(userId);
}

Promise.all([addPosts(1), addPosts(2)])
    .then(() => {
        console.log('Post count:', ref.current);
    })

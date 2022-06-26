const express = require('express')
const app = express()
const port = 3000

app.get('/test', async (req, res) => {
    // work()
    // console.log("after work")
    // if (true){
    //     setTimeout(()=>{
    //         res.send('Hello World!')
    //
    //     }, 5000)
    // }
    if(true){
        console.log("hello")
    }
    if (true) {
        await sleep(() => {
            console.log('after sleep')
        },500)
    }
    if (true) {
        await sleep(() => {
            console.log('after sleep')
        },500)
    }
    res.send('Hello World!')

})

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleep(fn, timout) {
    await timeout(timout);
    return fn();
}

// const work = () =>{
//     for (let i = 0; i < 5000; i++) {
//         console.log(i)
//     }
//     console.log("finished")
// }

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
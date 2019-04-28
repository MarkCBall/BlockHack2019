var express = require('express');
var router = express.Router();

var level = require('level')
var db = level('./db', {valueEncoding: 'json'})

// Sign and post or update locate offering
router.post('/PostOffering', async function(req, res, next) {
    db.put(req.headers.ticker,req.body)
    res.send("success");
})

// Get locate offerings
router.get('/GetOfferings', async function(req, res, next) {
    db.get(req.headers.ticker)
    .then(offering => {
        res.send(offering)
    })
    .catch(() => {
        console.log("ticker not found")
        res.send({});
    })
    // res.send();
})
module.exports = router;


























// var express = require('express');
// var router = express.Router();


// // (async ()=>{
// //     db.close(db)
// // })()
// //level.repair('./db')


// var level = require('level')

// var db = level('./db', {valueEncoding: 'json'})



// router.post('/New', async function(req, res, next) {

//     db.put(req.headers.gameid,req.body)
//     res.send();
// })

// router.post('/Move', async function(req, res, next) {

//     addDataFunc = () => {

//     }

//     console.log("xx")
//     let oldData
//     db.get(req.headers.gameid)
//     .then(oldData => {
//         console.log("old stuff is ", oldData)
//         let newData = {
//             ...oldData,
//             boardBN:req.body.boardBN,
//             moveSig:req.body.moveSig
//         }
//         console.log("turning into ", newData)
//         db.put(req.headers.gameid,newData)

//     })
//     .catch(() => {
//         console.log("creating move on uninitiated game")
//         db.put(req.headers.gameid,req.body)
//     })
    
    
//     // 


//     res.send();
// })



// router.get('/', async function(req, res, next) {
//     //EXAMPLE 
//     // header = {gameID:3}
//     db.get(req.headers.gameid)
//     .then((dbres) => {
//         console.log("sending ",dbres)
//         res.send(dbres)
//     })
//     .catch((err) => {
//         res.send({});
//         // console.log(err)
//     })
//     //good error handling?
// })




// // router.get('/', async function(req, res, next) {
// //     //EXAMPLE req.body 
// //     //{cid:1}
// //     var CID = req.headers.cid
// //     db.get(CID)
// //     .then((dbres) => res.send(dbres))
// //     .catch((err) => {
// //         res.send({});
// //         console.log(err)




//     // var CID = req.body.CID

//     // delete req.body.CID//alternatively put CID in the header - better solution..

//     // var address1 = req.body.u1Address;
//     // var address2 = req.body.u2Address;


//     // //both existingPendingsChannels and existingRequestedChannels can be run in parrallel for better efficiency
//     // var existingPendingsChannels;
//     // await db.get("pending"+address1)
//     // .then((res)=> {existingPendingsChannels = res;})
//     // .catch(() => {existingPendingsChannels = {};})
    
//     // var existingRequestedChannels;
//     // await db.get("requested"+address2)
//     // .then((res)=> {existingRequestedChannels = res;})
//     // .catch((err) => {existingRequestedChannels = {};})

//     // console.log("existingPendingsChannels is, ", existingPendingsChannels)
//     // console.log("existingRequestedChannels is, ", existingRequestedChannels)

//     // //INCLUDE A GET so 
//     // db.put("pending"+address1,{...existingPendingsChannels,[CID]:CID})
//     // //.then(console.log("\n\npending success"))
//     // .catch((err) => console.log("\n\npending failed",err))
//     // db.put("requested"+address2,{...existingRequestedChannels,[CID]:CID})
//     // //.then(console.log("\n\nrequested success"))
//     // .catch((err) => console.log("\n\nrequested failed",err))
//     //     
//     // //verify CID doesn't exist yet
//     // //verify that sig1 correlates to all given channel info

//     // //create a new entry at CID
//     // db.put(CID,req.body)
//     // //.then(console.log("\n\n CIDput success"))
//     // .catch((err) => console.log("\n\n CIDput failed",err))


// // });





// // router.get('/', async function(req, res, next) {
// //     //EXAMPLE req.body 
// //     //{cid:1}
// //     var CID = req.headers.cid
// //     db.get(CID)
// //     .then((dbres) => res.send(dbres))
// //     .catch((err) => {
// //         res.send({});
// //         console.log(err)
// //     })
// // });

// // //router.delete('/', function(req, res, next) {
// // //complete this later









// // router.get('/pending', async function(req, res, next) {
// //     db.get("pending"+req.headers.address)
// //     .then((CIDs) => { res.send(JSON.stringify(CIDs))}   )
// //     .catch((error) => res.send(JSON.stringify({}))  )
// // });

// // router.get('/requested', async function(req, res, next) {
// //     db.get("requested"+req.headers.address)
// //     .then((CIDs) => { res.send(JSON.stringify(CIDs))}   )
// //     .catch((error) => res.send(JSON.stringify({}))  )
// // });


// module.exports = router;







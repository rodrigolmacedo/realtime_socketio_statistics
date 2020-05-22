const mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.99.101/perfData', {useNewUrlParser: true, useUnifiedTopology: true});

const Machine = require('./models/Machine');


function socketMain(io, socket){
    
    let macA;

    socket.on('clientAuth', (key) =>{
        if(key === 'dhuas7das7yhdhudh1'){
            socket.join('clients');
        }else if(key === 'ta89w4e8w4t8r5j15yh6j1'){
            socket.join('ui');
            console.log('a react app loggedin');
            Machine.find({}, (err, docs) => {
                docs.forEach((aMachine)=>{
                    aMachine.isActive = false;
                    io.to('ui').emit('data',aMachine);
                });
            });
        }else{
            socket.disconnect(true);
        }
    })
    socket.on('disconnect', () => {
        Machine.find({macA: macA}, (err, docs) => {
            if(docs.length > 0){
                docs[0].isActive = false;
                io.to('ui').emit('data',docs[0]);
            }
        })
    })
    socket.on('initPerfData', async (data) => {
        macA = data.macA;
        const mongooseResponse = await checkAndAdd(data);
        console.log(mongooseResponse);
    });
    socket.on('perfData', (data) =>{
        console.log('Tick....');
        io.to('ui').emit('data', data);
    });
}

function checkAndAdd(data){
    return new Promise((resolve, reject)=> {
        Machine.findOne(
            {macA: data.macA},  
            (err, doc)=>{
                if(err){
                    reject(err);
                    throw err;
                }else if(doc === null){
                    let newMachine = new Machine(data);
                    newMachine.save();
                    resolve('added');
                }else{
                    resolve('found');
                }
            }
        )
    });
}

module.exports = socketMain;
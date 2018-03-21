
const readline = require('readline');

function ask(question) {
    return new Promise((resolve, reject) => {    
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });   
        rl.question(question, (answer) => {
           
                rl.close();
                if (answer.length === 0)
                reject()
                resolve(answer)
                    
            
        })
    })
}


ask('Username:').then((data)=>{
    ask('Email:').then((data)=>{
     ask('Client Key:').then((data)=>{
         console.log(data);
     })
       
    })
});
// Promise.all([
//     ask('Username:'),
//     ask('Email:'),
//     ask('Client Key:'),
//     ask('Client Secret:')
// ]).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })


//first , node core module 
// run node --> node app.js 


// const fs = require('fs')
// fs.writeFileSync('notes.txt','Helooo')
// console.log(fs.readFileSync('notes.txt').toString())



//const x = require('./data')
// console.log(x.name1)
// console.log(x.lastName)
// console.log(x.sum(4,5))

// const validator = require('validator')
// console.log(validator.isEmail('amr@gmail.com'))



// const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));
// console.log(chalk.blue.bgRed.bold('Hello world!'));



// console.log(process.argv)

// const command = process.argv[2]
// if(command ==='add'){
//     console.log('Add item')
// }
// else if (command==='delete'){
//     console.log('Delete item')
// }

// Version 1

const yargs = require('yargs')


// yargs.command({
//     command:'add',
//     describe:'add note',
//     handeler:()=>{
//         console.log('Add iteeeeem')
//     }
// })
yargs.command({
    command:'remove',
    describe:'delete note',
    builder:{
        title:{
            describe:'this is title description removed',
            demandOption:true ,
            type:'string'

        },
    },
    handler:(argv)=>{
        notes.removeNote(argv.title)
      
    }
});

// Version 2
/*yargs.command({
    command:'add',
    describe:'add note',
    builder:{
        title:{
            describe:'this is title description in add command',
            demandOption:true ,
            type:'string'
        },
        body:{
            describe:'this is body description in add command',
            type:'string'
        }
    },
    handler:(argv)=>{
        console.log('Adding notes title',argv.title)
        console.log('Adding notes body',argv.body)
    }
})
yargs.command({
    command:'delete',
    describe:'delete note',
    handeler:()=>{
        console.log('delete iteeeeem')
    }
})
// yargs.command({
//     command:'add',
//     describe:'add note',
//     handeler:()=>{
//         console.log('Add iteeeeem')
//     }
// })
// yargs.command({
//     command:'delete',
//     describe:'delete note',
//     handeler:()=>{
//         console.log('delete iteeeeem')
//     }
// })



//yargs.parse();
*/




///////////////////////////////////////////////////////// Version3
const notes = require('./notes')
yargs.command({
    command:'add',
    describe:'add note',
    builder:{
        title:{
            describe:'this is title description in add command',
            demandOption:true ,
            type:'string'
        },
        body:{
            describe:'this is body description in add command',
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body)
    }
})
yargs.parse();
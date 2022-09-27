const nodemailer = require('nodemailer')

let mailTr= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'abdallah.lahdheri01@gmail.com',
    }
})
let details = {
    from : 'abdallah.lahdheri01@gmail.com',
    to: 'duudhuhud@gmail.com',
    subject : 'our nodemailer',
    Text: 'test'
}
mailTr.sendMail(details,(err)=>{
    if (err){console.log('somthing want wrong',err)
}else{
    console.log('email has send',err)
}
})
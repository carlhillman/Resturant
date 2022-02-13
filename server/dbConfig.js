const config = {
  
    server:'LAPTOP-L4MVTOLS',
    database:'Resturant',
    options:{
        trustedServerCertificate:true,
        trustedConnection:true,
        enableArithAbort:true,
        instancename:'SQLEXPRESS'
    },
    port:1433
}
module.exports = config
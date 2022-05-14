const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage=`${__dirname}/../storage`;
        cb(null, pathStorage)
    },
    filename: function(req, file, cb){
        const name=file.originalname;
        console.log(name);
        const ext= name.split(".").pop();
        const filename = `media${Date.now()}.${ext}`;
        cb(null, filename);
    },
})

const upploadMiddleware= multer({storage})


module.exports  = upploadMiddleware;
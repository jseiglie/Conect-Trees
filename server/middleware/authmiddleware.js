const {verify} = require('jsonwebtoken')

const validateToken = (req, res, next) =>{
    const accessToken = req.header("accessToken");

    if (!accessToken){ return res.json({error: "El usuario no ha iniciado sesión"})};
    try {
        const validToken= verify(accessToken, "INSERT-YOUR-SECRET")
        const user = req.user
        if (validToken){
            return next();
        }
    } catch (error) {
        return res.json({error: error})
    }
}

module.exports= {validateToken}

import jwt from 'jsonwebtoken';



const jwtAuth = (req, res, next) => {
    const token = req.header.authorization.split(' ')[1]

    if (token) {
        jwt.verify(token, process.env.JWT_SECRETKEY, (err, user) => {
            if (err) {
                return res.status(401).send({
                    success: false,
                    message: "Not authorized"
                })
            }
            else {
                req.user = user
                next()
            }
        })
    }
    else{
        return res.status(401).send({
            success: false,
            message: "Not authorized"
        })
    }
}

export default jwtAuth;
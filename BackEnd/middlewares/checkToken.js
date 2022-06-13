const jwt = require('jsonwebtoken');

exports.checkTokenAdmin = (req, res, next) => {
    const tokenAdmin = req.body.tokenAdmin

    if (!tokenAdmin) {
        return res.status(200).json({
            success: false,
            message: 'Token không chính xác!'
        })
    }

    try {
        const decoded = jwt.verify(tokenAdmin, 'adminngominhthuan')
        req.userId = decoded.userId
        req.username = decoded.username
        next()
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: 'Token không chính xác!'
        })
    }


}


exports.checkTokenUser = (req, res, next) => {
    const tokenUser = req.body.tokenUser

    if (!tokenUser) {
        return res.status(200).json({
            success: false,
            message: 'Token không chính xác!'
        })
    }

    try {
        const decoded = jwt.verify(tokenUser, 'userngominhthuan')
        req.userId = decoded.userId
        req.username = decoded.username
        req.name = decoded.nameUser
        next()
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: 'Token không chính xác!'
        })
    }


}


exports.checkTokenAll = (req, res, next) => {
    const { tokenAdmin, tokenUser } = req.body

    try {
        if (tokenAdmin) {
            const decoded = jwt.verify(tokenAdmin, 'adminngominhthuan')
            req.userId = decoded.userId
            req.username = decoded.username
            req.name = decoded.username
            return next()
        }

        if (tokenUser) {
            const decoded = jwt.verify(tokenUser, 'userngominhthuan')
            req.userId = decoded.userId
            req.username = decoded.username
            req.name = decoded.nameStaff
            return next()
        }

        return res.status(200).json({
            success: false,
            message: 'Token không chính xác!'
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: 'Token không chính xác!'
        })
    }


}
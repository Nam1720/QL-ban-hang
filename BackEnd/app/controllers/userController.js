const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')

class userController {
    // [POST] /api/user/register
    async register(req, res) {
        const { username, password, name } = req.body

        if (!username || !password) {
            return res.status(200).json({
                success: false,
                message: 'Missing username or password'
            })
        }

        try {
            const user = await User.findOne({ username })

            if (user) {
                return res.status(200).json({
                    success: false,
                    message: 'Username đã tồn tại'
                })
            }

            const hashedPassword = await argon2.hash(password)
            const newUser = new User({
                username,
                password: hashedPassword,
                name
            })
            await newUser.save()

            const accessToken = jwt.sign({ userId: newUser._id, username, name: user.name }, 'userngominhthuan')
            res.json({
                success: true,
                message: 'Đã tạo thành công',
                accessToken,
                username,
                userId: newUser._id,
                name
            })
        } catch (error) {

        }
    }

    // [POST] /api/user/login
    async login(req, res) {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(200).json({
                success: false,
                message: 'Missing username or password'
            })
        }

        try {
            const user = await User.findOne({ username })
            if (!user) {
                return res.status(200).json({
                    success: false,
                    message: 'Tài khoản mật khẩu không chính xác'
                })
            }

            const passwordValid = await argon2.verify(user.password, password)
            if (!passwordValid) {
                return res.status(200).json({
                    success: false,
                    message: 'Tài khoản mật khẩu không chính xác'
                })
            }

            const accessToken = jwt.sign({ userId: user._id, username, name: user.name }, 'userngominhthuan')

            res.json({
                success: true,
                message: 'Đăng nhập thành công',
                accessToken,
                userId: user._id,
                username: username,
                name: user.name
            })
        } catch (error) {

        }
    }

    // [POST] /api/user/getList
    async getList(req, res) {
        try {
            const user = await User.findOne({})

            res.json({
                success: true,
                message: 'Get list user thành công!',
                userList: user
            })
        } catch (error) {
            res.json({
                success: false,
                message: 'Có lỗi xảy ra, xin vui lòng thử lại!',
                error
            })
        }
    }

    async updateUser(req, res) {

    }

    // [POST] /api/user/remove
    async removeUser(req, res) {
        const { username } = req.body

        try {
            await User.deleteOne({ username: username })

            return res.status(200).json({
                success: true,
                message: `Xóa ${username} Thành Công`
            })
        } catch (error) {
            return res.status(200).json({
                success: false,
                message: 'Có lỗi xảy ra, xin vui lòng thử lại!',
                error
            })
        }
    }

    // [POST] /api/user/find
    async findUser(req, res) {
        const { findUsername } = req.body

        try {
            const listFind = await User.find({ username: { $regex: findUsername, $options: 'i' } })

            return res.status(200).json({
                success: true,
                message: `Tìm thành công!`,
                listFind
            })
        } catch (error) {
            return res.status(200).json({
                success: false,
                message: 'Có lỗi xảy ra, xin vui lòng thử lại!',
                error
            })
        }
    }
}

module.exports = new userController;

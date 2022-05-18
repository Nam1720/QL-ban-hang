const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')

class userController {
    // [POST] /api/user/register
    async register(req, res) {
        const { username, password, nameStaff, phoneStaff } = req.body

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
            const listStaff = await User.find({})
            const newUser = new User({
                codeStaff: `NV${listStaff.length + 1}`,
                username,
                password: hashedPassword,
                nameStaff,
                phoneStaff: phoneStaff != '' ? phoneStaff : ''
            })
            await newUser.save()

            res.json({
                success: true,
                message: 'Đã tạo thành công',
                newUser
            })
        } catch (error) {
            console.log(error)
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

            const accessToken = jwt.sign({ userId: user._id, username, nameStaff: user.nameStaff }, 'userngominhthuan')

            res.json({
                success: true,
                message: 'Đăng nhập thành công',
                accessToken,
                userId: user._id,
                username: username,
                nameStaff: user.nameStaff
            })
        } catch (error) {

        }
    }

    // [POST] /api/user/getList
    async getList(req, res) {
        try {
            const userList = await User.find({})

            res.json({
                success: true,
                message: 'Get list user thành công!',
                userList
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
            const listStaff = await User.find({})

            return res.status(200).json({
                success: true,
                message: `Xóa ${username} Thành Công`,
                listStaff
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

const Gusts = require('../../models/Gusts')

class gustController {
    // [POST] /api/gust/create
    async create(req, res) {
        const { nameGust, DateOfBirth, email, phone, address } = req.body

        try {
            const Gust = await Gusts.find({})

            const newGust = new Gusts({
                codeGust: `KH${Gust.length + 1}`,
                nameSeller: req.name,
                nameGust: nameGust,
                DateOfBirth: DateOfBirth != '' ? DateOfBirth : '',
                email: email != '' ? email : '',
                phone: phone != '' ? phone : '',
                address: address != '' ? address : ''
            })
            await newGust.save()

            return res.status(200).json({
                success: true,
                message: 'Đã tạo khách hàng thành công!',
                newGust
            })
        } catch (error) {
            res.status(200).json({
                success: false,
                message: 'Đã lỗi xảy ra, vui lòng thử lại!',
                error
            })
        }
    }

    // [POST] /api/gust/get-list
    async getList(req, res) {
        try {
            const GustList = await Gusts.find({})

            return res.status(200).json({
                success: true,
                message: 'Get list khách hàng thành công!',
                GustList
            })
        } catch (error) {
            res.status(200).json({
                success: false,
                message: 'Đã lỗi xảy ra, vui lòng thử lại!',
                error
            })
        }
    }

    // [POST] /api/gust/update
    async update(req, res) {
        const { codeGust, nameGust, DateOfBirth, email, phone, address } = req.body

        try {
            await Gusts.updateOne( { codeGust }, {
                nameGust: nameGust,
                DateOfBirth: DateOfBirth != '' ? DateOfBirth : '',
                email: email != '' ? email : '',
                phone: phone != '' ? phone : '',
                address: address != '' ? address : ''
            })

            return res.status(200).json({
                success: true,
                message: 'Đã cập nhật khách hàng thành công!',
            })
        } catch (error) {
            res.status(200).json({
                success: false,
                message: 'Đã lỗi xảy ra, vui lòng thử lại!',
                error
            })
        }
    }

    // [POST] /api/invoice/remove
    async remove(req, res) {
        const { codeGust } = req.body

        try {
            await Gusts.deleteOne({ codeGust })

            return res.status(200).json({
                success: true,
                message: `Xóa khách hàng ${codeGust} thành công!`
            })
        } catch (error) {
            res.json({
                success: false,
                message: 'Đã lỗi xảy ra, vui lòng thử lại!',
                error
            })
        }
    }
}

module.exports = new gustController;

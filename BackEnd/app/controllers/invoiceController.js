const Goods = require('../../models/Goods')
const Invoices = require('../../models/Invoices')

class invoiceController {
    // [POST] /api/invoice/create
    async create(req, res) {
        const { nameGuest, addressGuest, phoneGuest, paymentType, productsBuying, totalMoney } = req.body
        try {
            const Invoice = await Invoices.find({})

            const newInvoice = new Invoices({
                codeInvoice: `HD${Invoice.length + 1}`,
                nameSeller: req.name,
                nameGuest: nameGuest != '' ? nameGuest : 'Khách lẻ',
                addressGuest: addressGuest != '' ? addressGuest : '',
                phoneGuest: phoneGuest != '' ? phoneGuest : '',
                paymentType,
                productsBuying,
                totalMoney
            })
            await newInvoice.save()

            productsBuying.map((good) => {
                Goods.findOne({ codeProduct: good.codeProduct })
                    .then(sanpham => {
                        Goods.updateOne({ codeProduct: good.codeProduct }, { inventory: Number(sanpham.inventory) - good.countProduct })
                            .then(() => { })
                            .catch(err => {
                                res.status(200).json({
                                    success: false,
                                    message: `Không cập nhật lại được số lượng của ${good.codeProduct}. Vui lòng báo lại quản lý!`,
                                    err
                                })
                            })
                    })
                    .catch()
            })

            return res.status(200).json({
                success: true,
                message: 'Đã tạo hóa đơn thành công!',
            })
        } catch (error) {
            res.status(200).json({
                success: false,
                message: 'Đã lỗi xảy ra, vui lòng thử lại!',
                error
            })
        }
    }

    // [POST] /api/invoice/get-list
    async getList(req, res) {
        try {
            const InoviceList = await Invoices.find({})

            return res.status(200).json({
                success: true,
                message: 'Get list hóa đơn thành công!',
                InoviceList
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
        const { codeInvoice } = req.body

        try {
            await Invoices.deleteOne({ codeInvoice })

            const InoviceList = await Invoices.find({})

            return res.status(200).json({
                success: true,
                message: `Xóa hóa đơn ${codeInvoice} thành công!`,
                InoviceList
            })
        } catch (error) {
            res.json({
                success: false,
                message: 'Đã lỗi xảy ra, vui lòng thử lại!',
                error
            })
        }
    }

    // [POST] /api/invoice/find
    async find(req, res) {
        const { find } = req.body

        try {
            const listCode = await Invoices.find({ codeInvoice: { $regex: find, $options: 'i' } })

            return res.status(200).json({
                success: true,
                message: `Tìm thành công!`,
                arrayFind: listCode
            })

        } catch (error) {
            console.log(error)
            return res.status(200).json({
                success: false,
                message: 'Có lỗi xảy ra, xin vui lòng thử lại!',
                error
            })
        }
    }
}

module.exports = new invoiceController;

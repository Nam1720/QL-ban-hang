const Goods = require("../../models/Goods");

class goodController {
  // [POST] /api/good/add
  async add(req, res) {
    const { productName, priceCapital, priceSell, inventory } = req.body;

    try {
      const Good = await Goods.find({});

      const newGood = new Goods({
        codeProduct: `SP${Good.length + 1}`,
        productName,
        priceCapital,
        priceSell,
        inventory,
      });
      await newGood.save();

      return res.status(200).json({
        success: true,
        message: "Đã thêm sản phẩm thành công",
        newGood,
      });
    } catch (error) {
      res.status(200).json({
        success: false,
        message: "Đã lỗi xảy ra, vui lòng thử lại!",
        error,
      });
    }
  }

  // [POST] /api/good/get-list
  async getList(req, res) {
    try {
      const GoodList = await Goods.find({});

      return res.status(200).json({
        success: true,
        message: "Get list sản phẩm thành công!",
        GoodList,
      });
    } catch (error) {
      res.json({
        success: false,
        message: "Đã lỗi xảy ra, vui lòng thử lại!",
        error,
      });
    }
  }

  // [POST] /api/good/update
  async update(req, res) {
    const {
      codeProduct,
      productName,
      priceCapital,
      priceSell,
      inventory,
      urlImg,
    } = req.body;

    try {
      await Goods.updateOne(
        { codeProduct },
        {
          productName,
          priceCapital,
          priceSell,
          inventory,
          urlImg,
        }
      );

      return res.status(200).json({
        success: true,
        message: "Cập nhật sản phẩm thành công!",
      });
    } catch (error) {
      res.json({
        success: false,
        message: "Đã lỗi xảy ra, vui lòng thử lại!",
        error,
      });
    }
  }

  // [POST] /api/good/update-priceSell
  async updatePriceSell(req, res) {
    const { codeProduct, priceSell } = req.body;

    try {
      await Goods.updateOne(
        { codeProduct },
        {
          priceSell,
        }
      );

      return res.status(200).json({
        success: true,
        message: "Cập nhật sản phẩm thành công!",
      });
    } catch (error) {
      res.json({
        success: false,
        message: "Đã lỗi xảy ra, vui lòng thử lại!",
        error,
      });
    }
  }

  // [POST] /api/good/remove
  async remove(req, res) {
    const { codeProduct } = req.body;

    try {
      await Goods.deleteOne({ codeProduct });
      const listCategory = await Goods.find({});

      return res.status(200).json({
        success: true,
        message: `Xóa sản phẩm ${codeProduct} thành công!`,
        listCategory,
      });
    } catch (error) {
      res.json({
        success: false,
        message: "Đã lỗi xảy ra, vui lòng thử lại!",
        error,
      });
    }
  }
}

module.exports = new goodController();

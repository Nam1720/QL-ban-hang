/* eslint-disable no-undef */
import {
  SaveOutlined,
  StopOutlined,
  DeleteOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Button, Col, Modal, Row, Space, Upload } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, InputNumber } from 'antd';
import { setListCategory, setmodalAdd } from '../_store/categorySlice';
import { openNotificationWithIcon } from '../../../helpers/funcs';
import { addProduct } from '../_api';

const CategoryModalAdd = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const modalAdd = useSelector((state) => state.category.modalAdd);
  const listCategory = useSelector((state) => state.category.listCategory);

  const onFinish = async () => {
    const values = await form.validateFields();

    console.log('form: ', values);
    addProduct(values).then((res) => {
      if (res.data.success) {
        openNotificationWithIcon('success', res.data.message);

        dispatch(setListCategory([...listCategory, res.data.newGood]));
        handelcancel();
      } else {
        openNotificationWithIcon('error', res.data.message);
      }
    });
  };

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);

      reader.onerror = (error) => reject(error);
    });

  const handleCancelImg = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <div className="btn-upload">
        {' '}
        <UploadOutlined /> Tải ảnh sản phẩm
      </div>
    </div>
  );

  const dispatch = useDispatch();
  const handelcancel = () => {
    dispatch(setmodalAdd(false));
  };

  // const onFinish = (values) => {
  //   console.log(values);
  // };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Modal
        width={800}
        visible={modalAdd.view}
        footer={null}
        title="Thêm Sản phẩm"
        onCancel={handelcancel}
      >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Row>
            <Col span={8}>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                maxCount={1}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancelImg}
              >
                <img
                  alt="example"
                  style={{
                    width: '100%',
                  }}
                  src={previewImage}
                />
              </Modal>
            </Col>

            <Col span={16}>
              <Form.Item
                name="productName"
                label="Tên sản phẩm"
                rules={[{ required: true, message: 'Tên sản phẩm bắt buộc' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="priceCapital"
                label="Giá nhập"
                rules={[{ required: true, message: 'Giá nhập bắt buộc' }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name="priceSell"
                label="Giá bán"
                rules={[{ required: true, message: 'Giá bán bắt buộc' }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name="inventory"
                label="Số lượng"
                rules={[
                  { required: true, message: 'Số lượng sản phẩm bắt buộc' },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item {...tailLayout}>
            <Space
              size="middle"
              className="d-flex"
              style={{ flexDirection: 'row-reverse' }}
            >
              <Button
                onClick={() => handelcancel()}
                className="font-weight-bold"
                style={{ padding: '0 32px' }}
                icon={<StopOutlined />}
              >
                Hủy
              </Button>

              <Button
                htmlType="button"
                onClick={onReset}
                icon={<DeleteOutlined />}
              >
                Reset
              </Button>
              <Button
                className="font-weight-bold"
                style={{
                  background: '#4bac4d',
                  border: 'none',
                  padding: '0 32px',
                }}
                htmlType="submit"
                type="primary"
                icon={<SaveOutlined />}
              >
                Thêm
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CategoryModalAdd;

import { SaveOutlined, StopOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalAdd } from '../_store/categorySlice';

const CategoryModalAdd = () => {
  const dispatch = useDispatch();
  const modalAdd = useSelector((state) => state.category.modalAdd);

  const handleCancel = () => {
    dispatch(setModalAdd(false));
  };
  return (
    <>
      <Modal
        width={800}
        footer={null}
        title="Thêm Sản phẩm"
        visible={modalAdd}
        onCancel={handleCancel}
      >
        <Space
          size="middle"
          className="d-flex"
          style={{ flexDirection: 'row-reverse' }}
        >
          <Button
            onClick={() => handleCancel()}
            className="font-weight-bold"
            style={{ padding: '0 32px' }}
            icon={<StopOutlined />}
          >
            Hủy
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
      </Modal>
    </>
  );
};

export default CategoryModalAdd;

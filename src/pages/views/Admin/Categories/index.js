import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Categories = ({ categories, onRemove }) => {
  function removeElement(id) {
    onRemove(id);
  }
  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Sản phẩm</h6>
        </div>
        <div className="card-body">
          <Link to="/admin/add-category">
            <button className="btn btn-primary">Thêm danh mục</button>
          </Link>

          <div className="table-responsive mt-3">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Tên</th>
                  <th scope="col">Mô tả</th>
                  <th scope="col">Tùy chọn</th>
                </tr>
              </thead>
              <tbody>
                {categories.map(({ id, name, detail }, index) => (
                  <tr id={"row-" + id} key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <Link to={`/admin/detail-product/${id}`}>{name}</Link>
                    </td>
                    <td>{detail}</td>
                    <td>
                      <Link
                        to={`/admin/edit-category/${id}`}
                        className="btn btn-success"
                      >
                        Cập nhật
                      </Link>{" "}
                      &nbsp;
                      <button
                        onClick={() => removeElement(id)}
                        type=" button"
                        className="btn btn-danger"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

Categories.propTypes = {};

export default Categories;

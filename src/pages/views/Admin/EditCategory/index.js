import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditCategory = ({ onAdd, categories }) => {
  let { id } = useParams();
  let history = useHistory();
  const category = categories.find((category) => category.id === id);
  const { register, handleSubmit, watch, errors } = useForm();
  const onHandleSubmit = (data) => {
    const newData = {
      id: category.id,
      ...data,
    };
    console.log(newData);
    onAdd(newData);
    console.log(categories);
    history.push("/admin/categories");
    alert("Sửa danh mục thành công");
  };
  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Thêm sản phẩm</h6>
        </div>
        <div className="card-body">
          <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="form-group">
              <label htmlFor="">Tên danh mục</label>
              <input
                className="form-control"
                type="text"
                placeholder=""
                name="name"
                defaultValue={category.name}
                ref={register({ required: true })}
              />
              <small id="imageHelp" className="form-text text-danger">
                {errors.name && <span>Không để trống danh mục</span>}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="">Mô tả</label>
              <input
                className="form-control"
                type="text"
                placeholder=""
                name="detail"
                defaultValue={category.detail}
                ref={register({ required: true })}
              />
              <small id="imageHelp" className="form-text text-danger">
                {errors.name && <span>Không để trống mô tả</span>}
              </small>
            </div>

            <button type="submit" className="btn btn-success mr-2">
              Cập nhật
            </button>
            <Link to="/admin/categories">
              <a className="btn btn-danger text-white">Trở lại</a>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

EditCategory.propTypes = {};

export default EditCategory;

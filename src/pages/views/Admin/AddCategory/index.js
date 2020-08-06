import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddCategory = ({ onAdd }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  let history = useHistory();

  const onHandleSubmit = (data) => {
    console.log(data);
    const newData = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
    };
    console.log(newData);
    onAdd(newData);
    history.push("/admin/categories");
    alert("Thêm danh mục thành công");
  };
  return (
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
              ref={register({ required: true, pattern: /^\S{1}.{0,24}$/i })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.name && errors.name.type === "required" && (
                <span>Không để trống tên danh mục </span>
              )}
              {errors.name && errors.name.type === "pattern" && (
                <span>
                  Tên danh mục không bắt đầu bằng dấu cách và ít hơn 25 kí tự{" "}
                </span>
              )}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="">Mô tả</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              name="detail"
              ref={register({ required: true, pattern: /^\S{1}.{0,24}$/i })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.name && errors.name.type === "required" && (
                <span>Không để trống mô tả danh mục</span>
              )}
              {errors.name && errors.name.type === "pattern" && (
                <span>
                  Tên danh mục không bắt đầu bằng dấu cách và ít hơn 50 kí tự{" "}
                </span>
              )}
            </small>
          </div>

          <button type="submit" className="btn btn-primary mr-2">
            Thêm
          </button>
          <Link to="/admin/categories">
            <a className="btn btn-danger text-white">Trở lại</a>
          </Link>
        </form>
      </div>
    </div>
  );
};

AddCategory.propTypes = {};

export default AddCategory;

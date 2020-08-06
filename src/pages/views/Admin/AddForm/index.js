import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddForm = ({ onAdd, categories }) => {
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
    history.push("/admin/products");
    alert("Thêm sản phẩm thành công");
  };
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Thêm sản phẩm</h6>
      </div>
      <div className="card-body">
        <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-group">
            <label htmlFor="">Tên sản phẩm</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              name="name"
              ref={register({ required: true, pattern: /^\S{1}.{0,24}$/i })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.name && errors.name.type === "required" && (
                <span>Không để trống tên sản phẩm </span>
              )}
              {errors.name && errors.name.type === "pattern" && (
                <span>
                  Tên sản phẩm không bắt đầu bằng dấu cách và ít hơn 25 kí tự{" "}
                </span>
              )}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="">Giá sản phẩm</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              name="price"
              ref={register({ required: true, pattern: /^[0-9]{1,10}$/ })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.price && errors.price.type === "required" && (
                <span>Không để trống giá sản phẩm</span>
              )}
              {errors.price && errors.price.type === "pattern" && (
                <span>Giá sản phẩm gồm các số từ 0-9 ít hơn 10 kí tự</span>
              )}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="">Ảnh</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              name="image"
              ref={register({ required: true, pattern: /^\S{1}.{0,100}$/i })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.image && errors.image.type === "required" && (
                <span>Ảnh không được để trống</span>
              )}
            </small>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text">Danh mục</label>
            </div>

            <select
              className="custom-select"
              name="category"
              ref={register({ required: true })}
            >
              <option selected></option>
              {categories.map(({ id, name }, index) => (
                <option key={index} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <small id="imageHelp" className="form-text text-danger">
            {errors.category && errors.category.type === "required" && (
              <span>Không để trống danh mục</span>
            )}
          </small>

          <button type="submit" className="btn btn-primary mr-2">
            Thêm
          </button>
          <Link to="/admin/products">
            <a className="btn btn-danger text-white">Trở lại</a>
          </Link>
        </form>
      </div>
    </div>
  );
};

AddForm.propTypes = {};

export default AddForm;

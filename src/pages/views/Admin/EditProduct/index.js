import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditProduct = ({ onAdd, products, categories }) => {
  let { id } = useParams();
  let history = useHistory();
  const product = products.find((product) => product.id === id);
  const slug = categories.find(
    (categories) => categories.id === product.category
  );

  console.log(slug);
  const { register, handleSubmit, watch, errors } = useForm();
  const onHandleSubmit = (data) => {
    console.log(data);
    const newData = {
      id: product.id,
      ...data,
    };
    console.log(newData);
    onAdd(newData);
    history.push("/admin/products");
    alert("Sửa sản phẩm thành công");
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Sửa sản phẩm</h6>
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
              defaultValue={product.name}
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
              defaultValue={product.price}
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
              defaultValue={product.image}
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
              {categories.map(({ id, name }, index) => (
                <option active key={index} value={id}>
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

          <button type="submit" className="btn btn-success mr-2">
            Cập nhật
          </button>
          <Link to="/admin/products">
            <a className="btn btn-danger text-white">Trở lại</a>
          </Link>
        </form>
      </div>
    </div>
  );
};

EditProduct.propTypes = {};

export default EditProduct;

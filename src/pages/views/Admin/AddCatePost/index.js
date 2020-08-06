import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const AddCatePost = ({ onAdd }) => {
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
    // alert("Thêm danh mục bài viết thành công");
  };

  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Thêm danh mục bài viết
          </h6>
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
                  <span>Không để trống tên sản phẩm </span>
                )}
                {errors.name && errors.name.type === "pattern" && (
                  <span>
                    Tên danh mục không bắt đầu bằng dấu cách và ít hơn 25 kí tự{" "}
                  </span>
                )}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="">Tiêu đề danh mục</label>
              <input
                className="form-control"
                type="text"
                placeholder=""
                name="content"
                ref={register({ required: true, pattern: /^\S{1}.{0,100}$/i })}
              />
              <small id="imageHelp" className="form-text text-danger">
                {errors.price && errors.content.type === "required" && (
                  <span>Không để trống tiêu đề danh mục</span>
                )}
                {errors.price && errors.content.type === "pattern" && (
                  <span>Tiêu đề gồm ít hơn 100 kí tự</span>
                )}
              </small>
            </div>

            <button type="submit" className="btn btn-primary mr-2">
              Thêm
            </button>
            <Link to="/admin/products">
              <a className="btn btn-danger text-white">Trở lại</a>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

AddCatePost.propTypes = {};

export default AddCatePost;

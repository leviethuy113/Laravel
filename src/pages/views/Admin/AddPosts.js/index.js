import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

const AddPosts = ({ onAdd }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  let history = useHistory();

  const onHandleSubmit = (data) => {
    const newData = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
    };
    onAdd(newData);
    history.push("/admin/posts");
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Thêm bài viết</h6>
      </div>
      <div className="card-body">
        <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-group">
            <label htmlFor="">Tiêu đề bài viết</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              name="title"
              ref={register({ required: true, pattern: /^\S{1}.{0,24}$/i })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.title && errors.title.type === "required" && (
                <span>Không để trống tiêu đề bài viết </span>
              )}
              {errors.title && errors.title.type === "pattern" && (
                <span>
                  Tiêu đề bài viết không bắt đầu bằng dấu cách và ít hơn 25 kí
                  tự{" "}
                </span>
              )}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="">Nội dung</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              name="content"
              ref={register({ required: true, pattern: /^\S{1}.{0,500}$/i })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.content && errors.content.type === "required" && (
                <span>Không để trống nội dung bài viết</span>
              )}
              {errors.content && errors.content.type === "pattern" && (
                <span>nội dung bài viết ít hơn 500 kí tự</span>
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
  );
};

AddPosts.propTypes = {};

export default AddPosts;

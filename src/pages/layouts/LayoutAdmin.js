import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Admin/Sidebar";
import Topbar from "../../components/Admin/TopBar";
import Footer from "../../components/Admin/Footer";
import Products from "../../pages/views/Admin/Products";
import Categories from "../../pages/views/Admin/Categories";
import DetailProduct from "../../pages/views/Admin/DetailProduct";
import AddForm from "../../pages/views/Admin/AddForm";
import EditProduct from "../../pages/views/Admin/EditProduct";
import dataFake from "../../dataFake";
import "../../assets/css/admin/sb-admin-2.min.scss";
import "../../assets/css/admin/main.scss";
import axios from "axios";
import productApi from "../../api/productApi";
import cateApi from "../../api/cateApi";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import AddCategory from "../views/Admin/AddCategory";
import EditCategory from "../views/Admin/EditCategory";

export default ({ children }) => {
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await productApi.getAll();
        setproducts(data);
      } catch (error) {}
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await cateApi.getAll();
        setcategories(data);
      } catch (error) {}
    };
    getCategories();
  }, []);

  console.log(products);
  const removeProduct = (id) => {
    console.log(id);
    const newData = products.filter((product) => product.id !== id);
    console.log(newData);
    setproducts(newData);
    productApi.remove(id);
    alert("Bạn chắc chắn muốn xóa sản phẩm này");
  };

  const onHandleAdd = (product) => {
    console.log(product);
    setproducts([...products, product]);
    productApi.create(product);
  };

  const onHandleUpdate = (updateProduct) => {
    const newProducts = products.map(
      (product) => (product.id === updateProduct.id ? updateProduct : product) // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    setproducts(newProducts);
    productApi.update(updateProduct.id, updateProduct);
    //console.log(updateProduct.id);
  };

  const onUpdateCategory = (updateCategory) => {
    const newCategorys = categories.map(
      (category) =>
        category.id === updateCategory.id ? updateCategory : category // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    setproducts(newCategorys);
    cateApi.update(updateCategory.id, updateCategory);
    //console.log(updateProduct.id);
  };

  const onHandleAddCategory = (category) => {
    console.log(category);
    setcategories([...categories, category]);
    cateApi.create(category);
    console.log(category);
  };

  const removeCategory = (id) => {
    console.log(id);
    const newData = categories.filter((cate) => cate.id !== id);
    console.log(newData);
    setcategories(newData);
    cateApi.remove(id);
    alert("Xóa danh mục thành công");
  };
  return (
    <div className="admin-page">
      <Router>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div className="container-fluid">
                <Switch>
                  <Route exact path="/admin/">
                    Home page
                  </Route>
                  <Route path="/admin/categories">
                    <Categories
                      categories={categories}
                      onRemove={removeCategory}
                    />
                  </Route>
                  <Route path="/admin/products">
                    <Products
                      products={products}
                      categories={categories}
                      onRemove={removeProduct}
                    />
                  </Route>
                  <Route path="/admin/add-product">
                    <AddForm onAdd={onHandleAdd} categories={categories} />
                  </Route>
                  <Route path="/admin/add-category">
                    <AddCategory onAdd={onHandleAddCategory} />
                  </Route>
                  <Route path="/admin/detail-product/:id">
                    <DetailProduct products={products} />
                  </Route>
                  <Route path="/admin/edit-product/:id">
                    <EditProduct
                      products={products}
                      onAdd={onHandleUpdate}
                      categories={categories}
                    />
                  </Route>
                  <Route path="/admin/edit-category/:id">
                    <EditCategory
                      categories={categories}
                      onAdd={onUpdateCategory}
                    />
                  </Route>
                </Switch>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
};

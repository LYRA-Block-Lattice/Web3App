import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./UserProfile.css";

const UserProfile: FunctionComponent = () => {
  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onContextMenuButtonClick = useCallback(() => {
    //TODO: context menu
  }, []);

  return (
    <div className="userprofile">
      <TopNavigationBar
        title="User Profile"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className="form">
        <div className="card">
          <div className="item">
            <div className="label">Avatar</div>
            <img
              className="avatar-icon"
              alt=""
              src="../asserts/avatar@2x.png"
            />
            <img className="iconright" alt="" src="../asserts/iconright.svg" />
          </div>
          <div className="divider">
            <div className="line" />
          </div>
          <div className="item1">
            <div className="label1">ID</div>
            <div className="placeholder">805610947</div>
          </div>
          <div className="divider">
            <div className="line" />
          </div>
          <div className="item1">
            <div className="input-item">
              <div className="label">Nick Name</div>
              <div className="placeholder">YingMing</div>
              <img
                className="iconright"
                alt=""
                src="../asserts/iconright.svg"
              />
            </div>
          </div>
          <div className="divider">
            <div className="line" />
          </div>
          <div className="item3">
            <div className="label1">Region</div>
            <div className="placeholder">浙江省杭州市拱墅区</div>
            <img className="iconright" alt="" src="../asserts/iconright.svg" />
          </div>
        </div>
        <div className="form1">
          <div className="form-card-title">
            <div className="text10">CardTitle</div>
          </div>
          <div className="card">
            <div className="form-item-select">
              <div className="label4">Phone</div>
              <div className="placeholder">177*********98</div>
              <img
                className="iconright"
                alt=""
                src="../asserts/iconright.svg"
              />
            </div>
          </div>
        </div>
        <div className="form1">
          <div className="form-card-title">
            <div className="text10">CardTitle</div>
          </div>
          <div className="card">
            <div className="form-item-select">
              <div className="label4">Email</div>
              <div className="placeholder">KUA92390897@163.com</div>
              <img
                className="iconright"
                alt=""
                src="../asserts/iconright.svg"
              />
            </div>
          </div>
        </div>
        <div className="form1">
          <div className="form-card-title">
            <div className="text10">邮寄地址</div>
          </div>
          <div className="list">
            <div className="item4">
              <div className="text-parent">
                <div className="placeholder-parent">
                  <i className="placeholder5">张俊</i>
                  <div className="placeholder6">13988781732</div>
                </div>
                <div className="button-group">
                  <div className="button">
                    <div className="title">删除</div>
                  </div>
                  <div className="button">
                    <div className="title">修改</div>
                  </div>
                </div>
              </div>
              <div className="label1">浙江省杭州市拱墅区三塘小区******</div>
            </div>
            <div className="divider">
              <div className="line" />
            </div>
            <div className="item4">
              <div className="text-parent">
                <div className="placeholder-parent">
                  <i className="placeholder5">孙悦婷</i>
                  <div className="placeholder6">13988781732</div>
                </div>
                <div className="button-group">
                  <div className="button">
                    <div className="title">删除</div>
                  </div>
                  <div className="button">
                    <div className="title">修改</div>
                  </div>
                </div>
              </div>
              <div className="label1">浙江省杭州市拱墅区三塘小区******</div>
            </div>
            <div className="button-wrapper">
              <div className="button4">
                <img
                  className="iconadd-one"
                  alt=""
                  src="../asserts/iconaddone.svg"
                />
                <div className="label1">新增地址</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default UserProfile;

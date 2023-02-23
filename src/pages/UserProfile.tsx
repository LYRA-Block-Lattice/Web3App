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

  return (
    <div className="userprofile">
      <TopNavigationBar title="User Profile" />
      <div className="form">
        <div className="card">
          <div className="item">
            <div className="label">头像</div>
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
              <div className="label">昵称</div>
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
            <div className="label1">所属区域</div>
            <div className="placeholder">浙江省杭州市拱墅区</div>
            <img className="iconright" alt="" src="../asserts/iconright.svg" />
          </div>
        </div>
        <div className="form1">
          <div className="form-card-title">
            <div className="text">CardTitle</div>
          </div>
          <div className="card">
            <div className="form-item-select">
              <div className="label4">绑定手机号</div>
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
            <div className="text">CardTitle</div>
          </div>
          <div className="card">
            <div className="form-item-select">
              <div className="label4">邮件地址</div>
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
            <div className="text">邮寄地址</div>
          </div>
          <div className="list">
            <div className="item4">
              <div className="frame-group">
                <div className="placeholder-parent">
                  <div className="placeholder5">张俊</div>
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
              <div className="frame-group">
                <div className="placeholder-parent">
                  <div className="placeholder5">孙悦婷</div>
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
      <BottomNavigationBar
        boxAltLight1="../asserts/box-alt-light.svg"
        moleculeLight1="../asserts/molecule-light.svg"
        walletLight1="../asserts/wallet-light.svg"
        userAltLight1="../asserts/user-alt-light.svg"
        textColor="#434343"
        textColor2="#0ebd8d"
      />
    </div>
  );
};

export default UserProfile;

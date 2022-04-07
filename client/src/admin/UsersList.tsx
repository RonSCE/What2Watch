import React, {FC, useEffect} from "react";
import { Table, Tag, Space } from "antd";
import "antd/dist/antd.css";
import "./admin.css";
import {deleteUser, getUsers} from "../redux/reducers/admin-reducer";
import {AppStateType} from "../redux/Store";
import {useDispatch, useSelector} from "react-redux";
import {IUser} from "../api/internalAPI/internalApiTypes";


let date = Date.now();
function getDate(){
  date++;
  return date.toString()
}
export const UsersList:FC = () => {
  const dispatch = useDispatch();
  const onDelete = (email:string) => {
    dispatch(deleteUser(email));
  };
  const isFetching = useSelector((state:AppStateType) => state.admin.isFetching) as boolean;
  const columns = [
    //Fit data structure to backend
    {
      title: "First Name",
      dataIndex: "firstName",
      key: getDate(),
    },
    {
      title: "Last Name",
      key: "lastName",
      dataIndex: getDate(),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: getDate(),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: getDate(),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: getDate(),
    },

    {
      title: "Action",
      key: getDate(),
      render: (_: any, record: IUser) => (
          <Space size="middle">
            <a >Ban</a>
            <a onClick={()=>{onDelete(record.email as string)}}>Delete</a>
          </Space>
      ),
    },
  ];
  const users = useSelector<AppStateType>(state => state.admin.users) as IUser[];
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      <div className="info_container">
        <h2>Users List</h2>
        <Table columns={columns} dataSource={users} loading={isFetching}/>
      </div>
    </div>
  );
};


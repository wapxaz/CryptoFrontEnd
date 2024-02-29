import { Table } from "antd";
import React from "react";
import { useCrypto } from "../context/crypto-context";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Price, $",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => a.price - b.price,
    defaultSortOrder: "descend",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    sorter: (a, b) => a.amount - b.amount,
    defaultSortOrder: "descend",
  },
];

export default function AssetsTable() {
  const { assets } = useCrypto();

  const dataSource = assets.map((asset) => {
    return {
      key: asset.id,
      name: asset.name,
      price: asset.price,
      amount: asset.amount,
    };
  });

  return (
    <div>
      <Table pagination={false} dataSource={dataSource} columns={columns} />
    </div>
  );
}

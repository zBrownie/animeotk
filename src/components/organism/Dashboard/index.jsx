import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "@nandorojo/swr-firestore";
function Dashboard() {
  const { id } = useParams();
  const response = useDocument(`users/${id}`);

  if (response.loading) {
    return <div className="container">Loading...</div>;
  }

  if (response.data.exists) {
    console.log(response.data);
    return <div className="container">Data</div>;
  }
  return <div className="container">{response.error}</div>;
}

export default Dashboard;

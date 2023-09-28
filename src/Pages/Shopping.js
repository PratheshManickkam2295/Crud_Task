import React from "react";
import { useParams } from "react-router-dom";

export default function Shopping() {
  const params = useParams();
  console.log(params);
  return (
    <div
      className="page"
      style={{
        background: "blue",
      }}>
      Shopping Page for {params.productCategory}
    </div>
  );
}

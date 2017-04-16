import React from "react";
import PageHeader from "./page-header";

const Page = ({title, body}) => {
  return (
    <div className="page">
      <PageHeader title={title} />
      <main className="page-body">
          {body}
      </main>
    </div>
  );
}

export default Page;
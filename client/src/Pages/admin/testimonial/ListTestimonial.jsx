import React, { useEffect, useState } from "react";
import CardTestimonial from "../../../components/cardTestimonial/CardTestimonial";
import TestModelEdit from "../../../components/model/TestModelEdit";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../hook";

const ListTestimonial = ({ testiData, setTestiData, loading }) => {
  const [openEditTest, setOpenEditTest] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({
    testName: "",
    image: "",
    description: "",
  });
  const handleDelete = (id) => {
    const conform = window.confirm("Are you sure delete?");
    if (conform) {
      fetch(`${BASE_URL}/api/v1/testimonial/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((test) => {
          toast.success(test.message);
          if (test.result) {
            const newDataDelete = testiData.filter((item) => item._id !== id);
            setTestiData(newDataDelete);
          }
        });
    }
  };
  const handleUpdate = (id) => {
    setOpenEditTest(true);
    const newDataUpdate = testiData.find((item) => item._id === id);
    setDataUpdate(newDataUpdate);
  };

  const LoadingCpn = () => {
    return <div>Loading...</div>;
  };
  return (
    <>
      {loading ? (
        <LoadingCpn />
      ) : (
        testiData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <CardTestimonial
                item={item}
                handleDelete={handleDelete}
                setOpenEditTest={setOpenEditTest}
                handleUpdate={handleUpdate}
              />
            </React.Fragment>
          );
        })
      )}
      <TestModelEdit
        openEditTest={openEditTest}
        setOpenEditTest={setOpenEditTest}
        handleUpdate={handleUpdate}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        setTestiData={setTestiData}
        testiData={testiData}
      />
    </>
  );
};

export default ListTestimonial;

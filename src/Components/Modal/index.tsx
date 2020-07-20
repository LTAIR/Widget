import React, { useState } from "react";
import { Modal, Button } from "antd";

const Modals = () => {
  const [isSow, setIsShow] = useState(false);
  return (
    <>
      <Button onClick={() => {setIsShow(true)}}>弹出</Button>
  <Modal title={'test'} visible={isSow} onCancel={()=>{setIsShow(false)}} onOk={()=>{setIsShow(false)}}></Modal>
    </>
  );
};

export default Modals;

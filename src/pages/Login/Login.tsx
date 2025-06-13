import { useState } from "react";
import heroimage from "../../assets/hero-image.png";
import "./styles.scss";
import { Button } from "@carbon/react";
import { CustomModal } from "../../components/Modal/Modal";

export const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="login-container">
      <img src={heroimage} className="background-image" alt="background" />
      <Button onClick={() => setIsModalOpen(true)} className="open-modal-btn">
        Open Modal
      </Button>

      {isModalOpen && (
        <>
          <div className="glass-filter" />
          <div className="modal-container">
            <CustomModal
              isModalOpen={isModalOpen}
              handleModalClose={() => {}}
              isRegisterModal={true}
              loading={false}
              modalTitle="Welcome"
            />
          </div>
        </>
      )}
    </div>
  );
};

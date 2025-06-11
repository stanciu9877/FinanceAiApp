import { InlineLoading, Modal, TextInput } from "@carbon/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface ModalProps {
  isModalOpen: boolean | undefined;
  handleModalClose: () => void;
  modalTitle: string;
  isRegisterModal: boolean | undefined;
  loading: boolean | undefined;
}

export const CustomModal = ({
  isModalOpen,
  handleModalClose,
  modalTitle,
  isRegisterModal,
  loading,
}: ModalProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    setError,
    reset,
    clearErrors,
    formState: { errors, isDirty },
  } = useForm({ mode: "onChange" });

  return (
    <div className="modal-container">
      <Modal
        className="inner-modal-container"
        open={isModalOpen}
        onRequestClose={handleModalClose}
        modalHeading={modalTitle}
        primaryButtonText={
          loading ? (
            <InlineLoading description="Saving..." />
          ) : isRegisterModal ? (
            "Sign Up Now"
          ) : (
            "Log in"
          )
        }
        primaryButtonDisabled={!isDirty}
      >
        <div className="modal-content">
          <Controller
            name="userEmail"
            control={control}
            rules={{
              required: `We need your email to ${
                isRegisterModal ? "Sign you" : "Log you into your account"
              }`,
            }}
            render={({ field }) => (
              <TextInput
                id="user-email"
                labelText={"Email"}
                placeholder="Enter the email"
                {...field}
                invalid={!!errors.userEmail}
                invalidText={errors.userEmail?.message as string}
                required
              />
            )}
          />
          <Controller
            name="userPassword"
            control={control}
            rules={{
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                message:
                  "Password must be at least 8 characters, include uppercase, lowercase, number, and special character",
              },
              required: `We need a password to ${
                isRegisterModal ? "sign you" : "log you into your account"
              }`,
            }}
            render={({ field }) => (
              <TextInput
                id="user-password"
                labelText={"Email"}
                placeholder="Enter the email"
                {...field}
                invalid={!!errors.userPassword}
                invalidText={errors.userPassword?.message as string}
                required
              />
            )}
          />
          {isRegisterModal && (
            <>
              <Controller
                name="userName"
                control={control}
                rules={{
                  required: "We need a userName",
                }}
                render={({ field }) => (
                  <TextInput
                    id="user-Nme"
                    labelText={"Name"}
                    placeholder="Enter the User Name"
                    {...field}
                    invalid={!!errors.userName}
                    invalidText={errors.userName?.message as string}
                    required
                  />
                )}
              />
              <Controller
                name="Country"
                control={control}
                rules={{
                  required: "Country is required",
                }}
                render={({ field }) => (
                  <TextInput
                    id="user-Nme"
                    labelText={"Name"}
                    placeholder="Enter the User Name"
                    {...field}
                    invalid={!!errors.userName}
                    invalidText={errors.userName?.message as string}
                    required
                  />
                )}
              />
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

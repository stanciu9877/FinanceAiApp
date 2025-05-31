import React from "react";
import { useAskAdvisor } from "../../api/useAdvisor";

export const ChatSection = () => {
  const { mutate, data, isPending, isError, error } = useAskAdvisor();
  return <div>ChatSection</div>;
};

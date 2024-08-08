import { AntdContext } from "@/app/context/AntdContext";
import { IButton } from "@/app/interface/interface";
import { Button } from "antd";
import { useContext } from "react";

const LoadingButton = ({ children }: IButton) => {
  //
  const { loading } = useContext(AntdContext);

  return (
    <Button
      htmlType="submit"
      loading={loading}
      style={{
        backgroundColor: "#BB031D",
        color: "white",
        fontSize: "20px",
      }}
      className="h-[6vh] "
    >
      {children}
    </Button>
  );
};

export default LoadingButton;

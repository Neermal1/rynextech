"use client";
import LoadingButton from "@/app/components/Button/LoadingButton";
import { AntdContext } from "@/app/context/AntdContext";
import { axiosInstance } from "@/app/utils/axiosInstance/axiosInstance";
import { Form, Input, notification } from "antd";
import { useContext } from "react";

const ContactForm = () => {
  //states
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { setIsLoading } = useContext(AntdContext);

  const handleContactSubmit = async (values: any) => {
    try {
      const payload = {
        name: values?.name,
        email: values?.email,
        phone: values?.phone_number,
        message: values?.message,
      };
      if (payload) {
        setIsLoading(true);

        const response = await axiosInstance.post("/contact/store", payload);
        if (response?.status === 200) {
          notification.success({
            message: response?.data?.message,
          });
          form.resetFields();
          setIsLoading(false);
        } else {
          notification.error({
            message: "Sorry Something went wrong",
          });
          form.resetFields();
          setIsLoading(false);
        }
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <div
        className={` bg-white  drop-shadow-md p-[15px] flex items-center justify-center rounded-[8px] border-t-[4px]  border-t-secondary `}
      >
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col gap-4 "
          onFinish={handleContactSubmit}
        >
          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium">Your Name</div>
            </div>
            <Form.Item
              hasFeedback
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please provide your full name",
                },
              ]}
              className="form-label"
            >
              <Input
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your full name here"
              />
            </Form.Item>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium">Email Address</div>
            </div>

            <Form.Item
              hasFeedback
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please provide your email address",
                },
                {
                  pattern: /^[a-z][a-z0-9._]*@[a-z][a-z0-9]*.[a-z]+/,
                  message:
                    "Please provide your email address in correct format",
                },
              ]}
              className=""
            >
              <Input
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your email address here"
              />
            </Form.Item>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium ">Phone Number</div>
            </div>

            <Form.Item
              hasFeedback
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: "Please provide your valid phone number",
                },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Mobile number must be 10 digits",
                },
              ]}
              className=""
            >
              <Input
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your phone number here"
              />
            </Form.Item>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium ">Message</div>
            </div>
            <Form.Item
              hasFeedback
              name="message"
              rules={[
                { required: true, message: "Please provide your message" },
              ]}
              className="color-changer"
            >
              <TextArea
                rows={4}
                cols={10}
                className="lg:w-[380px] w-[300px]"
                placeholder="Enter your message please"
                autoSize={false}
              />
            </Form.Item>
          </div>

          <Form.Item className="">
            <div className=" flex items-center justify-center lg:h-[6vh]">
              <LoadingButton>Submit</LoadingButton>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default ContactForm;

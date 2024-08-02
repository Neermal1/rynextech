import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const CompanyInfo = () => {
  return (
    <div>
      <div className="mt-[140px] lg:mt-0 flex flex-col lg:flex-row gap-10">
        <div className="">
          <div className="flex items-start gap-2 border-[1px] border-neutral px-12 py-2 relative rounded-md">
            <div className="bg-blue-300 rounded-full translate-y-[-2px] p-2 absolute left-[-12px]">
              <div className="w-[25px] h-[25px] bg-blue-600 rounded-full  flex items-center justify-center">
                <FaPhoneAlt className="text-white m-2" />
              </div>
            </div>
            <div>
              <div className="text-neutral">Phone</div>
              <a href="tel:12345678910">+123 4567 8910</a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start gap-2 border-[1px] border-neutral px-12 py-2 relative rounded-md">
            <div className="bg-blue-300 rounded-full translate-y-[-2px] p-2 absolute left-[-12px]">
              <div className="w-[25px] h-[25px] bg-blue-600 rounded-full  flex items-center justify-center p-1">
                <CiMail className="text-white" />
              </div>
            </div>
            <div>
              <div className="text-neutral">Email</div>
              <a href="tel:12345678910">mail@mail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;

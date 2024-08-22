import { ICompanyProfileData } from "@/app/interface/interface";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const CompanyInfo = ({ data }: ICompanyProfileData) => {
  return (
    <div>
      <div className="mt-[140px] lg:mt-0 flex flex-col lg:flex-row gap-10">
        <div className="">
          <div className="flex items-start gap-2 border-[1px] border-neutral px-12 py-2 relative rounded-md">
            <div className="bg-blue-300 rounded-full  top-[4px] p-2 absolute left-[-12px]">
              <div className="w-[20px] h-[20px] bg-blue-600 rounded-full  flex items-center justify-center p-1">
                <CiMail className="text-white" />
              </div>
            </div>
            <div>
              <div className="text-neutral">Phone: </div>
              <a href={`tel:${data?.company_phone}`}>{data?.company_phone}</a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start gap-2 border-[1px] border-neutral px-12 py-2 relative rounded-md">
            <div className="bg-blue-300 rounded-full  top-[4px] p-2 absolute left-[-12px]">
              <div className="w-[20px] h-[20px] bg-blue-600 rounded-full  flex items-center justify-center p-1">
                <CiMail className="text-white" />
              </div>
            </div>
            <div>
              <div className="text-neutral">Email: </div>
              <a href={`${data?.company_email}`}>{data?.company_email}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;

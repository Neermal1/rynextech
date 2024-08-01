export interface ICompanyProfile {
  company_name: string;
  company_email: string;
  company_phone: string;
  company_address: string;
  footer_text: string;
  introduction: string;
  vision: string;
  mission: string;
  map: string;
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  logo_link: string;
  footer_logo_link: string;
  favicon_link: string;
  image_link: string;
}
export interface IHeader {
  header_data: {
    companyProfile: ICompanyProfile;
    headerItems: any;
  };
}

export interface IRibborBarData {
  ribbon_bar_data: ICompanyProfile;
}

export interface ICompanyProfileData {
  data: ICompanyProfile;
}

export interface IHeaderMenu {
  headerItems: IHeaderItem[];
}

export interface IHeaderItem {
  name: string;
  subMenu?: ICategoryData[];
  slug: string;
}

export interface ICategoryData {
  name: string;
  slug: string;
  image_link: string;
  id: number;
}

export interface ISlider {
  slider_data: {
    slider_info: ISliderData[];
    companyProfile: ICompanyProfile;
  };
}

interface ISliderData {
  id: number;
  title: string;
  image_link: string;
}

export interface IButton {
  children: React.ReactNode;
}

export interface ICard {
  data: {
    name: string;
    product_category_id: string;
    image_link: string;
    description: string;
    slug: string;
  };
}

export interface IService {
  service_data: IServiceData[];
}
interface IServiceData {
  name: string;
  product_category_id: string;
  image_link: string;
  description: string;
  slug: string;
  id: number;
}
export interface IComponentHeader {
  data: {
    heading: string;
    subheading: string;
  };
}

export interface IFooter {
  footer_data: {
    companyProfile: ICompanyProfile;
    category: ICategoryData[];
  };
}

export interface ITestimonial {
  data: ITestimonialDetail[];
}
interface ITestimonialDetail {
  name: string;
  image_link: string;
  description: string;
}

export interface IPageHeader {
  data: {
    image: any;
    title: string;
    subDetail: string;
  };
}

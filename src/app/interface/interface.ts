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
    image_link: string;
    description: string;
    slug: string;
  };
}

export interface IService {
  service_data: IServiceData[];
}
export interface IServiceDetail {
  service_detail: {
    details: IServiceData;
  };
}
export interface IServiceData {
  id: number;
  name: string;
  slug: string;
  description: string;
  importance: any;
  scope_description: string;
  scope: any;
  why_us: string;
  steps_description: string;
  steps: string;
  image_link: string;
  scope_image_link: string;
  steps_image_link: string;
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
  message: string;
}

export interface IPageHeader {
  data: {
    image: any;
    title: string;
    subDetail: string;
  };
}

export interface IDefaultAntdContext {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;

  loading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IGalleryList {
  gallery_list_data: IGalleryListData[];
}
export interface IGalleryCollection {
  galleryCollection: {
    images: IGalleryListData[];
  };
}

interface IGalleryListData {
  id: number;
  name: string;
  slug: string;
  image_link: string;
}

export interface IBlogs {
  blog_data: IBlogData[];
}

export interface IBlogDetail {
  blog_detail: {
    details: IBlogData;
    others: IBlogData[];
  };
}

interface IBlogData {
  title: string;
  slug: string;
  description: string;
  id: number;
  image_link: string;
  created_at: string;
}

export interface IStaggeredTextAnimation {
  text: string;
}

export interface IServiceCard {
  data: {
    title: string;
    desc: string;
    count?: any;
  };
}

export interface ITopFeature {
  feature_data: ITopFeatureData[];
}
interface ITopFeatureData {
  id: number;
  title: string;
  description: string;
}

export interface ITechnology {
  tech_data: ITechnologyData[];
}
interface ITechnologyData {
  id: number;
  name: string;
  image_link: string;
}

export interface IClient {
  client_data: IClientData[];
}
interface IClientData {
  id: number;
  name: string;
  image_link: string;
}

export interface IWhatWeDo {
  what_we_do: IWhatWeDoData[];
}
interface IWhatWeDoData {
  id: number;
  title: string;
  image_link: string;
}

export interface IWhyChooseUs {
  why_choose_us: {
    id: number;
    title: string;
    image_link: string;
    position: string;
    profile_image_link: string;
    signature_link: string;
    description: string;
    name: string;
  };
}

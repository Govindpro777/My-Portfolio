import shop from './shop.png'
import weather from './weather-app.jpg'
import Study from './studynotion.png'
import employee from './add_employee.jpg'
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on my skills to improve.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "StudyNotion Edtech Platform",
    des: "An MERN-based EdTech web app offering user authentication, course management, progress tracking, secure payments, and instructor dashboards.",
    img: Study,
    iconLists: [
      "/reactjs-svgrepo-com.svg",
      "node-js-svgrepo-com.svg",
      "mongodb-svgrepo-com.svg",
      "/tail.svg",
    ],
    link: "https://studynotion-frontend-eight-neon.vercel.app/",
  },
  {
    id: 2,
    title: "Shopping-Redux",
    des: "A sleek shopping app featuring frontend design with add-to-cart, delete items, and total amount options.",
    img: shop,
    iconLists: [
      "/reactjs-svgrepo-com.svg",
      "/tail.svg",
      "/javascript.svg",
    ],
    link: "https://shoping-app-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "Weather-App",
    des: "An intuitive app providing real-time weather updates and forecasts based on location and search queries.",
    img: weather,
    iconLists: [
      "/html-5-svgrepo-com.svg",
      "/css-3-svgrepo-com.svg",
      "/javascript-svgrepo-com.svg",
    ],
    link: "https://weather-app-frontend-ashy.vercel.app/",
  },
  {
    id: 4,
    title: "Add-Employees",
    des: "A comprehensive employee management system allowing for the addition, editing, and deletion of employee records.",
    img: employee,
    iconLists: [
      "/reactjs-svgrepo-com.svg",
      "node-js-svgrepo-com.svg",
      "mongodb-svgrepo-com.svg",
      "/tail.svg",],
    link: "https://add-employee-frontend.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "MERN stack developer",
    desc: "Contributed to the development of a dynamic web platform using the MERN stack.Played a key role in enhancing user interactivity through advanced React.js features and efficient state management",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Coding",
    desc: "I have strong DSA problem-solving skills and have solved 1000+ DSA questions on platforms like GFG and LeetCode. My experience includes tackling a wide range of algorithmic challenges.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  // {
  //   id: 3,
  //   title: "Open Source Contributor",
  //   desc: "Contributed to open-source projects utilizing the MERN stack and modern tech stacks.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 4,
  //   title: "Freelance Web Dev Projects",
  //   desc: "Led the dev of a web app for a client, from initial concept to deployment on private VPS.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/Govindpro777",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "https://x.com/govindpro777",
    img: "/twit.svg",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/govind-prajapati-4b3535239/",
    img: "/link.svg",
  },
];

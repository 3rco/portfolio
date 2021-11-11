import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Ercan Ünal. All Rights Reserved.`,
  author: {
    name: "Ercan Ünal",
    accounts: [
      {
        url: "https://github.com/3rco",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://www.linkedin.com/in/ercan-%C3%BCnal-51413a219/",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:unalercann@gmail.com",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;

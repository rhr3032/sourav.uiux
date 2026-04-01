import { NextResponse } from "next/server";
import { title } from "process";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "workwith.akash26@gmail.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:workwith.akash26@gmail.com"
    },
    {
      type: "phone",
      label: "+880 1608-175433",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+880 1608-175433"
    }
  ],
  socialItems: [
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/sourav-ux/"
    },
  ]
};


const educationData = {
  education: [
    {
      title: "UI/UX Design Course",
      description: "BDCalling Academy - 2025"
    },
    {
      title: "Computer Science and Engineering",
      description: "Patuakhali Polytechnic Institute - 2025"
    }
    
  ],
  skills: [
    {
      name: "Figma",
      icon: "/images/home/education-skill/figma-icon.svg",
      rating: 5
    },
    {
      name: "Adobe XD",
      icon: "/images/home/education-skill/adobe-icon.svg",
      rating: 5
    },
    {
      name: "Framer",
      icon: "/images/home/education-skill/framer-icon.svg",
      rating: 3
    },
  ]
}

const contactLinks = {
  socialLinks: [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/sourav-ux/"
    },
    {
      title: "Behance",
      href: "https://www.behance.net/sourav-creative"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "workwith.akash26@gmail.com",
      link: "mailto:workwith.akash26@gmail.com"
    },
    {
      type: "phone",
      label: "+880 1608-175433",
      link: "tel:+880 1608-175433"
    }
  ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};

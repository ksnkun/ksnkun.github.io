export const siteConfig = {
  title: "Привет! Я Ксения Кун",
  subtitle: "Subtitle",
  description: "Портфолио и блог Ксении Кун",
  author: "Ксения Кун",
  email: "ksenia.kun02@gmail.com",
  telegram: "https://t.me/ksnkun",
  vk: "https://vk.com/ksnkun",
  
  // For Github Pages
  baseUrl: "https://example.github.io",
};

export const socialLinks = [
  {
    name: "Email",
    url: `mailto:${siteConfig.email}`,
    icon: "/mail.svg",
  },
  {
    name: "Telegram",
    url: siteConfig.telegram,
    icon: "/telegram.svg",
  },
  {
    name: "VK",
    url: siteConfig.vk,
    icon: "/vk.svg",
  },
];

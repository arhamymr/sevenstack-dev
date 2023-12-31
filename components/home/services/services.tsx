import { Grid, Box, Heading, Text, Flex, Center } from "@chakra-ui/react";
import ProductCard from "./product-card";

const data = [
  // {
  //   image: "/",
  //   title: "UI Design",
  //   description:
  //     "We create visually appealing and intuitive designs that reflect your brand and deliver a seamless user experience",
  // },
  // {
  //   image: "/",
  //   title: "HTML/CSS Development",
  //   description:
  //     "We convert design mockups into responsive web pages, ensuring cross-browser compatibility and adherence to web standards",
  // },
  {
    image: "/",
    title: "Custom Web Application",
    description:
      "We develop custom applications tailored to your needs, driving efficiency and success",
  },
  {
    image: "/",
    title: "Responsive Web Design",
    description:
      "We ensure your website adapts seamlessly to different devices, providing optimal user experiences",
  },
  {
    image: "/",
    title: "Performance Optimization",
    description:
      "We optimize your website's performance to deliver fast-loading web pages and improve user satisfaction",
  },
  {
    image: "/",
    title: "Integration of Third-Party Services",
    description:
      "We seamlessly integrate third-party services and APIs to enhance your website's functionality",
  },
  {
    image: "/",
    title: "Website Maintenance and Support",
    description:
      "We provide ongoing maintenance and support to keep your website up-to-date and optimized",
  },
  {
    image: "/",
    title: "Collaboration",
    description:
      "We work closely with designers and back-end developers to ensure a cohesive development process",
  },
];

const Services = () => {
  return (
    <Grid
      mb={"127px"}
      templateColumns={{
        base: "1fr",
        md: "1fr 1fr 1fr",
      }}
      gap={{ base: "16px", md: "31px" }}
      p={4}
    >
      {data.map((item, index) => (
        <ProductCard data={item} key={index} />
      ))}
    </Grid>
  );
};

export default Services;

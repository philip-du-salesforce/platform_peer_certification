import {
    dev,
    int,
    sec,
    highspot,
    salesforce,
    course,
    teach,
    presentation,
    roleplay,
    data_detect,
    data_mask,
    event_monitoring,
    field_audit,
    identity,
    mobile_security,
    platform_encryption,
    privacy_center,
    security_center,
    apis,
    big_objects,
    change_data,
    platform_events,
    salesforce_connect,
    private_connect,
    sandbox,
    heroku,
    functions,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Timeline",
    },
    {
      id: "security",
      title: "Security",
    },
    {
      id: "data",
      title: "Data",
    },
    {
      id: "development",
      title: "Development",
    },
    {
      id: "apply",
      title: "Apply",
    },
  ];
  
  const services = [
    {
      title: "Security",
      icon: sec,
    },
    {
      title: "Data and Integration",
      icon: int,
    },
    {
      title: "Development",
      icon: dev,
    },
  ];
  
  const experiences = [
    {
      title: "Astro Course Tracker",
      time: "10-20 hours",
      icon: course,
      iconBg: "#383E56",
      date: "TBC",
      points: [
        "Learn essential knowledge of the Salesforce Platform through Astro Course Tracker and Trailhead.",
        "Familiarise yourself with tools like Org62, Ask Astro and Demo Orgs.",
      ],
    },
    {
      title: "Office Hours 1 - Platform",
      time: "60 minutes",
      icon: teach,
      iconBg: "#383E56",
      date: "TBC",
      points: [
        "Welcome and Introduction.",
        "Program Structure.",
        "Platform vs platform.",
        "Platform Sales Plays",
      ],
    },
    {
      title: "Office Hours 2 - Security",
      time: "60 minutes",
      icon: sec,
      iconBg: "#383E56",
      date: "TBC",
      points: [
        "Shield - Event Monitoring, Platform Encryption, Field Audit Trail, Data Detect.",
        "Data Mask.",
        "Privacy Center.",
        "Security Center.",
        "Identity.",
        "Mobile App Security.",
      ],
    },
    {
      title: "Office Hours 3 - Data and Integration",
      time: "60 minutes",
      icon: int,
      iconBg: "#383E56",
      date: "TBC",
      points: [
        "Salesforce APIs.",
        "Salesforce Connect.",
        "Platform Events and Change Data Capture.",
        "Big Objects.",
        "Private Connect.",
      ],
    },
    {
      title: "Office Hours 4 - Development",
      time: "60 minutes",
      icon: dev,
      iconBg: "#383E56",
      date: "TBC",
      points: [
        "Heroku",
        "Functions",
        "Sandboxes",
      ],
    },
    {
      title: "Platform Trade Show",
      time: "90 minutes (10 minutes for each Platform Product)",
      icon: presentation,
      iconBg: "#383E56",
      date: "TBC",
      points: [
        "Present or co-present everything that you have learnt about an allocated Platform solution.",
        "Utilise a combination of value slides and live demonstrations to demonstrate understanding.",
        "Provide feedback to fellow peers.",
      ],
    },
    {
      title: "Individual Assessment Roleplay",
      time: "60 minutes (40 minute presentation, 15 minute Q&A, 5 minute feedback)",
      icon: roleplay,
      iconBg: "#383E56",
      date: "TBC",
      points: [
        "Assist an AE in finding opportunities for up-sell in an account.",
        "Help a success manager in reselling existing platform products to prevent attrition.",
        "Leverage various Salesforce resources to find answers to scenario based questions.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "It was an amazing experience. I learnt so much over the four week course.",
      name: "Glenda Thomson",
      role: "Core Solution Engineer",
      vertical: "ESMB",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "The Platform team are true geniuses. They are the best. Thank you.",
      name: "Mike Burnside",
      designation: "Core Solution Engineer",
      vertical: "CML South",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Massive shoutout from the Platform Team. This course helped me close 500K in Platform oppties.",
      name: "Umang Pathak",
      designation: "Core Account Executive",
      vertical: "FINS Enterprise",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const security = [
    {
      name: "Event Monitoring",
      description:
        "Event Monitoring provides valuable insights into user activity and system behavior within Salesforce, enabling organisations to enhance security, detect anomalies, and optimise performance.",

      image: event_monitoring,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/60789ead868eb556e6194036?lfrm=srp.4",
    },
    {
      name: "Platform Encryption",
      description:
        "Platform Encryption protects sensitive data and files as it lives at rest in the database. With the ability to also take full ownership of encryption keys in order to stay compliant with internal and external regulations.",
      image: platform_encryption,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/607899c7847e765695c0223a?lfrm=srp.0",
    },
    {
      name: "Field Audit Trail",
      description:
        "Field Audit Trail allows organisations to track and retain history of data changes with information like who made the change and when the change was made. This history is queried and is reportable at any time.",
      image: field_audit,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/6078a0d72e78d15787282e76?lfrm=srp.2",
    },
    {
      name: "Data Detect",
      description:
        "Data Detect leverages artifical intelligence and machine learning to automatically identify and classify sensitive data within Salesforce.",
      image: data_detect,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/60d502b969426d5401299a16?lfrm=srp.0",
    },
    {
      name: "Data Mask",
      description:
        "Data Mask allows organisations to automatically anonymise and mask sensitive customer data moving from production to sandboxes.",
      image: data_mask,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/606792efee20570a492831ee?lfrm=ssrp.0",
    },
    {
      name: "Privacy Center",
      description:
        "Privacy Center allows for the creation of policies to manage anonymisation and removal of data through Right To Be Forgotten and Retention Policies.",
      image: privacy_center,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/606e0238e509b26755d85f6a?lfrm=ssrp.1",
    },
    {
      name: "Security Center",
      description:
        "Security Center enables organisations to monitor, assess and manage their security posture across multiple Salesforce orgs and across their sandbox environments.",
      image: security_center,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/606dd3c485cba90c494f8fee?lfrm=ssrp.1",
    },
    {
      name: "Identity",
      description:
        "Identity simplifies and manages user authentication and social sign on (SSO) on external websites and bridges customer profile data to data within Salesforce.",
      image: identity,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/6070977e8a9aac5551e6422e?lfrm=ssrp.0",
    },
    {
      name: "Mobile App Security",
      description:
        "Mobile App Security allows a number of MAM and MDM capabilities such as remotely lock and wipe device data, block copy and paste, block screenshots and jailbroken devices.",
      image: mobile_security,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/6298e0a8d09dfa4cdab0466a?lfrm=srp.0",
    },
  ];

  const data = [
    {
      name: "Salesforce APIs",
      description:
        "Salesforce APIs allows applications to talk to one another through requests for specific information or functionality. Salesforce has a number of APIs including REST, SOAP, Bulk and Streaming.",

      image: apis,
      icon: salesforce,
      source_code_link: "https://developer.salesforce.com/developer-centers/integration-apis",
    },
    {
      name: "Salesforce Connect",
      description:
        "Salesforce Connect allows organisations to access external data and virtualises this data into Salesforce through an External Object so that it can be used for apps and processes without any data import.",

      image: salesforce_connect,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/6076ea1aa7e8060392cc239a?lfrm=ssrp.0",
    },
    {
      name: "Platform Events",
      description:
        "Platform Events make it possible to publish, subscribe and respond to any type of event. This allows businesses to build automated workflows across both internal Salesforce clouds and external applications.",
      image: platform_events,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/6160a7565034057e01843ad2?lfrm=srp.3",
    },
    {
      name: "Change Data Capture",
      description:
        "Change Data Capture keeps external systems in sync when data in Salesforce changes to any external application listening to our event bus, reducing any inconsistencies for organisations with multiple systems.",

      image: change_data,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/6160a7565034057e01843ad2?lfrm=srp.3",
    },
    {
      name: "Big Objects",
      description:
        "Big Objects are designed to store and manage millions to billions of historical records without the need for complex external systems and integrations whilst still allowing business to query and report on archived data.",

      image: big_objects,
      icon: salesforce,
      source_code_link: "https://developer.salesforce.com/docs/atlas.en-us.bigobjects.meta/bigobjects/big_object.htm",
    },
    {
      name: "Private Connect",
      description:
        "Private Connect increases security on your Amazon Web Services (AWS) integrations by setting up a fully managed network connection between your Salesforce org and your AWS VPC without exposing your HTTP/S traffic to the public internet.",

      image: private_connect,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/60832a7277459856d1df68a8?lfrm=srp.0",
    },
  ];

  const development = [
    {
      name: "Sandboxes",
      description:
        "Sandboxes allow organisations to create a copy of their production org's metadata and varied levels of customer data. Sandboxes ensure that any change is done in a safe and isolated environment.",

      image: sandbox,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/606b597f88e6154d53bcee9a?lfrm=ssrp.0",
    },
    {
      name: "Heroku",
      description:
        "Heroku is a Platform as a Service (PaaS) makes it easy for developers to manage and deploy applications so instead they can focus on coding and building scalable applications.",
      image: heroku,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/606f5f0e98b27b45a614d777?lfrm=ssrp.0",
    },
    {
      name: "Functions",
      description:
        "Functions empowers organisations to extend their data and workflows beyond the bounds of Salesforce, making them more robust with the power of elastic compute and open language flexibility.",
      image: functions,
      icon: highspot,
      source_code_link: "https://salesforce.highspot.com/items/615e368b0d9b82c463eb30dc?lfrm=srp.5",
    },
  ];
  
  export { services, experiences, testimonials, security, data, development };
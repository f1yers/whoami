import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    title: "Sr. DevOps Engineer",
    company: "MBO Partners Inc.",
    date: "2024 - Present (Remote)",
    bullets: [
      "Engineered reusable Terraform modules for global AWS infrastructure deployments",
      "Migrated K8s clusters to EKS to streamline control plane management, executing a planned blue/green cutover with controlled downtime for DB transitions",
      "Executed annual Disaster Recovery procedures to meet SOC 2 audit requirements and validate infrastructure resilience",
      "Reduced AWS costs by $30K/year by implementing a ScaleToZero solution",
      // "Migrated legacy Jenkins pipelines to GitOps-powered ArgoCD", WIP :)
    ],
    defaultOpen: true
  },
  {
    title: "DevOps Engineer",
    company: "MBO Partners Inc.",
    date: "2016 - 2024 (Remote)",
    bullets: [
      "Built the organization's initial AWS footprint with CloudFormation; later transitioned infra to reusable Terraform modules",
      "Deployed and operated production-grade Kubernetes clusters using kops (pre-EKS)",
      "Designed CI/CD pipelines with custom Jenkins shared library for containerized apps and data pipelines",
      "Integrated core platform services such as Tyk, Keycloak, RabbitMQ, Redis, PostgreSQL, MongoDB, and Spring Cloud Dataflow",
      "Developed an image pipeline with Packer, Ansible, and Jenkins to produce golden images",
      "Accelerated onboarding and incident response through continuously maintained Lucidchart infrastructure diagrams"
    ],
    defaultOpen: false
  },
  {
    title: "Site Reliability Engineer",
    company: "USAToday.com",
    date: "2013 - 2016 (Hybrid)",
    bullets: [
      "Provisioned AWS infrastructure using CloudFormation and Scalr",
      "Automated failover between East/West data centers using PowerShell and Akamai DNS routing",
      "Maintained RabbitMQ clusters and engineered GitOps deployment paths for developer contributions",
      "Authored Chef cookbooks with full unit and intergration test coverage",
      "Managed mission-critical Solr + ZooKeeper clusters powering large-scale search systems",
      "Diagnosed infrastructure issues, applied system patches, and upgraded performance monitoring agents"
    ],
    defaultOpen: false
  },
  {
    title: "Sr. Systems Analyst",
    company: "Gannett Media Technologies International",
    date: "2011 - 2013",
    bullets: [
      "Analyzed live traffic, resource usage, and service metrics to anticipate and prevent system degradation",
      "Proactively optimized uptime and user experience with AppDynamics and Splunk",
      "Tuned Solr configurations and reindexed datasets to support millions of high-velocity search queries",
      "Implemented automated deployments and patching workflows with HP Opsware across production environments",
      "Led load testing and performance analysis using JMeter and HP Performance Center to validate scalability",
      "Administered Active Directory, DNS records, and Apache redirects to ensure seamless name resolution and user routing"
    ],
    defaultOpen: false
  },

];

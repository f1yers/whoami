export default function Resume() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-0 pb-12 text-gray-500">
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-4 text-white">About</h2>
        <p className="text-sm">
          With a decade of hands-on experience in the DevOps space, I specialize in leveraging tools like Terraform, AWS, Kubernetes, and Python to build scalable, resilient, and cost-effective infrastructure solutions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold border-b pb-1 mb-4 text-white">Core Competencies</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-disc list-inside text-sm">
          <li>AWS</li>
          <li>Kubernetes</li>
          <li>Terraform, Atmos</li>
          <li>Python, Groovy</li>
          <li>Ansible, Chef</li>
          <li>CI/CD</li>
          <li>Observability</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold border-b pb-1 mb-4 text-white">Experience</h2>

        {/* Sr. DevOps Engineer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-6 w-full text-gray-700">
          <h4 className="text-sm font-bold">Sr. DevOps Engineer</h4>
          <p className="text-sm">MBO Partners Inc.</p>
          <p className="text-sm sm:text-right">2024 - Present (Remote)</p>
        </div>

        <div className="mb-10">
          <ul className="mt-2 text-sm list-disc list-inside space-y-2">
            <li>Reduced AWS costs by 30K/year by implementing ScaleToZero</li>
          </ul>
        </div>

        {/* DevOps Engineer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-6 w-full text-gray-700">
          <h4 className="text-sm font-bold">DevOps Engineer</h4>
          <p className="text-sm">MBO Partners Inc.</p>
          <p className="text-sm sm:text-right">2016 - 2024 (Remote)</p>
        </div>

        <div className="mb-10">
          <ul className="mt-2 text-sm list-disc list-inside space-y-2">
            <li>Engineered reusable Terraform modules for AWS infrastructure</li>
            <li>Managed Kubernetes clusters with kops and EKS; created custom Helm charts</li>
            <li>Designed CI/CD pipelines with custom Jenkins libraries for containerized apps</li>
            <li>Implemented Tyk API Gateway, PostgreSQL, MongoDB, Keycloak SSO</li>
          </ul>
        </div>

        {/* Site Reliability Engineer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-6 w-full text-gray-700">
            <h4 className="text-sm font-bold">Site Reliability Engineer</h4>
            <p className="text-sm">USAToday.com</p>
            <p className="text-sm sm:text-right">2013 - 2016 (Hybrid)</p>
        </div>

        <div className="mb-10">
          <ul className="mt-2 text-sm list-disc list-inside space-y-2">
            <li>Provisioned AWS infrastructure using CloudFormation and Scalr</li>
            <li>Automated failover between East/West data centers using PowerShell and Akamai DNS routing</li>
            <li>Maintained RabbitMQ clusters and engineered GitOps deployment paths for developer contributions</li>
            <li>Authored Chef cookbooks with full unit and intergration test coverage</li>
            <li>Managed mission-critical Solr + ZooKeeper clusters powering large-scale search systems</li>
            <li>Diagnosed infrastructure issues, applied system patches, and upgraded performance monitoring agents</li>
          </ul>
        </div>

        {/* Sr. Systems Administrator */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-6 w-full text-gray-700">
          <h4 className="text-sm font-bold">Sr. Systems Administrator</h4>
          <p className="text-sm">Gannett Media Technologies International</p>
          <p className="text-sm sm:text-right">2011 - 2013</p>
        </div>

        <div className="mb-0">
          <ul className="mt-2 text-sm list-disc list-inside space-y-2">
            <li>Analyzed live traffic, resource usage, and service metrics to anticipate and prevent system degradation</li>
            <li>Proactively optimized uptime and user experience with AppDynamics and Splunk</li>
            <li>Tuned Solr configurations and reindexed datasets to support millions of high-velocity search queries</li>
            <li>Implemented automated deployments and patching workflows with HP Opsware across production environments</li>
            <li>Led load testing and performance analysis using JMeter and HP Performance Center to validate scalability</li>
            <li>Administered Active Directory, DNS records, and Apache redirects to ensure seamless name resolution and user routing</li>
          </ul>
        </div>
      </section>
    </section>
  );
}
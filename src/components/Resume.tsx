export default function Resume() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-0 pb-12 text-gray-800">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold">Nathan McGinnis</h1>
        <p className="text-sm text-gray-500">
          Chesapeake, VA - me@nathanmcginnis.com
        </p>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-4 text-gray-500">About</h2>
        <p className="text-sm text-gray-500">
          With a decade of hands-on experience in the DevOps space, I specialize in leveraging tools like Terraform, AWS, Kubernetes, and Python to build scalable, resilient, and cost-effective infrastructure solutions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold border-b pb-1 mb-4 text-gray-500">Core Competencies</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-disc list-inside text-sm text-gray-700">
          <li>AWS</li>
          <li>Kubernetes</li>
          <li>CI/CD</li>
          <li>Python, Groovy</li>
          <li>Ansible, Chef</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold border-b pb-1 mb-4 text-gray-500">Experience</h2>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-6 w-full">
            <h4 className="text-sm font-bold text-gray-500">Sr. DevOps Engineer</h4>
            <p className="text-sm text-gray-500">MBO Partners Inc.</p>
            <p className="text-sm text-gray-500 sm:text-right">June 2016 - Present (Remote)</p>
        </div>

        <div className="mb-6">
            <ul className="mt-2 text-sm list-disc list-inside space-y-2 text-gray-700">
                <li>Engineered reusable Terraform modules for AWS infrastructure</li>
                <li>Reduced AWS costs by 30K/year by implementing ScaleToZero</li>
                <li>Managed Kubernetes clusters with kops and EKS; created custom Helm charts</li>
                <li>Designed CI/CD pipelines with custom Jenkins libraries for containerized apps</li>
                <li>Implemented Tyk API Gateway, PostgreSQL, MongoDB, Keycloak SSO</li>
            </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-6 w-full">
            <h4 className="text-sm font-bold text-gray-500">Site Reliability Engineer</h4>
            <p className="text-sm text-gray-500">Gannett (USAToday.com)</p>
            <p className="text-sm text-gray-500 sm:text-right">Nov 2013 - Jul 2016 (Hybrid)</p>
        </div>

        <div className="mb-6">
          <ul className="mt-2 text-sm list-disc list-inside space-y-2 text-gray-700">
            <li>Automated AWS deployments using CloudFormation and Scalr</li>
            <li>Developed GitOps workflows for RabbitMQ clusters</li>
            <li>Built Chef cookbooks with full unit and intergration test coverage</li>
          </ul>
        </div>
      </section>
    </section>
  );
}
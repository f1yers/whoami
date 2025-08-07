import Image from "next/image";
import RoleTimeline from "@/components/RoleTimeline/RoleTimeline"

export default function Resume() {

  const sectionHeading = "text-xl font-semibold border-b pb-1 mb-4 text-white";

  return (
    <section className="max-w-4xl mx-auto px-6 pt-0 pb-12 text-gray-500">
      <section className="mb-6">
        <h2 className={sectionHeading}>About</h2>
        <div className="clearfix relative">
          <a
            href="https://www.credly.com/badges/b9252caa-199f-453d-8be0-68ba8f1866c8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/aws_devops_badge.png"
              alt="AWS DevOps Badge"
              width={102}
              height={102}
              className="float-left mt-1 mr-4 relative"
            />
          </a>
          <p className="text-sm leading-relaxed pt-5">
            {"I'm an AWS Certified DevOps Engineer with a decade of hands-on experience, specializing in scalable, resilient, and cost-effective infrastructure built with Kubernetes, Terraform, and AWS.  I've architected and evolved internal platforms that empower developers, standardize delivery, and turn infrastructure into a product teams can trust."}
          </p>
        </div>
        <div className="clear-left"/>
      </section>

      <section className="mb-6">
        <h2 className={sectionHeading}>Core Competencies</h2>
        <ul className="grid grid-cols-3 gap-2 list-disc list-inside text-sm text-accent">
          <li>AWS</li>
          <li>Kubernetes, Helm</li>
          <li>Terraform, Atmos</li>
          <li>Python</li>
          <li>Ansible, Chef</li>
          <li>CI/CD</li>
          <li>Observability</li>
          <li>Cost Optimization</li>
          <li>Platform Engineering</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className={sectionHeading}>Experience</h2>
        <RoleTimeline />
      </section>
    </section>
  );
}
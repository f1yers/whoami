import Image from "next/image";
import RoleTimeline from "@/components/RoleTimeline/RoleTimeline"

export default function Resume() {

  const sectionHeading = "text-xl font-semibold border-b pb-1 mb-4 text-white";

  return (
    <section className="max-w-4xl mx-auto px-6 pt-0 pb-12 text-gray-500">
      <section className="mb-6">
        <h2 className={sectionHeading}>About</h2>
        <div className="flex items-start gap-4">
          <Image
            src="/aws_devops_badge.png"
            alt="AWS DevOps Badge"
            width={102}
            height={102}
            className="mt-1"
          />
          <p className="pt-5 text-sm leading-relaxed">
            {"I'm an AWS Certified DevOps Engineer with a decade of hands-on experience, specializing in scalable, resilient, and cost-effective infrastructure built with Kubernetes, Terraform, and AWS.  I've architected and evolved internal platforms that empower developers, standardize delivery, and turn infrastructure into a product teams can trust."}
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className={sectionHeading}>Core Competencies</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-disc list-inside text-sm text-accent">
          <li>AWS</li>
          <li>Kubernetes, Helm</li>
          <li>Terraform, Atmos</li>
          <li>Python</li>
          <li>Ansible, Chef</li>
          <li>CI/CD (ArgoCD, Jenkins, CodePipeline)</li>
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
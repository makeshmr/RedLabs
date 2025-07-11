import { RevealOnScroll } from "./RevealOnScroll";


export const About = () => {

const cloudSkills = [
  "EC2", "S3", "IAM", "VPC", "RDS", "CloudWatch", "ELB", "Auto Scaling",
  "CloudFormation", "vSphere", "vCenter", "ESXi", "Host Configuration"
];

const linuxSkills = [
  "System administration", "Shell scripting", "Package management", "User/Service management"
];

const devopsSkills = [
  "Docker", "Kubernetes", "Terraform", "AWS CloudFormation", "Prometheus",
  "Grafana", "Nexus", "Git", "Jenkins"
];

    return (
        <section id="about"  
        className="min-h-screen flex items-center justify-center py-20" >
        
        <RevealOnScroll>

        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                {" "}
                About Me 
            </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I'm a DevOps / Site Reliability Engineer with deep expertise in Linux, AWS, and Azure, and a strong command of modern DevOps tools and automation practices. I specialize in building and managing scalable, reliable infrastructure using Docker, Kubernetes, and Terraform.
                    With hands-on experience in CI/CD pipelines, infrastructure as code, and monitoring solutions, I focus on optimizing performance and ensuring high availability across cloud environments. 
                    I'm passionate about automation, developer experience, and continuously enhancing systems to support fast, efficient, and high-quality software delivery.
                </p>
                
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                       <h3 className="text-xl font-bold mb-4">Cloud</h3> 
                       <div className="flex flex-wrap gap-2">
                        {cloudSkills.map((tech,key) => (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}

                            </span>
                            ))}
                        </div>
                    </div>


                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                       <h3 className="text-xl font-bold mb-4">Linux</h3> 
                       <div className="flex flex-wrap gap-2">
                        {linuxSkills.map((tech,key) => (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}

                            </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                       <h3 className="text-xl font-bold mb-4">Devops Tools</h3> 
                       <div className="flex flex-wrap gap-2">
                        {devopsSkills.map((tech,key) => (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}

                            </span>
                            ))}
                        </div>
                    </div> 
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                                <list>
                                    <strong> B.Tech in Electrical & Electronics Engineering</strong> - NIT Calicut (2017-2021)
                                </list>
                                <li>
                                    Relevant Coursework: Data Structures & Algorithm, Devops, Cloud Computing
                                </li>
                            </ul>
                        
                </div>
                
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <h4 className="font-semibold"> Systems Engineer at Sify Technologies</h4> (Aug 2022 - Jan 2025)
                                <p>Managed and secured Linux systems (RHEL, Ubuntu, Oracle Linux, Amazon Linux) across physical, virtual, and cloud environments.

</p>
<p>Automated configuration management, patching, and deployments using Ansible, Bash, and Docker, reducing manual effort and boosting efficiency.

</p>

                            </div>
                            <div className="space-y-4 text-gray-300">
                                <h4 className="font-semibold"> Engineer Trainee at Sify Technologies</h4> (Aug 2021 - July 2022)
                                <p></p>

                            </div>
                        
                </div>

            </div>

        </div>
    </RevealOnScroll>
    </section>
    );
};

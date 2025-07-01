import { RevealOnScroll } from "./RevealOnScroll";

export const Certifications = () => {
  const certs = [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "June 2024",
      link: "https://example.com/aws-cert",
    },
    {
      name: "Terraform Associate",
      issuer: "HashiCorp",
      date: "March 2024",
      link: "https://example.com/terraform-cert",
    },
    // Add more certifications here
  ];

  return (
    <section id="certifications" className="min-h-screen p-10 bg-white dark:bg-gray-900">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="text-xl font-semibold">{cert.name}</h3>
              <p className="text-sm">{cert.issuer} • {cert.date}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mt-2 inline-block"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};
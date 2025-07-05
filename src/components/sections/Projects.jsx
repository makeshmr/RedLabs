import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* 🔧 Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">NGINX Error Monitoring & Slack Alerting System</h3>
              <p className="text-gray-400">
                A lightweight, Docker-free monitoring setup for a Python-based backend application served via NGINX.
                This project captures NGINX error logs and notifies a Slack channel in real-time when backend errors occur.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Bash", "NGINX", "Slack API", "Python", "Log Monitoring", "Automation"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/makeshmr/watchdog-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project 🔗
                </a>
              </div>
            </div>

            {/* 📊 Project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Exploratory Data Analysis Case Study: Rise in Accidents Cases in USA
              </h3>
              <p className="text-gray-400">
                Analyzed 1.3M+ US accident records using Pandas and visualized trends with Seaborn, Plotly, Matplotlib, and Folium.
                Found a significant rise in accidents post-2020, linked to increased driver aggression amid growing traffic congestion.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Python",
                  "Data Cleaning",
                  "Data Analysis",
                  "Data Visualization",
                  "Exploratory Data Analysis (EDA)",
                  "Statistical Analysis",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://jovian.com/makeshmr2409/exploratory-data-analysis-case-study-us-accidents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project 🔗
                </a>
              </div>
            </div>

            {/* 📦 Project 3 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Scraping Anime Details and Rating from MyAnimeList using Python
              </h3>
              <p className="text-gray-400">
                Scraped anime data by genre from MyAnimeList using Requests & BeautifulSoup, parsed ratings and metadata into CSV files,
                and analyzed datasets with Pandas.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Python",
                  "Web Scraping",
                  "Requests",
                  "BeautifulSoup4",
                  "HTML Parsing",
                  "Data Extraction",
                  "Function Design",
                  "Data Cleaning",
                  "CSV Handling",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://jovian.com/makeshmr2409/webscraping-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project 🔗
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

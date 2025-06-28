import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
    return (
    <section id="projects"
    className="min-h-screen flex items-center justify-center py-20">

    <RevealOnScroll>

        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                //copy from here
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hver:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">Exploratory Data Analysis Case Study : Rise in Accidents Cases in USA </h3>
                <p className="text-gray-400">
                    Analyzed 1.3M+ US accident records using Pandas and visualized trends with Seaborn, Plotly, Matplotlib, and Folium.
                     Found a significant rise in accidents post-2020, linked to increased driver aggression amid growing traffic congestion.
                </p>
                <div>
                    {["Python", "Data Cleaning", "Data Analysis", "Data Visualization", "Exploratory Data Analysis (EDA)", "Statistical Analysis"].map((tech,key) => (
                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}

                            </span>
                    ))}
                </div>
                <div className="flex justify-between item-center ">
                    <a href="https://jovian.com/makeshmr2409/exploratory-data-analysis-case-study-us-accidents" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project 🔗 -</a>
                </div>
                </div>
                //till here

                 //copy from here
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hver:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">Scraping Anime Details and Rating from MyAnimeList using Python </h3>
                <p className="text-gray-400">
                    Scraped anime data by genre from MyAnimeList using Requests & BeautifulSoup, parsed ratings and metadata into CSV files, and analyzed datasets with Pandas
                </p>
                <div>
                    {["Python", "Web Scraping", "Requests", "BeautifulSoup4", "HTML Parsing", "Data Extraction", "Function Design", "Data Cleaning", "CSV Handling"].map((tech,key) => (
                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}

                            </span>
                    ))}
                </div>
                <div className="flex justify-between item-center ">
                    <a href="https://jovian.com/makeshmr2409/webscraping-project" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project 🔗 -</a>
                </div>
                </div>
                //till here
            
            </div>
            
        </div>
    </RevealOnScroll>
    </section>

    );
};
import staynest from "../assets/staynest.png"
import shopextra from "../assets/ShopExtra.png"
import auctionpal from "../assets/auctionpal.png"

const MainContent = () => {
  return (
    <main className="container mx-auto p-6">
      <section id="home" className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mt-12 mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-600">
        Hi, I'm Marius! I'm a frontend developer with a passion for technology and gaming. Having recently completed my frontend development studies, I bring a strong foundation in creating intuitive and visually appealing user interfaces. Combined with my earlier IT certification, I have a versatile skill set that bridges creativity and technical expertise.

Gaming has always been a big part of my life, and I love using game APIs to create engaging projects that merge my development skills with my favorite pastime. Whether it's crafting a custom game tracker or building an interactive stats dashboard, I thrive on combining code with creativity.

When I'm not coding, you can find me exploring new worlds in games or brainstorming my next project idea. I'm always excited to collaborate and bring innovative ideas to life!
        </p>
      </section>
      <section id="about" className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Me</h2>
        <p className="text-lg text-gray-600">
          I have a strong background in front-end development and a deep love for crafting clean, user-friendly interfaces. I enjoy solving complex problems and building projects from the ground up. My toolkit includes HTML, CSS, JavaScript, TypeScript, React, and more.
        </p>
      </section>
      <section id="projects" className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">StayNest</h3>
            <p className="text-gray-600">This was my Project exam 2 while studying.</p>
            <img src={staynest} alt="Staynest" />
            <div>
              <a href="https://staynest-pe.netlify.app/" className="text-blue-500 hover:underline mt-4 inline-block">View Project</a>
              <a href="https://github.com/Zentaa1/project-exam-2" className="text-blue-500 hover:underline mt-4 ml-5 inline-block">View on Github</a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">ShopExtra</h3>
            <p className="text-gray-600">this was my Javascript frameworks assigment while studying.</p>
            <img src={shopextra} alt="ShopExtra" />
            <div>
              <a href="https://marius-jsframework.netlify.app/" className="text-blue-500 hover:underline mt-4 inline-block">View Project</a>
              <a href="https://github.com/Zentaa1/Js-Frameworks" className="text-blue-500 hover:underline mt-4 ml-5 inline-block">View on Github</a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">AuctionPal</h3>
            <p className="text-gray-600">This was my Semester Project 2 assignment while studying.</p>
            <img src={auctionpal} alt="AuctionPal" />
            <div>
              <a href="https://auctionpal.netlify.app/" className="text-blue-500 hover:underline mt-4 inline-block">View Project</a>
              <a href="https://github.com/Zentaa1/SemesterProject2" className="text-blue-500 hover:underline mt-4 ml-5 inline-block">View on Github</a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact</h2>
        <p className="text-lg text-gray-600">Feel free to reach out to me via email or social media. I look forward to connecting with you!</p>
        <div className="mt-4">
          <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">marius2000@live.no</a>
        </div>
      </section>
    </main>
  );
};

export default MainContent;

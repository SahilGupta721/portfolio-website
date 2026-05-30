export default function Services() {
  return (
    <section
      className="w-full overflow-x-clip bg-gradient-to-b from-gray-50 to-white px-4 py-24 sm:px-6"
      id="services"
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="mx-auto mb-12 max-w-[700px] text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#fff1ed] px-5 py-2 text-[0.9rem] font-semibold text-[#b64025]">
            My Services
          </p>
          <h2 className="mt-2 text-[2.5rem] font-bold text-gray-900">
            Innovating Through Code
          </h2>
          <p className="mt-6 text-lg leading-[1.8] text-gray-600">
            I create impactful web and software projects that combine creativity,
            functionality, and modern design to solve real-world problems.
          </p>
        </div>

        <div className="mx-auto grid min-w-0 max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-[1.25rem] border border-[#f1f1f1] bg-white p-8 transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
            <dt className="flex items-center gap-4 text-lg font-semibold text-gray-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0f2fe] text-[#0369a1]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                </svg>
              </div>
              Programming Languages
            </dt>
            <dd className="mt-4 text-base leading-[1.7] text-gray-600">
              <ul className="m-0 pl-5">
                <li className="mb-1">JavaScript</li><li className="mb-1">Java</li><li className="mb-1">Python</li>
                <li className="mb-1">C#</li><li className="mb-1">TypeScript</li><li className="mb-1">HTML5</li><li className="mb-1">CSS3</li>
              </ul>
            </dd>
          </div>

          <div className="rounded-[1.25rem] border border-[#f1f1f1] bg-white p-8 transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
            <dt className="flex items-center gap-4 text-lg font-semibold text-gray-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fef3c7] text-[#b45309]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
              </div>
              Web Development & Frameworks
            </dt>
            <dd className="mt-4 text-base leading-[1.7] text-gray-600">
              <ul className="m-0 pl-5">
                <li className="mb-1">React.js</li><li className="mb-1">Node.js</li><li className="mb-1">Express.js</li>
                <li className="mb-1">FastAPI</li><li className="mb-1">Tailwind CSS</li>
              </ul>
            </dd>
          </div>

          <div className="rounded-[1.25rem] border border-[#f1f1f1] bg-white p-8 transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
            <dt className="flex items-center gap-4 text-lg font-semibold text-gray-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0f2fe] text-[#0369a1]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M3 9h2m14 0h2M3 15h2m14 0h2M9 19v2m6-2v2M7 7h10v10H7z" />
                </svg>
              </div>
              AI & Machine Learning
            </dt>
            <dd className="mt-4 text-base leading-[1.7] text-gray-600">
              <ul className="m-0 pl-5">
                <li className="mb-1">Scikit-Learn</li><li className="mb-1">TensorFlow / PyTorch</li>
                <li className="mb-1">OpenAI API</li><li className="mb-1">Large Language Models (Cohere, Gemini, ChatGPT)</li>
                <li className="mb-1">Hugging Face Transformers</li>
              </ul>
            </dd>
          </div>

          <div className="rounded-[1.25rem] border border-[#f1f1f1] bg-white p-8 transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
            <dt className="flex items-center gap-4 text-lg font-semibold text-gray-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ecfccb] text-[#4d7c0f]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 014-4 5 5 0 019.5 1.5A3.5 3.5 0 0119 19H7a4 4 0 01-4-4z" />
                </svg>
              </div>
              Cloud & Databases
            </dt>
            <dd className="mt-4 text-base leading-[1.7] text-gray-600">
              <ul className="m-0 pl-5">
                <li className="mb-1">Google Cloud</li><li className="mb-1">Azure</li><li className="mb-1">MongoDB</li>
                <li className="mb-1">MySQL</li><li className="mb-1">Oracle</li>
              </ul>
            </dd>
          </div>

          <div className="rounded-[1.25rem] border border-[#f1f1f1] bg-white p-8 transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
            <dt className="flex items-center gap-4 text-lg font-semibold text-gray-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fde8e2] text-[#b64025]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 15v3M12 12v6M17 9v9" />
                </svg>
              </div>
              Data & Analytics
            </dt>
            <dd className="mt-4 text-base leading-[1.7] text-gray-600">
              <ul className="m-0 pl-5">
                <li className="mb-1">Pandas</li><li className="mb-1">NumPy</li><li className="mb-1">Matplotlib</li>
                <li className="mb-1">SQL (Analytics & Queries)</li><li className="mb-1">Power BI</li><li className="mb-1">Microsoft Excel</li>
              </ul>
            </dd>
          </div>

          <div className="rounded-[1.25rem] border border-[#f1f1f1] bg-white p-8 transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
            <dt className="flex items-center gap-4 text-lg font-semibold text-gray-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fef3c7] text-[#b45309]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4.5 4.5 0 11-6.4 6.4L3 18l3 3 5.3-5.3a4.5 4.5 0 006.4-6.4z" />
                </svg>
              </div>
              Tools & IDEs
            </dt>
            <dd className="mt-4 text-base leading-[1.7] text-gray-600">
              <ul className="m-0 pl-5">
                <li className="mb-1">Git</li><li className="mb-1">Docker</li><li className="mb-1">Postman</li>
                <li className="mb-1">Jira/Trello</li><li className="mb-1">MS Office 365</li><li className="mb-1">Visual Studio Code</li>
              </ul>
            </dd>
          </div>
        </div>
      </div>
    </section>
  );
}

const teamMembers = [
  { name: "John Doe", role: "CEO & Founder" },
  { name: "Jane Smith", role: "Lead Developer" },
  { name: "Alex Johnson", role: "UI/UX Designer" },
  { name: "Maria Garcia", role: "IoT Engineer" },
];

const OurTeam = () => {
  return (
    <section
      id="team"
      className="bg-neutral-900 py-24 px-6 lg:px-20 xl:px-32 font-popin"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-2">
            The People Behind
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white">
            Our Team
          </h2>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-neutral-800 rounded-xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-200"
            >
              <div className="w-20 h-20 rounded-full bg-neutral-600 mb-4 flex items-center justify-center">
                <span className="text-neutral-400 text-3xl">👤</span>
              </div>
              <h3 className="text-white font-semibold text-lg">{member.name}</h3>
              <p className="text-neutral-400 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

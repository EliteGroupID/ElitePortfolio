import Link from "next/link";
import { teamList } from "../constants";

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
          {teamList.map((member) => (
            <div
              key={member.slug}
              className="bg-neutral-800 rounded-xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-200"
            >
              <div className="w-20 h-20 rounded-full bg-neutral-600 mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <h3 className="text-white font-semibold text-lg">{member.name}</h3>
              <p className="text-neutral-400 text-sm mt-1 mb-4">{member.role}</p>
              <Link
                href={`/team/${member.slug}`}
                className="text-sm border border-neutral-500 text-neutral-300 hover:border-white hover:text-white px-4 py-1.5 rounded transition-colors duration-200"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

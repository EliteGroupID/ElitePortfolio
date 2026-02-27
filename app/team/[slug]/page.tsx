import Link from "next/link";
import { notFound } from "next/navigation";
import { teamList } from "../../../src/constants";

const EGIcon = "/assets/eg-icon.png";

export function generateStaticParams() {
  return teamList.map((m) => ({ slug: m.slug }));
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = teamList.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-popin">
      {/* Header */}
      <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-700 px-6 py-4 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={EGIcon} className="w-8" alt="EG Icon" />
          <span className="font-semibold tracking-wide text-sm">EliteTech DEV</span>
        </Link>
        <span className="text-gray-400 dark:text-neutral-600 mx-1">/</span>
        <Link href="/#team" className="text-neutral-500 dark:text-neutral-400 text-sm hover:text-neutral-900 dark:hover:text-white transition-colors">
          Team
        </Link>
        <span className="text-gray-400 dark:text-neutral-600 mx-1">/</span>
        <span className="text-neutral-500 dark:text-neutral-400 text-sm">{member.name}</span>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-20">
        {/* Avatar + Name + Role */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-32 h-32 rounded-full bg-gray-100 dark:bg-neutral-700 border-4 border-gray-200 dark:border-neutral-600 overflow-hidden mb-6">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full object-contain p-2"
            />
          </div>
          <h1 className="text-3xl lg:text-4xl font-semibold mb-2">{member.name}</h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg">{member.role}</p>
        </div>

        {/* Bio */}
        <section className="bg-gray-50 dark:bg-neutral-800 rounded-xl p-8 border border-gray-200 dark:border-neutral-700 mb-10">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{member.bio}</p>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block border border-gray-300 dark:border-neutral-500 text-neutral-600 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white px-8 py-3 rounded transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}

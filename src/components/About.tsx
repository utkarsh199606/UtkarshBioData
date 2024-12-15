import { GraduationCap, Briefcase, Linkedin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="about" className="py-20 bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Education & Career</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <AboutItem 
            icon={<GraduationCap className="h-8 w-8" />}
            title="Education"
            content="BE Mechanical, Mumbai University (2018)"
            inView={inView}
            delay="delay-100"
          />
          <AboutItem 
            icon={<Briefcase className="h-8 w-8" />}
            title="Occupation"
            content="Software Developer, Softcore Solutions (Thane)"
            inView={inView}
            delay="delay-200"
          />
          <AboutItem 
            icon={<Linkedin className="h-8 w-8" />}
            title="LinkedIn"
            content="Utkarsh Chaudhari | LinkedIn"
            isLink
            inView={inView}
            delay="delay-300"
          />
        </div>
      </div>
    </section>
  );
}

function AboutItem({ icon, title, content, isLink = false, inView, delay }: {
  icon: React.ReactNode;
  title: string;
  content: string;
  isLink?: boolean;
  inView: boolean;
  delay: string;
}) {
  return (
    <div className={`text-center p-6 rounded-lg bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900 shadow-lg transform transition-all duration-1000 ${delay} ${
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="inline-block p-3 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-600 dark:to-pink-600 text-purple-600 dark:text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
      {isLink ? (
        <a href="https://www.linkedin.com/in/utkarsh-chaudhari-213757102/?trk=profile-badge&originalSubdomain=in" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300" target="_blank" rel="noopener noreferrer">{content}</a>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">{content}</p>
      )}
    </div>
  );
}
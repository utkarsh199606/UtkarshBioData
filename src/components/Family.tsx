import { useInView } from 'react-intersection-observer';

const familyMembers = [
  {
    title: "Father",
    name: "Deepak Govardhan Chaudhari",
    occupation: "Business (Inverter and Batteries)"
  },
  {
    title: "Mother",
    name: "Ujjwala Deepak Chaudhari",
    occupation: "Home Maker"
  },
  {
    title: "Siblings",
    name: "Single Child"
  },
  {
    title: "Family Type",
    name: "Joint Family"
  }
];

export function Family() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="family" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Family Details</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {familyMembers.map((member, index) => (
            <FamilyCard
              key={member.title}
              {...member}
              inView={inView}
              delay={`delay-${index * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FamilyCard({ title, name, occupation, inView, delay }: {
  title: string;
  name: string;
  occupation?: string;
  inView: boolean;
  delay: string;
}) {
  return (
    <div className={`bg-gray-50 p-6 rounded-lg transform transition-all duration-1000 ${delay} ${
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <h3 className="text-xl font-semibold text-purple-600 mb-2">{title}</h3>
      <p className="text-gray-800 font-medium mb-1">{name}</p>
      {occupation && <p className="text-gray-600">{occupation}</p>}
    </div>
  );
}
import { useInView } from 'react-intersection-observer';

const details = [
  { title: "Date of Birth", value: "14 June 1996" },
  { title: "Birth Time", value: "09:45 AM, Friday" },
  { title: "Height", value: "5.6 feet" },
  { title: "Blood Group", value: "B+ve" },
  { title: "Religion & Cast", value: "Hindu - Mangela" }
];

export function Details() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="details" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Personal Details</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {details.map((detail, index) => (
            <DetailCard
              key={detail.title}
              title={detail.title}
              value={detail.value}
              inView={inView}
              delay={`delay-${index * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailCard({ title, value, inView, delay }: {
  title: string;
  value: string;
  inView: boolean;
  delay: string;
}) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md transform transition-all duration-1000 ${delay} ${
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}
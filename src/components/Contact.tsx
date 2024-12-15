import { Phone, MapPin, Instagram } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <ContactItem
            icon={<Phone className="h-6 w-6" />}
            title="Phone"
            content="+91 7030347557"
            inView={inView}
            delay="delay-100"
          />
          <ContactItem
            icon={<MapPin className="h-6 w-6" />}
            title="Address"
            content="Sadguru Krupa Niwas, CRP Mandal, Saneguruji Road, Satpati, Tal & Dist: Palghar, 401405"
            inView={inView}
            delay="delay-200"
          />
          <ContactItem
            icon={<Instagram className="h-6 w-6" />}
            title="Instagram"
            content="Utkarsh Chaudhari"
            isLink
            inView={inView}
            delay="delay-300"
          />
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, content, isLink = false, inView, delay }: {
  icon: React.ReactNode;
  title: string;
  content: string;
  isLink?: boolean;
  inView: boolean;
  delay: string;
}) {
  return (
    <div className={`flex items-start space-x-4 mb-6 last:mb-0 transform transition-all duration-1000 ${delay} ${
      inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
    }`}>
      <div className="text-purple-600">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
        {isLink ? (
          <a href="https://www.instagram.com/_utkarsh_chaudhari/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">{content}</a>
        ) : (
          <p className="text-gray-600">{content}</p>
        )}
      </div>
    </div>
  );
}
import { useInView } from 'react-intersection-observer';
import { AnimatedText } from './AnimatedText';
import image6 from './images/img6.jpg';

export function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 via-pink-50 to-white dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 pt-16"
      id="hero"
    >
      <div className="container mx-auto px-4 text-center">
        <div className={`mb-8 transform transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl mb-6 bg-gradient-to-br from-purple-200 to-pink-200 p-1 dark:from-purple-600 dark:to-pink-600">
            <img
              //src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
              src = {image6} 
              alt="Utkarsh Chaudhari"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            <AnimatedText text="Utkarsh Chaudhari" />
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            <AnimatedText text="28 years • Software Developer • Thane" />
          </p>
        </div>
      </div>
    </section>
  );
}
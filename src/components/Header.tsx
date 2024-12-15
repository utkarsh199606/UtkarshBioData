import { User } from 'lucide-react';
import { AnimatedText } from './AnimatedText';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center animate-slide-in">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
            <User className="h-12 w-12 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold mb-2">
            <AnimatedText text="Marriage Biodata" />
          </h1>
          <div className="text-xl text-purple-100 mt-2">
            <AnimatedText text="Utkarsh Chaudhari" />
          </div>
        </div>
      </div>
    </header>
  );
}
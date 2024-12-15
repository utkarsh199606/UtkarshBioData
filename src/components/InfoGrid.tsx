interface InfoItemProps {
  label: string;
  value: string;
  delay: string;
  className?: string;
}

export function InfoGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  );
}

export function InfoItem({ label, value, delay, className = "" }: InfoItemProps) {
  return (
    <div className={`animate-slide-in ${delay} ${className} 
      transform hover:scale-105 transition-transform duration-200 
      p-4 rounded-lg bg-gray-50`}>
      <p className="text-gray-600 text-sm font-medium">{label}</p>
      <p className="font-semibold text-gray-800 mt-1">{value}</p>
    </div>
  );
}
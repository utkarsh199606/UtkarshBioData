import { Section } from './Section';
import { InfoGrid, InfoItem } from './InfoGrid';

interface FamilyInfoProps {
  data: {
    fatherName: string;
    fatherOccupation: string;
    motherName: string;
    motherOccupation: string;
    siblings: number;
    familyType: string;
    residence: string;
  };
}

export function FamilyInfo({ data }: FamilyInfoProps) {
  return (
    <Section title="Family Background" className="mt-8">
      <InfoGrid>
        <InfoItem label="Father's Name" value={data.fatherName} delay="delay-100" />
        <InfoItem label="Father's Occupation" value={data.fatherOccupation} delay="delay-100" />
        <InfoItem label="Mother's Name" value={data.motherName} delay="delay-200" />
        <InfoItem label="Mother's Occupation" value={data.motherOccupation} delay="delay-200" />
        <InfoItem 
          label="Siblings" 
          value={data.siblings === 0 ? "Single Child" : data.siblings.toString()} 
          delay="delay-300" 
        />
        <InfoItem label="Family Type" value={data.familyType} delay="delay-300" />
        <InfoItem 
          label="Residence" 
          value={data.residence} 
          delay="delay-400" 
          className="md:col-span-2" 
        />
      </InfoGrid>
    </Section>
  );
}
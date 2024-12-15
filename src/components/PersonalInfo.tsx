import { Section } from './Section';
import { InfoGrid, InfoItem } from './InfoGrid';

interface PersonalInfoProps {
  data: {
    name: string;
    age: number;
    dateOfBirth: string;
    bloodGroup: string;
    height: string;
    religion: string;
    contact: string;
    birthDetails: string;
    education: string;
    occupation: string;
    linkedin: string;
  };
}

export function PersonalInfo({ data }: PersonalInfoProps) {
  return (
    <Section title="Personal Information">
      <InfoGrid>
        <InfoItem label="Name" value={data.name} delay="delay-100" />
        <InfoItem label="Age" value={`${data.age} years`} delay="delay-100" />
        <InfoItem label="Date of Birth" value={data.dateOfBirth} delay="delay-200" />
        <InfoItem label="Blood Group" value={data.bloodGroup} delay="delay-200" />
        <InfoItem label="Height" value={data.height} delay="delay-300" />
        <InfoItem label="Religion" value={data.religion} delay="delay-300" />
        <InfoItem label="Contact" value={data.contact} delay="delay-400" />
        <InfoItem label="Birth Details" value={data.birthDetails} delay="delay-400" />
        <InfoItem label="Education" value={data.education} delay="delay-500" className="md:col-span-2" />
        <InfoItem label="Occupation" value={data.occupation} delay="delay-500" className="md:col-span-2" />
        <InfoItem label="LinkedIn" value={data.linkedin} delay="delay-500" className="md:col-span-2" />
      </InfoGrid>
    </Section>
  );
}
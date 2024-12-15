interface PreferencesProps {
  data: {
    ageRange: string;
    heightPreference: string;
    educationPreference: string;
    occupationPreference: string;
    locationPreference: string;
  };
}

export function Preferences({ data }: PreferencesProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Partner Preferences</h2>
      <div className="grid grid-cols-2 gap-4">
        <InfoItem label="Age Range" value={data.ageRange} />
        <InfoItem label="Height" value={data.heightPreference} />
        <InfoItem label="Education" value={data.educationPreference} />
        <InfoItem label="Occupation" value={data.occupationPreference} />
        <InfoItem label="Location" value={data.locationPreference} />
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-gray-600 text-sm">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
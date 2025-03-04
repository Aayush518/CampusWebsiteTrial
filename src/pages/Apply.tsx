import { PageHeader } from '../components/common/PageHeader';
import { useState } from 'react';
import { GraduationCap, Book, Clock, Users, ChevronDown, FileText, Calendar } from 'lucide-react';

const programs = [
  {
    name: "MSc in Structural Engineering",
    duration: "2 years",
    seats: 20,
    deadline: "2024-04-15",
    fee: "NPR 250,000"
  },
  {
    name: "MSc in Construction Management",
    duration: "2 years",
    seats: 20,
    deadline: "2024-04-15",
    fee: "NPR 250,000"
  },
  {
    name: "BE in Civil Engineering",
    duration: "4 years",
    seats: 96,
    deadline: "2024-06-30",
    fee: "NPR 950,000"
  },
  {
    name: "BE in Computer Engineering",
    duration: "4 years",
    seats: 96,
    deadline: "2024-06-30",
    fee: "NPR 950,000"
  }
];

const requirements = [
  "Completed Bachelor's degree with minimum 2.7 CGPA",
  "Valid entrance exam score",
  "Two letters of recommendation",
  "Statement of purpose",
  "Updated CV/Resume",
  "Official transcripts",
  "Citizenship certificate"
];

export function Apply() {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [step, setStep] = useState(1);

  return (
    <div>
      <PageHeader
        title="Apply Now"
        subtitle="Take the first step towards your engineering career"
        image="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Programs Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Available Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((program) => (
                <div
                  key={program.name}
                  className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition ${
                    selectedProgram === program.name
                      ? 'ring-2 ring-red-700'
                      : 'hover:shadow-xl'
                  }`}
                  onClick={() => setSelectedProgram(program.name)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{program.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{program.fee}</p>
                    </div>
                    <GraduationCap className={`h-6 w-6 ${
                      selectedProgram === program.name ? 'text-red-700' : 'text-gray-400'
                    }`} />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {program.duration}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {program.seats} seats
                    </div>
                    <div className="flex items-center text-gray-600 col-span-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      Deadline: {program.deadline}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Application Form</h2>
              <div className="flex items-center space-x-2">
                <span className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-red-700' : 'bg-gray-300'}`} />
                <span className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-red-700' : 'bg-gray-300'}`} />
                <span className={`w-3 h-3 rounded-full ${step >= 3 ? 'bg-red-700' : 'bg-gray-300'}`} />
              </div>
            </div>

            <form className="space-y-6">
              {step === 1 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition"
                  >
                    Next Step
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Previous Institution
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CGPA
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Entrance Exam Score
                      </label>
                      <input
                        type="number"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border border-red-700 text-red-700 px-6 py-3 rounded-lg hover:bg-red-50 transition"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition"
                    >
                      Next Step
                    </button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Documents
                      </label>
                      <div className="space-y-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            Drag and drop your documents here, or click to browse
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Comments
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 border border-red-700 text-red-700 px-6 py-3 rounded-lg hover:bg-red-50 transition"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition"
                    >
                      Submit Application
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>

          {/* Requirements Section */}
          <div className="mt-16">
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="ml-3 text-gray-600">{req}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function CampusChiefMessage() {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Message From Campus Chief</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 text-center md:text-left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                  alt="Campus Chief"
                  className="w-64 h-64 object-cover rounded-lg shadow-lg mx-auto"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">Dr. Ram Kumar Sharma</h3>
                  <p className="text-gray-600">Campus Chief</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Dear Students, Parents and Well Wishers!</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    It gives me an immense pleasure to welcome you all in Paschimanchal Campus, formerly known as Western
                    Region Campus (WRC). The campus was established in 2038 BS (1981AD) as a constituent campus under
                    Institute of Engineering, Tribhuvan university, Nepal.
                  </p>
                  <p className="mb-4">
                    Located in the northern skirts of Pokhara valley, Paschimanchal Campus is one of the pioneer engineering
                    higher educational institutes in Nepal. Initially established with a vision to produce trade level skill
                    manpower sets to fulfil the nation's need in the field of Engineering, the Campus has transformed itself
                    to the hub of engineering education.
                  </p>
                  <p className="mb-4">
                    Commencing its programs from trade course, it had offered three years diploma (Intermediate Level) in
                    various academic disciplines of engineering (2044-2071) BS. Eventually due to the high demand of the
                    bachelor's degree program and policy of Tribhuvan University, diploma level courses were gradually phased
                    out and bachelor degree programs were established.
                  </p>
                </div>
                <button className="mt-6 text-primary-700 hover:text-primary-800 font-semibold flex items-center group">
                  Read Full Message
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
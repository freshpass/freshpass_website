export default function Legal() {
  return (
    <div className="min-h-screen bg-slate-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Legal Information</h1>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Company Information</h2>
            <div className="text-slate-600 space-y-2">
              <p><strong>Company Name:</strong> Shababu Systems Ltd</p>
              <p><strong>Company Number:</strong> 16621448</p>
              <p><strong>Registered in:</strong> England and Wales</p>
              <p><strong>Nature of Business:</strong> Information technology consultancy activities</p>
              <p>
                <strong>Companies House:</strong>{' '}
                <a 
                  href="https://find-and-update.company-information.service.gov.uk/company/16621448" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Company Details
                </a>
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Information</h2>
            <div className="text-slate-600">
              <p><strong>Email:</strong> <a href="mailto:hello@shababu.xyz" className="text-blue-600 hover:underline">hello@shababu.xyz</a></p>
              <p><strong>Website:</strong> <a href="https://shababu.xyz" className="text-blue-600 hover:underline">shababu.xyz</a></p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Intellectual Property</h2>
            <p className="text-slate-600">
              All content on this website is the property of Shababu Systems Ltd unless otherwise stated.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
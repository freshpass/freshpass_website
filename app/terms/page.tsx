export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Acceptance of Terms</h2>
            <p className="text-slate-600 mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Use License</h2>
            <p className="text-slate-600 mb-4">
              Permission is granted to temporarily download one copy of the materials on Shababu Systems Ltd's website for personal, non-commercial transitory viewing only.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-600">
              Questions about the Terms of Service should be sent to us at{' '}
              <a href="mailto:hello@shababu.xyz" className="text-blue-600 hover:underline">
                hello@shababu.xyz
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
import React from 'react'

function WhyChoose() {
  return (
    <section className="container pt-20 pb-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#0F1729]">
                Why Choose Blogify?
              </h2>
              <p className="mt-4 text-[#6B7280]">
                Built with modern technologies and best practices to provide the
                best blogging experience.
              </p>
            </div>
            <div className="box-card mt-16 flex justify-center gap-8">
              <div className="w-full max-w-[384px] rounded-2xl border-2 border-[#c4c4c5] p-9">
                <img src={Overlay} alt="" />
                <h2 className="mt-4 mb-2">Fast</h2>
                <p className="text-[#6B7280]">
                  Lightning-fast performance with modern web technologies for the
                  best reading experience.
                </p>
              </div>
              <div className="w-full max-w-[384px] rounded-2xl border-2 border-[#c4c4c5] p-9">
                <img src={Overlay2} alt="" />
                <h2 className="mt-4 mb-2">Secure</h2>
                <p className="text-[#6B7280]">
                  Your data is protected with industry- standard security practices
                  and encryption.
                </p>
              </div>
              <div className="w-full max-w-[384px] rounded-2xl border-2 border-[#c4c4c5] p-9">
                <img src={Overlay3} alt="" />
                <h2 className="mt-4 mb-2">Easy to Manage</h2>
                <p className="text-[#6B7280]">
                  Intuitive admin dashboard makes content management effortless and
                  enjoyable.
                </p>
              </div>
            </div>
          </section>
  )
}

export default WhyChoose

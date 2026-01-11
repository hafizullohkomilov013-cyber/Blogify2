import React from 'react'
import WhyChooseCard from './WhyChooseData'

import { whyChooseData } from '../data/WhyChooseData'

function WhyChoose() {
  return (
    <section className="container  pb-20">
            <div className="text-center mt-32">
              <h2 className="text-4xl font-bold text-[#0F1729]">
                Why Choose Blogify?
              </h2>
              <p className="mt-4 text-[#6B7280]">
                Built with modern technologies and best practices to provide the
                best blogging experience.
              </p>
            </div>
            <div className='flex flex-col mt-16 mb-32 flex-wrap items-center     justify-center gap-8 md:flex-row'>
                {whyChooseData.map((item) => {
                    return <WhyChooseCard key={item.id} item={item} />
                })}
            </div>
          </section>
  )
}

export default WhyChoose

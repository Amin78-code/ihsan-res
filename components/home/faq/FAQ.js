const FAQ = () => {
    const toggle = (id)=> {
        id = id;
        const nodeList = document.querySelectorAll(".all-accordion-body");
        const nodeList2 = document.querySelectorAll(".all-coll-heading");
        for (let i = 0; i < nodeList.length; i++) {
            if(nodeList[i].classList.contains("accordion-collapse-body-"+id)) {
                nodeList[i].classList.toggle("hidden");
                nodeList2[i].querySelector("svg").classList.toggle("rotate-180")
            }
            else {
                nodeList[i].classList.add("hidden");
                nodeList2[i].querySelector("svg").classList.add("rotate-180")
            }
        }
    }
    return (
        <section id='faq' className="bg-[#fff] pt-0 md:pt-[50px] pb-[40px] md:pb-[100px]">
            <div className="myContainer">
                <h1 className='fpr text-[#0F2E3C] text-[32px] md:text-[60px] sc1500:text-[85px] leading-[32px] md:leading-[60px] sc1500:leading-[85px] text-center max-w-[700px] mx-auto hidden md:block'>Frequently asked questions</h1>
                <div id="accordion-collapse" className="mt-0 md:mt-[80px]">
                    <h2 id="accordion-collapse-heading-1" className="all-coll-heading" onClick={()=>toggle("1")}>
                        <button type="button" className="flex items-center justify-between w-full py-0 px-[5px] md:p-5 font-medium text-left border-b-[1px] border-0 md:border-b-[1px] border-[#292929] focus:outline-none" >
                        <span className="fgr text-[12px] md:text-[28px] leading-[12px] md:leading-[38px] text-[#292929]">What is Coaching?</span>
                        <svg data-accordion-icon="" className="w-[18px] md:w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" className="all-accordion-body accordion-collapse-body-1 hidden">
                        <div className="px-[7px] py-2 md:p-5 font-light">
                        <p className="fgr mb-2 text-[12px] md:text-[24px] leading-[16px] md:leading-[34px] text-[#292929]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <h2 id="accordion-collapse-heading-2" className="all-coll-heading" onClick={()=>toggle("2")}>
                        <button type="button" className="flex items-center justify-between w-full py-0 px-[5px] md:p-5 font-medium text-left text-gray-500 border-b-[1px] border-0 md:border-b-[1px] border-[#292929] focus:outline-none" >
                        <span className="fgr text-[12px] md:text-[28px] leading-[12px] md:leading-[38px] text-[#292929]">What makes Ihsan Coaching different</span>
                        <svg data-accordion-icon="" className="w-[18px] md:w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-2" className="all-accordion-body accordion-collapse-body-2 hidden">
                        <div className="px-[7px] py-2 md:p-5 font-light">
                        <p className="fgr mb-2 text-[12px] md:text-[24px] leading-[16px] md:leading-[34px] text-[#292929]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      </div>
                    </div>
                    <h2 id="accordion-collapse-heading-3" className="all-coll-heading" onClick={()=>toggle("3")}>
                        <button type="button" className="flex items-center justify-between w-full py-0 px-[5px] md:p-5 font-medium text-left text-gray-500 border-b-[1px] border-0 md:border-b-[1px] border-[#292929] focus:outline-none" >
                        <span className="fgr text-[12px] md:text-[28px] leading-[12px] md:leading-[38px] text-[#292929]">How much does each coaching session cost?</span>
                        <svg data-accordion-icon="" className="w-[18px] md:w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" className="all-accordion-body accordion-collapse-body-3 hidden">
                        <div className="px-[7px] py-2 md:p-5 font-light">
                        <p className="fgr mb-2 text-[12px] md:text-[24px] leading-[16px] md:leading-[34px] text-[#292929]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      </div>
                    </div>
                    <h2 id="accordion-collapse-heading-4" className="all-coll-heading" onClick={()=>toggle("4")}>
                        <button type="button" className="flex items-center justify-between w-full py-0 px-[5px] md:p-5 font-medium text-left text-gray-500 border-b-[1px] border-0 md:border-b-[1px] border-[#292929] focus:outline-none" >
                        <span className="fgr text-[12px] md:text-[28px] leading-[12px] md:leading-[38px] text-[#292929]">Do you take insurance?</span>
                        <svg data-accordion-icon="" className="w-[18px] md:w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-4" className="all-accordion-body accordion-collapse-body-4 hidden">
                        <div className="px-[7px] py-2 md:p-5 font-light">
                        <p className="fgr mb-2 text-[12px] md:text-[24px] leading-[16px] md:leading-[34px] text-[#292929]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      </div>
                    </div>
                    <h2 id="accordion-collapse-heading-5" className="all-coll-heading" onClick={()=>toggle("5")}>
                        <button type="button" className="flex items-center justify-between w-full py-0 px-[5px] md:p-5 font-medium text-left text-gray-500 border-0 md:border-0 border-[#292929] focus:outline-none" >
                        <span className="fgr text-[12px] md:text-[28px] leading-[12px] md:leading-[38px] text-[#292929]">How does booking with Ihsan Coaching work?</span>
                        <svg data-accordion-icon="" className="w-[18px] md:w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-5" className="all-accordion-body accordion-collapse-body-5 hidden">
                        <div className="px-[7px] py-2 md:p-5 font-light">
                        <p className="fgr mb-2 text-[12px] md:text-[24px] leading-[16px] md:leading-[34px] text-[#292929]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

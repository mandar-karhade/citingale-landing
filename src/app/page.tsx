import Image from 'next/image'
import ModernLibraryImage from '@/components/ModernLibraryImage'
import TypewriterText from '@/components/TypewriterText';

export default function Home() {
  
  return (
    <div className="min-h-screen bg-white relative">
      <main className="relative z-10 container mx-auto px-4 py-8">
      <header className="flex items-center justify-between p-4 mb-8">
          <div className="flex items-center">
            <Image src="/citingale-logo.png" alt="Citingale logo" width={80} height={80} />
            <div className="ml-4">
              <h1 className="text-5xl tracking-[12px] font-inter font-hairline">Citingale</h1>
              <TypewriterText 
                text="F - Factual|A - Accessible|I - Inclusive|R - Reproducible|FAIR - Factual Accessible Inclusive Reproducible| RESEARCH SIMPLIFIED"
                typeSpeed={50}
                pauseBetweenPhrases={500}
                className="text-lg tracking-[5px] uppercase mt-1 text-gray-400"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:contact@citingale.com?subject=I want to be on the waitlist"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="relative w-12 h-12">
                <Image
                  src="/QHTn.gif"
                  alt="Inbox Animation"
                  width={40}
                  height={40} 
                  unoptimized
                />
              </div>
              <span className="text-blue-500 text-lg font-bold font-inter tracking-[1px] ">
                Join Waitlist
              </span>
            </a>
          </div>
        </header>

      <ModernLibraryImage />

      <blockquote className="text-center italic text-gray-600  mt-16 mb-4 max-w-4xl mx-auto font-corda text-lg">
          &quot;Unbiased research is the cornerstone of scientific progress, illuminating
          pathways to discovery without preconceived notions. The integrity of knowledge
          hinges on the meticulous organization of data, ensuring that our quest for truth
          remains untainted by bias, paving the way for innovation and enlightenment.&quot;
        </blockquote>

        <hr className="w-1/2 mx-auto my-8 border-t border-gray-300" />

        <div className="relative flex flex-col md:flex-row items-start mt-16 mb-4 max-w-4xl mx-auto">
        <div className="md:w-1/3 mb-4 md:mb-0 md:mr-8 flex flex-col items-center">
            <Image
              src="/citingale-founder.jpg"
              alt="Citingale Illustration"
              width={250}
              height={250}
              className="rounded-lg shadow-lg"
            />
            <div className="mt-4 text-center">
              <p className="font-corda text-sm hover:text-blue-400 cursor-pointer text-blue-600">
                <a href="https://www.linkedin.com/in/mandarkarhade/" target="_blank" rel="noopener noreferrer">
                  Mandar Karhade MD PhD MPH
                </a>
              </p>
              <p className="font-corda text-xs text-gray-600">CEO & Founder</p>
            </div>
          </div>
          <div className="md:w-2/3">
          <blockquote className="text-left text-gray-600 font-corda tracking-[2px] text-sm">
              <span className="annotation" data-ner="PRODUCT" data-relationship="POWERED_BY" data-related-to="AI,MACHINE_LEARNING"><span className="blink-citingale">Citingale</span></span> is powered by the latest advancements in <span className="annotation" data-ner="TECHNOLOGY" id="AI">AI</span> and <span className="annotation" data-ner="TECHNOLOGY" id="MACHINE_LEARNING">machine learning</span> to deliver 
              an easy to use, personalized, low friction, and highly standardized experience. <span className="annotation" data-ner="PRODUCT">Citingale</span> does not replace human intelligence, but rather augments it. <br/><br/>

              <span className="annotation" data-ner="PRODUCT" data-relationship="PROVIDES" data-related-to="END_TO_END_SOLUTION">Citingale</span> is the <span className="annotation" data-ner="CONCEPT" id="END_TO_END_SOLUTION">end-to-end solution</span> for <span className="annotation" data-ner="PROCESS">systematic literature review</span>, <span className="annotation" data-ner="PROCESS">meta-analysis</span>, and <span className="annotation" data-ner="PROCESS">systematic synthesis</span> of research. <span className="annotation" data-ner="PRODUCT">Citingale</span> will not only save you time and money. <span className="annotation" data-ner="PRODUCT">Citingale</span> provides you with a standardized, reproducible, and <span className="annotation" data-ner="CONCEPT" id="FAIR">FAIR</span> (<span className="annotation" data-ner="CONCEPT" id="FACTUAL">F</span>actual, <span className="annotation" data-ner="CONCEPT" id="ACCESSIBLE">A</span>ccessible, <span className="annotation" data-ner="CONCEPT" id="INCLUSIVE">I</span>nclusive, and <span className="annotation" data-ner="CONCEPT" id="REPRODUCIBLE">R</span>eproducible) evidence base so you can focus on what really matters - YOUR RESEARCH. <br/><br/>
              
              <span className="annotation" data-ner="PRODUCT" data-relationship="PROVIDES" data-related-to="SITUATION_ANALYSIS,GAP_ANALYSIS,EVIDENCE_BASED_SOLUTIONS">Citingale</span> is your one stop shop for <span className="annotation" data-ner="PROCESS" id="SITUATION_ANALYSIS">situation analysis</span>, <span className="annotation" data-ner="PROCESS" id="GAP_ANALYSIS">gap analysis</span>, and <span className="annotation" data-ner="CONCEPT" id="EVIDENCE_BASED_SOLUTIONS">evidence based solutions</span> to your most complex problems.
            </blockquote>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm">
              Contact: <a href="mailto:contact@citingale.com" className="text-blue-600 hover:text-blue-400">contact@citingale.com</a>
              <span className="mx-2">|</span>
              <span className="text-gray-600">Knowledge City, USA</span>
            </p>
          </div>
          <div className="w-full md:w-1/2 md:text-right">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 md:justify-end">
              <a href="https://www.linkedin.com/company/citingale/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://twitter.com/citingale" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://github.com/citingale" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/citingale" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.instagram.com/citingale" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.youtube.com/citingale" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Citingale. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}


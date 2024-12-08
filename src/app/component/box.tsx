// components/FAQSection.js
export default function FAQSection() {
    const faqs = [
      { question: "What types of chairs do you offer?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, illo et nobis provident modi suscipit." },
      { question: "Do your chairs come with a warranty?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eius? Maxime suscipit quaerat." },
      { question: "Can I try a chair before purchasing?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos ex aliquam." },
      { question: "How can we get in touch with you?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, odit!" },
      { question: "What online statement are these?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, cum repellendus." },
      { question: "How do I clean and maintain my Comforty chair?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, autem." },
    ];
  
    return (
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Questions Looks Here</h2>
          <p className="text-center text-gray-500 mb-8">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <button
                    className="text-gray-500 focus:outline-none"
                    aria-label="Toggle Answer"
                  >
                    +
                  </button>
                </div>
                <p className="mt-4 text-gray-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  
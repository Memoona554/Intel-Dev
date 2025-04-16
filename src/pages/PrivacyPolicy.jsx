import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
function PrivacyPolicy() {
    return (
        <>
            <Header />
            <section className="bg-white py-20 bg-no-repeat" style={{
                backgroundImage: "url('/career-bg.webp')",

            }}>
                <div className="container mx-auto  px-4">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl text-white font-bold leading-snug">
                            Privacy Policy
                        </h1>
                    </div>

                </div>
            </section>
            <section className="px-4 md:px-10 py-12 max-w-5xl mx-auto text-gray-800">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="mb-4">
                    Data protection is of highest priority for us. The use of our website is possible without any indication of personal data; however, if a data subject wants to use special enterprise services via our website, processing of personal data could become necessary. If the processing of personal data is necessary and there is no statutory basis for such processing, we generally obtain consent from the data subject.
                </p>
                <p className="mb-8">
                    The processing of personal data, such as the name, address, email address, or telephone number of a data subject shall always be in line with the General Data Protection Regulation (GDPR), and in accordance with the country-specific data protection regulations applicable to us. By means of this data protection policy, we would like to inform the general public of the nature, scope, and purpose of the personal data we collect, use and process. Furthermore, data subjects are informed, by means of this data protection declaration, of the rights to which they are entitled.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Name and Address of the controller</h3>
                <p className="mb-4">
                    Controller for the purposes of the General Data Protection Regulation (GDPR), other data protection laws applicable in Member states of the European Union and other provisions related to data protection is:
                </p>
                <ul className="list-none space-y-2 mb-8">
                    {[
                        "BUSINESS NAME",
                        "STREET ADDRESS",
                        "POSTAL CODE & CITY",
                        "COUNTRY",
                        "PHONE",
                        "CONTACT EMAIL",
                        "WEBSITE"
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-center">
                            <i className="fas fa-check text-green-500 mr-2"></i>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <h3 className="text-2xl font-semibold mb-4">Definitions</h3>
                <p className="mb-4">
                This data protection declaration is based on the terms used by the European legislator for the adoption of the General Data Protection Regulation (GDPR). Our data protection declaration should be legible and understandable to the general public, as well as to our customers and business partners. To ensure this, we would like to first explain the terminology used.                </p>
                {[
                    ["a.) Personal data", "Personal data means any information relating to an identified or identifiable natural person (“data subject”). An identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person."],
                    ["b.) Data subject", "Data subject is any identified or identifiable natural person, whose personal data is processed by the controller responsible for the processing."],
                    ["c.) Processing", "Processing is any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction."],
                    ["d.) Restriction of processing", "Restriction of processing is the marking of stored personal data with the aim of limiting their processing in the future."],
                    ["e.) Profiling", "Profiling means any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal aspects relating to a natural person, in particular to analyse or predict aspects concerning that natural person’s performance at work, economic situation, health, personal preferences, interests, reliability, behaviour, location or movements."],
                    ["f.) Pseudonymisation", "Pseudonymisation is the processing of personal data in such a manner that the personal data can no longer be attributed to a specific data subject without the use of additional information, provided that such additional information is kept separately and is subject to technical and organisational measures to ensure that the personal data are not attributed to an identified or identifiable natural person."],
                    ["g.) Controller", "Controller or controller responsible for the processing is the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law."],
                    ["h.) Processor", "Processor is a natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller."],
                    ["i.) Recipient", "Recipient is a natural or legal person, public authority, agency or another body, to which the personal data are disclosed, whether a third party or not. However, public authorities which may receive personal data in the framework of a particular inquiry in accordance with Union or Member State law shall not be regarded as recipients; the processing of those data by those public authorities shall be in compliance with the applicable data protection rules according to the purposes of the processing."],
                    ["j.) Third party", "Third party is a natural or legal person, public authority, agency or body other than the data subject, controller, processor and persons who, under the direct authority of the controller or processor, are authorised to process personal data."],
                    ["k.) Consent", "Consent of the data subject is any freely given, specific, informed and unambiguous indication of the data subject’s wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her."],
                ].map(([title, desc], index) => (
                    <div key={index} className="mb-4">
                        <strong>{title}</strong>
                        <p>{desc}</p>
                    </div>
                ))}

                <h3 className="text-2xl font-semibold mb-4 mt-8">Cookies</h3>
                <p className="mb-4">
                Many Internet sites and servers use cookies. Many cookies contain a cookie ID. A cookie ID is a unique identifier of the cookie. It consists of a character string through which Internet pages and servers can be assigned to the specific Internet browser in which the cookie was stored. This allows visited Internet sites and servers to differentiate the individual browser of the data subject from other Internet browsers that contain other cookies. A specific Internet browser can be recognized and identified using the unique cookie ID. Through the use of cookies, we can provide the users of this website with more user-friendly services that would not be possible without the cookie setting.
                </p>
                <p className="mb-4">
                By means of a cookie, the information and offers on our website can be optimized with the user in mind. Cookies allow us, as previously mentioned, to recognize our website users. The purpose of this recognition is to make it easier for users to utilize our website. The website user that uses cookies, e.g. does not have to enter access data each time the website is accessed, because this is taken over by the website, and the cookie is thus stored on the user’s computer system. Another example is the cookie of a shopping cart in an online shop. The online store remembers the articles that a customer has placed in the virtual shopping cart via a cookie.


                </p>
                <p className="mb-8">
                The data subject may, at any time, prevent the setting of cookies through our website by means of a corresponding setting of the Internet browser used, and may thus permanently deny the setting of cookies. Furthermore, already set cookies may be deleted at any time via an Internet browser or other software programs. This is possible in all popular Internet browsers. If the data subject deactivates the setting of cookies in the Internet browser used, not all functions of our website may be entirely usable.                </p>

                <h3 className="text-2xl font-semibold mb-4">Legal basis for the processing</h3>
                <p className="mb-4">
                Art. 6(1) lit. a GDPR serves as the legal basis for processing operations for which we obtain consent for a specific processing purpose. If the processing of personal data is necessary for the performance of a contract to which the data subject is party, as is the case, for example, when processing operations are necessary for the supply of goods or to provide any other service, the processing is based on Article 6(1) lit. b GDPR. The same applies to such processing operations which are necessary for carrying out pre-contractual measures, for example in the case of inquiries concerning our products or services. Is our company subject to a legal obligation by which processing of personal data is required, such as for the fulfillment of tax obligations, the processing is based on Art. 6(1) lit. c GDPR.
                </p>
                <p>
                In rare cases, the processing of personal data may be necessary to protect the vital interests of the data subject or of another natural person. This would be the case, for example, if a visitor were injured in our company and his name, age, health insurance data or other vital information would have to be passed on to a doctor, hospital or other third party. Then the processing would be based on Art. 6(1) lit. d GDPR. Finally, processing operations could be based on Article 6(1) lit. f GDPR. This legal basis is used for processing operations which are not covered by any of the abovementioned legal grounds, if processing is necessary for the purposes of the legitimate interests pursued by our company or by a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject which require protection of personal data. Such processing operations are particularly permissible because they have been specifically mentioned by the European legislator. He considered that a legitimate interest could be assumed if the data subject is a client of the controller (Recital 47 Sentence 2 GDPR).                </p>
            </section>
            <Footer />
        </>
    )
}

export default PrivacyPolicy
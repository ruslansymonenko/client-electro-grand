import { FC } from 'react';
import { Mail, Phone } from 'lucide-react';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import ContactForm from '@/components/store/forms/contact-form/ContactForm';

const Contact: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <Breadcrumb />
      <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif] my-14">
        <div>
          <h1 className="text-gray-800 text-3xl font-extrabold">Зв&apos;язатись з нами</h1>
          <p className="text-sm text-gray-500 mt-4">
            Маєте питання по замовленню, або цікавить коммерційна співпраця?
          </p>

          <div className="mt-6">
            <h2 className="text-gray-800 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <Mail />
                </div>
                <a href="#" className="text-primary text-sm ml-4">
                  <small className="block">Mail</small>
                  <strong>info@example.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Телефон</h2>

            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <Phone />
                </div>
                <a href="#" className="text-primary text-sm ml-4">
                  <small className="block">Телефон</small>
                  <strong>+38 (099) 123 45 67</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

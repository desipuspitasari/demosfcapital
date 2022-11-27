import Link from "next/link";
import { FC } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";

import { MdOutlineAttachEmail, MdPhone } from "react-icons/md";
import BtnSecondary from "../../btnsecondary";

const inputClassName =
  "mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none";

interface Values {
  fullname: string;
  email: string;
  subject: string;
  messages: string;
}

const ContactSection: FC = () => {
  return (
    <>
      <section className="flex max-h-[500px] min-h-[500px] w-full flex-col justify-end bg-contact bg-cover bg-center bg-no-repeat px-2">
        <div className="mx-auto mb-20 w-full max-w-6xl">
          <div className="text-[40px] font-bold text-white">Kontak Kami</div>
        </div>
      </section>
      <section className="min-h-screen w-full bg-gradient-to-b from-[#F0F0F0] to-white px-2">
        <div className="mx-auto flex w-full max-w-6xl flex-col space-y-10 py-20">
          <div className="flex flex-wrap gap-y-2">
            <div className="flex basis-full flex-col lg:basis-1/2">
              <div className="text-[20px] font-bold">
                PT. Surya Fajar Capital Tbk
              </div>
              <div>
                Satrio Tower Building Lt. 14 Unit 5, Jalan Prof. Dr. Satrio Blok
                C4/5, Kuningan, DKI Jakarta 12950, Indonesia
              </div>
            </div>
            <div className="flex basis-full flex-wrap gap-2 lg:basis-1/2 lg:justify-end">
              <Link
                href="mailto:corporate@sfcapital.co.id"
                target="_blank"
                className="flex items-center justify-center space-x-2 self-end rounded-full border bg-white py-2 px-6 shadow-lg"
              >
                <MdOutlineAttachEmail className="h-6 w-6" />
                <span className="">corporate@sfcapital.co.id</span>
              </Link>
              <Link
                href="tel:02122513339"
                target="_blank"
                className="flex items-center justify-center space-x-2 self-end rounded-full border bg-white py-2 px-6 shadow-lg"
              >
                <MdPhone className="h-6 w-6" />
                <span className="">021-2251-3339</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="w-full">
              <div className="relative aspect-square rounded-lg border bg-white p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3335.2344899912982!2d106.82757014009647!3d-6.226158887788183!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe045fe9c46297309!2sSatrio%20Tower!5e0!3m2!1sid!2sid!4v1669564071542!5m2!1sid!2sid"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                ></iframe>
              </div>
            </div>
            <div className="w-full">
              <Formik
                initialValues={{
                  fullname: "",
                  email: "",
                  subject: "",
                  messages: "",
                }}
                onSubmit={(
                  values: Values,
                  { setSubmitting }: FormikHelpers<Values>
                ) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 500);
                }}
              >
                <Form className="flex h-full w-full flex-col space-y-2">
                  <label className="block">
                    <span className="ml-4 block text-sm font-medium text-slate-700">
                      Full Name
                    </span>
                    <Field
                      id="fullname"
                      name="fullname"
                      type="text"
                      className={inputClassName}
                    />
                  </label>
                  <label className="block">
                    <span className="ml-4 block text-sm font-medium text-slate-700">
                      Alamat Email
                    </span>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className={inputClassName}
                    />
                  </label>
                  <label className="block">
                    <span className="ml-4 block text-sm font-medium text-slate-700">
                      Subject
                    </span>
                    <Field
                      id="subject"
                      name="subject"
                      type="text"
                      className={inputClassName}
                    />
                  </label>
                  <label className="flex h-full w-full flex-col place-items-stretch items-stretch">
                    <span className="ml-4 block text-sm font-medium text-slate-700">
                      Pesan
                    </span>
                    <Field
                      as="textarea"
                      id="messages"
                      name="messages"
                      type="text"
                      className={inputClassName + " w-full"}
                    />
                  </label>
                  <div className="flex justify-end">
                    <BtnSecondary> Kirim Pesan</BtnSecondary>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;

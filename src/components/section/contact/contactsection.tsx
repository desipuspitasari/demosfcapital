import Link from "next/link";
import { FC } from "react";
import { MdOutlineAttachEmail, MdPhone } from "react-icons/md";

const ContactSection: FC = () => {
  return (
    <>
      <section className="flex max-h-[500px] min-h-[500px] w-full flex-col justify-end bg-contact bg-cover bg-center bg-no-repeat px-2">
        <div className="mx-auto mb-20 w-full max-w-6xl">
          <div className="text-[40px] font-bold text-white">Kontak Kami</div>
        </div>
      </section>
      <section className="min-h-screen w-full px-2">
        <div className="mx-auto flex w-full max-w-6xl flex-col py-20">
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
          <div className="flex flex-wrap gap-y-2">
            <div className="basis-full lg:basis-5/12">
              <div className="aspect-square"></div>
            </div>
            <div className="basis-full lg:basis-7/12"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;

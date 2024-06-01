import React, { useEffect } from "react";
import HeaderInfo from "../../components/information/header";
import Img from "../../assets/img/illustration/terms.png";

const TermsPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Syarat dan Ketentuan";
  }, []);

  return (
    <>
      <HeaderInfo title="Syarat & Ketentuan" img={Img} />
      <section className="px-10 sm:px-20 md:px-40 text-textLabel text-base">
        <p>
          Selamat datang di Aguna Edu. Harap dicatat bahwa dengan mengakses dan
          menggunakan situs web kami, Anda menyetujui untuk terikat oleh syarat
          dan ketentuan berikut. Jika Anda tidak setuju dengan salah satu bagian
          dari syarat dan ketentuan ini, Anda tidak diperkenankan untuk
          menggunakan situs web kami.
        </p>
        <div className="text-primaryBlue font-semibold text-2xl flex flex-col gap-10 mt-10 mb-[110px]">
          <TitleSection title="Penggunaan Situs Web">
            <ul className="pl-5 list-disc">
              <li>
                Konten: Seluruh konten yang tersedia di situs web ini adalah
                milik Aguna Edu dan dilindungi oleh hak cipta. Anda dilarang
                untuk menggandakan, mendistribusikan, atau menggunakan konten
                kami tanpa izin tertulis dari kami.
              </li>
              <li>
                Akurasi: Kami berusaha untuk menyajikan informasi yang akurat
                dan terkini di situs web kami, namun kami tidak memberikan
                jaminan atas keakuratan, kelengkapan, atau keandalan informasi
                tersebut.
              </li>
              <li>
                Penggunaan yang Sah: Anda setuju untuk menggunakan situs web
                kami hanya untuk tujuan yang sah dan sesuai dengan hukum yang
                berlaku. Anda tidak diperbolehkan untuk menggunakan situs web
                ini untuk tujuan ilegal atau yang melanggar hak-hak orang lain.
              </li>
            </ul>
          </TitleSection>
          <TitleSection title="Penggunaan Layanan">
            <ul className="pl-5 list-disc">
              <li>
                Konten Eksternal: Situs web kami dapat menyertakan tautan ke
                situs web atau sumber daya eksternal lainnya. Kami tidak
                bertanggung jawab atas konten atau kebijakan privasi situs web
                tersebut dan penggunaannya adalah risiko Anda sendiri.
              </li>
              <li>
                Perubahan Layanan: Kami berhak untuk mengubah, menangguhkan,
                atau menghentikan layanan kami (atau bagian dari layanan kami)
                kapan saja tanpa pemberitahuan sebelumnya. Kami tidak
                bertanggung jawab atas kerugian atau kerusakan yang timbul
                akibat perubahan tersebut.
              </li>
            </ul>
          </TitleSection>
          <TitleSection title="Persetujuan Terakhir">
            <p>
              Dengan mengakses atau menggunakan situs web kami, Anda menyatakan
              bahwa Anda telah membaca, memahami, dan menyetujui syarat dan
              ketentuan ini. Syarat dan ketentuan ini berlaku efektif sejak
              tanggal terakhir pembaruan. Jika Anda memiliki pertanyaan atau
              kekhawatiran tentang syarat dan ketentuan kami, jangan ragu untuk
              menghubungi kami.
            </p>
          </TitleSection>
        </div>
      </section>
    </>
  );
};

const TitleSection = ({ title, children }) => (
  <div className="flex flex-col gap-4">
    <h1>{title}</h1>
    <div className="text-textLabel text-base font-normal">{children}</div>
  </div>
);

export default TermsPage;

import React, { useEffect } from "react";
import HeaderInfo from "../../components/information/header";
import Img from "../../assets/img/illustration/privacy.png";

const PrivacyPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Kebijakan dan Privasi";
  }, []);

  return (
    <>
      <HeaderInfo title="Kebijakan & Privasi" img={Img} />
      <section className="px-10 sm:px-20 md:px-40 text-textLabel text-base">
        <p>
          Aguna Edu berkomitmen untuk menghormati dan melindungi privasi Anda.
          Kami memahami betapa pentingnya data pribadi Anda dan kami tidak akan
          membagikannya kepada orang-orang atau pihak ketiga lainnya tanpa izin
          Anda. Silakan baca Kebijakan Privasi berikut untuk mempelajari lebih
          lanjut tentang bagaimana kami akan menjunjung tinggi janji kami kepada
          Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan,
          menggunakan, dan mengungkapkan data pribadi Anda yang kami peroleh
          saat Anda menggunakan layanan Aguna Edu. Dengan terus menggunakan atau
          mengakses situs web kami, itu berarti Anda telah menerima
          praktik-praktik yang diuraikan dalam Kebijakan ini.
        </p>
        <div className="text-primaryBlue font-semibold text-2xl flex flex-col gap-10 mt-10 mb-[110px]">
          <TitleSection title="Informasi yang kami kumpulkan">
            <p>
              Kami mungkin mengumpulkan informasi pribadi yang Anda berikan
              secara langsung kepada kami saat Anda menggunakan situs web kami.
              Informasi tersebut dapat mencakup, namun tidak terbatas pada:
            </p>
            <ul className="pl-5 list-disc">
              <li>Nama</li>
              <li>Alamat Email</li>
              <li>Informasi kontak lainnya</li>
              <li>Informasi pembayaran (jika berlaku)</li>
            </ul>
            <p>
              Kami juga dapat mengumpulkan informasi non-pribadi saat Anda
              berinteraksi dengan situs web kami, seperti data statistik tentang
              penggunaan situs atau data demografis pengguna.
            </p>
          </TitleSection>
          <TitleSection title="Bagaimana Kami Menggunakan Informasi Anda">
            <ul className="pl-5 list-disc">
              <li>
                Pendaftaran: Jika Anda memilih untuk membuat akun pengguna di
                situs web kami, Anda bertanggung jawab untuk menjaga keamanan
                informasi akun Anda dan untuk memberikan informasi yang akurat
                dan terkini saat mendaftar.
              </li>
              <li>
                Penanggung Jawab: Anda bertanggung jawab penuh atas segala
                aktivitas yang terjadi di bawah akun Anda. Kami tidak
                bertanggung jawab atas kerugian atau kerusakan yang disebabkan
                oleh akses yang tidak sah ke akun Anda.
              </li>
            </ul>
          </TitleSection>
          <TitleSection title="Kebijakan Cookie">
            <p>
              Situs web kami dapat menggunakan cookie untuk menyimpan informasi
              tentang preferensi pengguna, mengikuti perilaku pengguna, serta
              untuk menyediakan layanan dan fungsi tertentu. Anda dapat mengatur
              preferensi cookie Anda melalui pengaturan browser Anda.
            </p>
          </TitleSection>
          <TitleSection title="Kontrol atas Informasi Anda">
            <p>
              Anda memiliki hak untuk mengakses, memperbarui, atau menghapus
              informasi pribadi Anda yang kami simpan. Jika Anda memiliki
              pertanyaan atau kekhawatiran tentang Kebijakan Privasi kami atau
              penggunaan informasi Anda, jangan ragu untuk menghubungi kami
              melalui informasi kontak yang tersedia di bawah ini.
            </p>
          </TitleSection>
          <TitleSection title="Perubahan pada Kebijakan Privasi">
            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
              Ketika kami melakukan perubahan, kami akan memperbarui tanggal
              revisi di bagian atas halaman. Anda disarankan untuk secara
              berkala meninjau Kebijakan Privasi ini untuk memastikan Anda
              memahami bagaimana informasi Anda dilindungi.
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

export default PrivacyPage;

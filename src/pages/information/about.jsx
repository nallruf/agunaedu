import React, { useEffect, useState } from "react";
import HeaderInfo from "../../components/information/header";
import Img from "../../assets/img/illustration/kegiatan.png";
import TextInputComponent from "../../components/auth/textinput";
import ButtonComponent from "../../components/auth/button";
import { dataAboutTeam } from "../../dummydata/information/dataabout";
import CardTeam from "../../components/information/cardteam";

const AboutPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Tentang Kami";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Terkirim Pesan");
  };

  return (
    <>
      <HeaderInfo
        title="About Us"
        img={Img}
        desc="Aguna Edu! Kami adalah platform pembelajaran daring yang bertujuan untuk memberikan akses yang mudah dan terjangkau kepada pendidikan berkualitas kepada semua orang di seluruh dunia."
      />
      <section className="px-10 sm:px-20 md:px-40 text-textLabel text-base flex flex-col gap-20 mb-[110px]">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-[15px]">
            <h4>Visi Kami</h4>
            <h1 className="text-primaryBlue font-semibold text-2xl">
              Menjadi mitra utama dalam perjalanan pembelajaran Anda.
            </h1>
            <p>
              Kami percaya bahwa setiap orang memiliki potensi untuk belajar dan
              berkembang, kami bertekad untuk memberdayakan individu dengan
              pengetahuan dan keterampilan yang mereka butuhkan.
            </p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h4>Misi Kami</h4>
            <h1 className="text-primaryBlue font-semibold text-2xl">
              Menyediakan akses mudah & terjangkau untuk pembelajaran IT
              berkualitas tinggi.
            </h1>
            <p>
              Kami berusaha untuk menawarkan pengalaman pembelajaran yang
              relevan bagi setiap pengguna, dengan fokus pada inovasi,
              kolaborasi, dan keunggulan akademik.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center sm:text-center gap-[15px] md:px-24">
          <h1 className="text-primaryBlue font-semibold text-4xl">
            Meet Our Professional Team
          </h1>
          <p>
            Di balik Aguna Edu terdiri para profesional berbakat dan
            berpengalaman di bidang teknologi, pendidikan, dan desain. Kami
            memiliki visi yang sama untuk menciptakan perubahan positif dalam
            dunia pendidikan untuk menjadikan pembelajaran lebih mudah,
            menyenangkan, dan bermanfaat bagi semua orang.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {dataAboutTeam.map((about, index) => (
              <CardTeam
                key={index}
                role={about.role}
                role1={about.role1}
                role2={about.role2}
                img={about.img}
                aka={about.aka}
                nameTeam={about.nameTeam}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-primaryBlue font-semibold text-3xl">
              Contact Us
            </h1>
            <p>
              Jika Anda memiliki pertanyaan atau masukan, jangan ragu untuk
              menghubungi kami. Kami selalu siap untuk mendengar dari Anda!
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <TextInputComponent
                htmlFor="name"
                label="Nama"
                type="text"
                placeholder="Masukan Nama"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextInputComponent
                htmlFor="email"
                label="Email"
                type="email"
                placeholder="Masukan Email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextInputComponent
                htmlFor="message"
                label="Pesan"
                type="textarea"
                placeholder="Masukan Pesan"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              />
              <ButtonComponent nameButton="Kirim" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

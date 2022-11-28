import Head from "next/head";
import { NextPage } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";
import newsdetail from "../../public/images/newsdetail.png";
import Image from "next/image";
import NewsSection from "../components/section/home/newssection";

const NewsDetail: NextPage = () => {
  return (
    <>
      <Head>
        <title>SF Capital</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className="mt-[140px] min-h-screen w-full">
        <div className="mx-auto flex w-full max-w-6xl flex-col px-4 lg:px-0">
          <div className="flex flex-col justify-center text-justify font-open-sans text-black">
            <div>
              <Image src={newsdetail} alt="" />
            </div>
            <div className="mb-4 mt-6 text-left text-[32px] font-black">
              Sebelum Nabung Saham, Yuk Kenali Risiko dan Keuntungannya!
            </div>
            <div className="mb-5">
              Sekarang sudah semakin maraknya orang untuk melakukan nabung saham
              sebagai ladang mereka untuk melakukan investasi jangka panjang.
              Hal ini dikarenakan keuntungan yang didapatkan cukup besar, namun
              ada baiknya sebagai investor pemula harus lebih banyak untuk cari
              tau terkait investasi saham tersebut. Sudah banyak kasus yang
              terjadi hanya karena kurangnya pengetahuan serta informasi yang
              didapatkan bagi para pemula yang ingin melakukan investasi.
            </div>
            <div className="mb-5">
              Tidak sedikit dari mereka justru malah mendapatkan kerugian yang
              cukup besar dibandingkan keuntungan yang diinginkannya, maka dari
              itu bagi para investor pemula ada baiknya untuk melihat keuntungan
              dan risiko yang akan mereka dapatkan ketika memutuskan untuk
              berinvestasi.
            </div>
            <div className="mb-5">
              Mari kita bahas satu persatu dari mulai keuntungan yang didapatkan
              jika bagi para pemula yang ingin mencoba untuk berinvestasi dengan
              cara nabung saham. OJK menyebutkan setidaknya terdapat tiga
              keuntungan yang didapatkan oleh investor jika melakukan nabung
              saham yaitu capital gain, dividen dan ownership.
            </div>
            <div>
              Capital gain merupakan keuntungan yang didapatkan oleh investor
              ketika harga penjualan dikurangi dengan harga pembelian saham.
            </div>
            <div>
              Dividen adalah bagian keuntungan dari perusahaan yang diberikan
              kepada investor sebagai pemegang saham di perusahaan tersebut.
            </div>
            <div className="mb-5">
              Ownership yaitu pemilik dari saham itu sendiri.
            </div>
            <div className="mb-5">
              Dengan kata lain bahwa, setiap calon investor atau seseorang yang
              ingin berencana untuk nabung saham harus mengetahui paling tidak
              dua istilah penting diatas. Nah, setelah mengetahui keuntungan
              jika kita melakukan investasi saham ternyata investasi saham pun
              juga memiliki beberapa risiko yang harus kamu ketahui lhoo! Mak
              min merangkum jadi tiga risiko yang sering terjadi ketika kamu
              melakukan investasi saham
            </div>
            <div className="mb-5">
              Capital Loss merupakan kebalikan dari capital gain yang dimana
              risiko yang dihadapi yaitu suatu kondisi dimana seorang investor
              menjual saham lebih rendah daripada harga beli.
            </div>
            <div className="mb-5">
              Risiko Likuidasi yaitu jika sebuah kondisi dimana suatu perusahaan
              mengalami kerugian oleh pengadilan atau bahkan perusahaan tersebut
              telah dibubarkan. Dalam hal ini, hak klaim dari pemegang saham
              mendapatkan prioritas terakhir setelah seluruh kewajiban
              perusahaan terkait sudah selesai semua. Biasanya saham yang
              terkena likuid saham nya tidak populer dan kurang diminati
              kebanyakan orang, sehingga untuk menjual saham nya kembali cukup
              sulit.
            </div>
            <div className="mb-5">
              Dari keuntungan dan risiko yang sudah dijelaskan diatas, sudah
              jelas bahwa dalam berinvestasi saham perlu adanya pencarian
              informasi yang dalam terkait saham yang ingin dibeli, kenaikkan
              harga saham serta izin resmi yang sudah dikeluarkan sebelum pada
              akhirnya untuk memutuskan membeli saham perusahaan tersebut.
              Membeli saham melalui SFAST tentunya sudah mendapatkan izin dari
              OJK sehingga sudah terjamin keamanan dalam bertransaksi.
            </div>
            <div className="mb-5 text-[18px] font-semibold">Share This</div>
          </div>
        </div>
      </section>
      <NewsSection />
      <Footer />
      <Navbar />
    </>
  );
};

export default NewsDetail;

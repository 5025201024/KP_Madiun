import ImageCard from '@/components/ImageCard';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <main>
        <section className='bg-beranda bg-no-repeat min-h-screen flex justify-end items-end flex-col relative overflow-hidden'>
          <div className='absolute h-56 w-64 bg-black rotate-45'></div>
          <div className='h-56 w-full '></div>
          <div className='w-full flex text-black space-y-10 bg-slate-400'>
            <div className='layout space-y-10 '>
              <div className='flex space-y-10 flex-col w-1/2'>
                <h1>Tentang Kami</h1>
                <p className='text-xl'>
                  Advokad sebagai profesi hukum dalam sejarahnya telah dikenal
                  dengan istilah Advokat & Procureur (Belanda), Basrister and
                  Solicitoir (Inggris), Advocate (Singapura), Lawyer (Amerika),
                  pada awalnya profesi ini hanya menjalankan perkara khusus
                  hukum acara di Pengadilan. Sedangkan dalam bahasa Indonesia
                  advokat adalah orang yang berprofesi memberi jasa hukum, baik
                  didalam maupun diluar pengadilan yang memenuhi persyaratan
                  berdasarkan ketentuan perundang-undangan.
                </p>
              </div>

              <div className='flex flex-row space-x-12 mb-6 text-xl'>
                <div className='space-y-8'>
                  <p>
                    Sebagaimana diketahui profesi advokat (lawyer) merupakan
                    profesi yang telah dikenal cukup lama dalam masyarakat,
                    selain profesi hukum lainnya seperti : notaris, polisi,
                    jaksa, hakim, dan sebagainya. Kedudukan dan peran advokat
                    sekarang ini dalam hubungan dengan polisi, jaksa, hakim
                    merupakan kerangka yang disebut Catur Wangsa Penegak Hukum.
                    Profesi advokat bukan semata-mata mencari nafkah, namun
                    didalamnya terdapat idealisme atas nilai kebenaran dan
                    keadilan serta moralitas yang sangat dijunjung tinggi.
                  </p>
                  <p>
                    Masyarakat hingga saat ini masih memahami profesi advokat
                    hanya sebatas menjadi pembela bagi seseorang yang berpekara
                    di pengadilan (legal technician). Padahal tugas dan
                    kewajiban tersebut hanya merupakan sebagian kecil saja dari
                    tugas menjalankan profesi sebagai advokat.
                  </p>
                </div>
                <div className='space-y-8'>
                  <p className='text-right '>
                    Profesi advokat tersebut secara fungsional saat ini lebih
                    mengarah pada fungsi legal profesional dalam bentuk
                    pelayanan hukum (legal service); nasehat hukum (legal
                    advice); konsultan hukum (legal drafting ); informasi hukum
                    (legal information); teguran hukum (somasi); negoisasi hukum
                    (legal negotiation ); pembelaan perkara (legal litigation);
                    mewakili di muka Pengadilan ( legal representation );
                    bantuan hukum cuma-cuma (legal aid).
                  </p>
                  <p>
                    Namun demikian saat ini ada sebagian dari anggota masyarakat
                    yang sudah dapat memahami fungsi profesi advokat. Mereka
                    mempunyai pandangan yang lebih terbuka dan dapat menerima
                    profesi ini sebagai salah satu bagian dari penegak hukum.
                    Lebih-lebih saat ini dimana profesi ini diperlukan tidak
                    hanya menyangkut proses berperkara di pengadilan saja (legal
                    representation), akan tetapi fungsi penyelesaian perkara di
                    luar Pengadilan (non litigasi) ternyata sangat diperlukan
                    dikalangan perseorangan, perusahaan, instansi pemerintah,
                    yang selanjutnya dikenal dengan istilah Konsultan Hukum
                    (legal consultant).
                  </p>
                  <p>
                    Secara kuantitas keberadaan advokat semakin meningkat,
                    sehingga timbul adanya persaingan yang ketat. Oleh karena
                    itu Kantor Hukum R. Indra Priangkasa & Partners dalam
                    menyambut persaingan tersebut lebih mengedepankan segi
                    kualitas profesionalisme-nya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-white h-screen flex items-center relative '>
          <div className='absolute right-0 bottom-0'>
            <Image
              src='/images/libra-scale.svg'
              alt='balancer'
              width={300}
              height={300}
            />
          </div>
          <div className='layout'>
            <div>
              <h1>Profil</h1>
              <p className='text-left font-normal text-2xl'>
                Kantor Hukum R. Indra Priangkasa & Partners berdiri pada tahun
                1995,dapat melakukan penanganan perkara baik litigasi maupun
                non-litigasi di wilayah hukum Negara Kesatuan Republik
                Indonesia. saat ini berkedudukan di jalan Mastrip No. 56.E
                Madiun(63132) telpon: 0351.461919 faximile: 0351.461919.
                e-mail:radenindrapriangkasa@gmail.com, terdiri dari advokat yang
                mempunyai komitmen tinggi untuk ikut menjaga kehormatan profesi
                dan menegakkan hukum yang benar dan adil.
              </p>
            </div>
          </div>
        </section>

        <section className='h-screen flex justify-center items-center'>
          <Image
            src='/images/Group4.png'
            alt='valo'
            width={1920}
            height={1080}
          />
        </section>
        <section className='bg-white h-screen flex items-center relative'>
          <div className='absolute right-0 bottom-0'>
            <Image
              src='/images/group-people.svg'
              alt='asas'
              width={300}
              height={300}
            />
          </div>
          <div className='layout'>
            <div>
              <h1>Advokat Yang tergabung</h1>
              <p className='text-left font-normal text-2xl'>
                Advokat yang tergabung dalam Kantor Hukum R. Indra Priangkasa &
                Partners adalah advokat yang terdaftar dalam organisasi advokat
                Perhimpunan Advokat Indonesia (PERADI) dan Himpunan Kurator dan
                Pengurus Indonesia (HKPI) antara lain:
              </p>
            </div>
          </div>
        </section>

        <section className='bg-white min-h-screen flex items-center relative '>
          <div className='absolute left-0 top-0'>
            <Image
              src='/images/bapak-bapak.png'
              alt='bapak'
              width={400}
              height={400}
            />
          </div>
          <div className='layout flex justify-center'>
            <div className='w-1/2'>
              <h1># R. Indra Priangkasa, SH, MH</h1>
              <p className='text-left font-normal text-2xl'>
                kalimat kalimat kamlima ahnsuawdn kasdkjhhkadf asdnkasjhdkjad
                alahsdoiwadm dasldjawjdhn; asdja;da;dja;jd;lda jadj;adj;ajd; ad
                adk;ad;kad;k;akd;j
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className='grid grid-cols-3 gap-12'>
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </div>
        </section>
      </main>
    </Layout>
  );
}

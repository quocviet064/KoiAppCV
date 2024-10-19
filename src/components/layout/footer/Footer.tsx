


import { Link } from "react-router-dom";
import Logo from "../header/Logo";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiZalo } from "react-icons/si";


const Footer = () => {
    return(
        <footer className="bg-background border-t-[1px]">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <Link to="/" className="mr-5 h-6 sm:h-9">
                <Logo/>
              </Link>
              <p className="max-w-xs mt-4 text-sm text-black font-semibold">
                Trang web tư vấn phong thủy cá Koi
              </p>
              <div className="flex mt-8 space-x-6 text-gray-600">
                <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Facebook </span>
                 <FaFacebook size="30px"/>
                </a>
                <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Instagram </span>
                  <FaInstagram size="30px"/>
                </a>
                <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Twitter </span>
                  <FaTwitter size="30px"/>
                </a>
                <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Zalo </span>
                 <SiZalo size="30px"/>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-semibold text-black">Giới thiệu</p>
                <nav aria-label="Footer Navigation - Services" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li><Link className="text-black transition hover:opacity-75" to="#"> Kinh nghiệm của chúng tôi</Link></li>
                    <li><Link className="text-black transition hover:opacity-75" to="#"> Thẻ thành viên</Link></li>
                    <li><Link className="text-black transition hover:opacity-75" to="#"> Liên hệ</Link></li>
                  </ul>
                </nav>
              </div>
              <div>
                <p className="font-semibold text-black">Dịch vụ</p>
                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li><Link className="text-black transition hover:opacity-75" to="#">Hồ sơ tư vấn phong thủy</Link></li>
                    <li><Link className="text-black transition hover:opacity-75" to="#">Tư vấn vị trí hồ cá</Link></li>
                    <li><Link className="text-black transition hover:opacity-75" to="#">Tư vấn loại cá nên nuôi</Link></li>
                  </ul>
                </nav>
              </div>
              <div>
                <p className="font-semibold text-black">Kiến thức</p>
                <nav aria-label="Footer Navigation - Helpful Links" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li><Link className="text-black transition hover:opacity-75" to="#">Kiến thức phong thủy</Link></li>
                    <li><Link className="text-black transition hover:opacity-75" to="#">Blog phong thủy</Link></li>
                    <li><Link className="text-black transition hover:opacity-75" to="#">Hỏi đáp phong thủy</Link></li>
                    <li><Link className="text-black transition hover:opacity-75" to="#">Affiliates</Link></li>
                  </ul>
                </nav>
              </div>
              <div>
                <p className="font-semibold text-black">Pháp lý</p>
                <nav aria-label="Footer Navigation - Legal" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li><Link className="text-black transition hover:opacity-75" to="#">Chính sách của chúng tôi</Link></li>
                    <li><Link className="text-black transition hover:opacity-75" to="#">Hỗ trợ</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-black">© 2024. Bản quyền thuộc về KoiFish.</p>
        </div>
      </footer>
    )
}

export default Footer;
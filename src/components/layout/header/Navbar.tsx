import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"

import useLoginModal from "@/hooks/useLoginModal"
import useSignupModal from "@/hooks/useSignupModal"

import { RootState } from "@/lib/redux/store"

import Item from "@/components/global/atoms/ItemSelect"
import { Button } from "@/components/global/atoms/button"
import GifCall from "@/components/global/icons/icon"
import Container from "@/components/ui/Container"

import Logo from "./Logo"
import UserMenu from "./UserMenu"

const Navbar = () => {
  const loginModal = useLoginModal()
  const signupModal = useSignupModal()
  const location = useLocation()

  interface currentUser {
    Id: string
    Name: string
    Email: string
    Role: string // Assuming Role can be "Admin", "Staff", or something else
  }

  // Get current user from Redux store
  const currentUser = useSelector((state: RootState) => state.users.currentUser)

  return (
    <div className="sticky top-0 z-40 w-full bg-background shadow-2xl">
      <div className="h-[110px] border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Link to="/">
              <Logo />
            </Link>

            {location.pathname !== "/blog/create" && (
              <div className="flex flex-row gap-5">
                <Item label="Giới thiệu" link=""></Item>
                <Item label="Dịch vụ" link=""></Item>
                <Item label="Kiến thức" link=""></Item>
                <Item label="Hỏi đáp" link=""></Item>
                <Item label="Hội viên" link=""></Item>
                <Item label="Blog" link="/blog"></Item>
              </div>
            )}
            <div className="flex flex-row items-center justify-between gap-3">
              <Button variant="outline" size="lg">
                <GifCall />
                Liên hệ
              </Button>
              {/* Conditional rendering based on whether user is logged in */}
              <div className="flex flex-row justify-between gap-3">
                {currentUser ? (
                  <UserMenu currentUser={currentUser} />
                ) : (
                  <>
                    <Button
                      variant="default"
                      size="lg"
                      onClick={loginModal.onOpen}
                    >
                      Đăng nhập
                    </Button>
                    <Button
                      variant="destructive"
                      size="lg"
                      onClick={signupModal.onOpen}
                    >
                      Đăng ký
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar

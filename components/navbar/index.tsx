import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="hidden lg:block">
      {/* Top Nav */}
      <nav className="bg-[#171719] flex justify-center nav-bg">
        <div className="flex items-center gap-7 pt-15">
          <Link href="/navigation/charge" className="nav-btn-primary">
            입금신청
          </Link>
          <Link href="/navigation/exchange" className="nav-btn-primary">
            출금신청
          </Link>
          <Link href="/navigation/result" className="nav-btn-primary">
            경기결과
          </Link>
          <Link href="/navigation/betlist" className="nav-btn-primary">
            베팅내역
          </Link>
          <Link href="/navigation/notice" className="nav-btn-primary">
            공지사항
          </Link>{" "}
        </div>
        <Image
          src="/logo.png"
          width={105}
          height={105}
          alt="Logo"
          className="z-20 mx-24 pb-4 pt-2"
        />
        <div className="flex items-center gap-7 pt-15">
          <Link href="/navigation/event" className="nav-btn-primary">
            이벤트
          </Link>
          <Link href="/navigation/message" className="nav-btn-primary">
            쪽지함
          </Link>
          <Link href="/navigation/help" className="nav-btn-primary">
            고객센터
          </Link>
          <Link href="/navigation/mypage" className="nav-btn-primary">
            마이페이
          </Link>
          <Link href="/navigation/attendance" className="nav-btn-primary">
            출석체크
          </Link>
        </div>
      </nav>

      <hr className="hr-gradient" />

      {/* Bottom Nav */}
      <nav className="navgradient flex justify-between items-center text-lg font-bold p-3">
        <div className="flex items-center gap-2">
          <Image src="/navtalk.png" width={20} height={20} alt="Talk Icon" />
          <p>
            입금계좌는 수시로 변경되오니 입금전 계좌를 꼭 확인해 주시기.....
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/categories/sports" className="nav-btn-secondary">
            스포츠 (해외형)
          </Link>
          <Link href="/categories/sportscross" className="nav-btn-secondary">
            스포츠 (국내형)
          </Link>
          <Link href="/categories/sportsspecial" className="nav-btn-secondary">
            스페셜
          </Link>
          <Link href="/inplay" className="nav-btn-secondary">
            인플레이
          </Link>
          <Link
            href="/categories/sports-live-kor"
            className="nav-btn-secondary"
          >
            실시간
          </Link>
          <Link href="/categories/minigame" className="nav-btn-secondary">
            미니게임
          </Link>
          <Link href="/categories/bet365" className="nav-btn-secondary">
            벳365
          </Link>
          <Link href="/categories/tokengame" className="nav-btn-secondary">
            토큰게임
          </Link>
          <Link href="/categories/livecasino" className="nav-btn-secondary">
            카지노
          </Link>
          <Link href="/categories/slot" className="nav-btn-secondary">
            슬롯
          </Link>{" "}
          <div className="flex flex-row gap-2">
            <Link
              href="/navigation/charge"
              className="rounded-full px-4 btn-gold-gradient"
            >
              충전
            </Link>{" "}
            <Link
              href="/navigation/exchange"
              className="rounded-full px-4 btn-gold-gradient"
            >
              환전
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

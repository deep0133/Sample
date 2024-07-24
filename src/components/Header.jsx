import PropTypes from "prop-types";
import logoIcon from "../assets/logo.png";
import UKIcon from "../assets/uk.png";
import bellIcon from "../assets/bell.png";
export default function Header() {
  return (
    <nav className='bg-[#1f2b6c] h-[104.55px] flex items-center '>
      <div className='grow'>
        {" "}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex grow'>
              <div className='flex-shrink-0 flex items-center'>
                <img
                  src={logoIcon}
                  className='w-[59.62px] h-[46.40px] relative object-cover'
                  alt=''
                />
              </div>
              <div className='hidden md:ml-6 flex-1 justify-between min-[1090px]:flex '>
                <NavBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ title, index }) => {
  return (
    <div
      style={{ color: index === 0 ? "white" : "#bfd2f8" }}
      className=' items-center flex text-base  font-medium font-inter leading-normal'
    >
      {title}
    </div>
  );
};

const navList = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Doctors",
    path: "/doctors",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Our Features",
    path: "/our-features",
  },
];

NavLink.propTypes = {
  title: PropTypes.string,
  key: PropTypes.number,
  index: PropTypes.number,
};

const NavBar = () => {
  return (
    <>
      <div className='lg:space-x-8 flex lg:flex-row flex-col space-y-8 lg:space-y-0'>
        {navList.map((link, i) => {
          return <NavLink key={i} index={i} title={link?.title} />;
        })}
      </div>
      <div className='flex items-center'>
        <div className='flex-shrink-0 flex gap-6 items-center'>
          <img
            src={UKIcon}
            className='w-[35.15px] h-[17.58px] object-cover'
            alt=''
          />
          <img src={bellIcon} className='w-[30px] invert' alt='' />
          <button className='bg-[#159eec] h-[41.39px] flex px-5 rounded-[13px] border border-[#159eec] justify-center items-center text-white text-xs font-medium font-inter leading-normal'>
            Sign in
          </button>
          <button className='bg-[#bfd2f8] h-[41.39px] flex px-5 rounded-[13px] justify-center items-center text-[#1f2b6c] text-xs font-medium font-inter leading-normal'>
            Book Appointment
          </button>
        </div>
      </div>
    </>
  );
};

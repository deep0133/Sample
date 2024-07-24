import DoctorCard from "./DoctorCard";
import DataContext from "../context/useContext";
import { useContext } from "react";
export default function OurDoctors() {
  const { doctorList } = useContext(DataContext);

  return (
    <div className=' bg-gray-200 pb-16'>
      <div className='max-w-7xl w-[90%] mx-auto'>
        <div>
          <div className="text-center pt-5 mt-56 text-[#159eec]  text-lg font-bold font-['Work Sans'] uppercase tracking-[2.88px]">
            Trusted Care
          </div>
          <div className=' w-auto pb-8 text-center text-[#1f2b6c] text-[50px] font-normal font-Yeseva-One'>
            Our Doctors
          </div>
        </div>
        <div className='card-container grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {doctorList?.map((val, i) => {
            return (
              <DoctorCard
                key={i}
                name={val?.name}
                url={val?.url}
                specialist={val?.specialist}
                btnLink={val?.btnLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

import PropTypes from "prop-types";
import DataContext from "../context/useContext";
export default function DataProvider({ children }) {
  const doctorList = [
    {
      id: 1,
      name: "Dr. Clark Johnson",
      specialist:
        "Neurologist specializing in brain and nervous system disorders",
      url: "https://th.bing.com/th/id/R.215c1ff399e961851cc11a7810886a0e?rik=oZfxvnavGwz6cA&riu=http%3a%2f%2fwww.writergirl.com%2fwp-content%2fuploads%2f2014%2f11%2fDoctor-790X1024.jpg&ehk=CmnYm47Si7SLogCKQcVQ9Onueou53ycpcjvFFc3Ej00%3d&risl=&pid=ImgRaw&r=0",
      btnLink: "#",
    },
    {
      id: 2,
      name: "Dr. Clark Johnson",
      specialist:
        "Neurologist specializing in brain and nervous system disorders",
      url: "https://th.bing.com/th/id/R.215c1ff399e961851cc11a7810886a0e?rik=oZfxvnavGwz6cA&riu=http%3a%2f%2fwww.writergirl.com%2fwp-content%2fuploads%2f2014%2f11%2fDoctor-790X1024.jpg&ehk=CmnYm47Si7SLogCKQcVQ9Onueou53ycpcjvFFc3Ej00%3d&risl=&pid=ImgRaw&r=0",
      btnLink: "#",
    },
    {
      id: 3,
      name: "Dr. Clark Johnson",
      specialist:
        "Neurologist specializing in brain and nervous system disorders",
      url: "https://th.bing.com/th/id/R.215c1ff399e961851cc11a7810886a0e?rik=oZfxvnavGwz6cA&riu=http%3a%2f%2fwww.writergirl.com%2fwp-content%2fuploads%2f2014%2f11%2fDoctor-790X1024.jpg&ehk=CmnYm47Si7SLogCKQcVQ9Onueou53ycpcjvFFc3Ej00%3d&risl=&pid=ImgRaw&r=0",
      btnLink: "#",
    },
    {
      id: 4,
      name: "Dr. Clark Johnson",
      specialist:
        "Neurologist specializing in brain and nervous system disorders",
      url: "https://th.bing.com/th/id/R.215c1ff399e961851cc11a7810886a0e?rik=oZfxvnavGwz6cA&riu=http%3a%2f%2fwww.writergirl.com%2fwp-content%2fuploads%2f2014%2f11%2fDoctor-790X1024.jpg&ehk=CmnYm47Si7SLogCKQcVQ9Onueou53ycpcjvFFc3Ej00%3d&risl=&pid=ImgRaw&r=0",
      btnLink: "#",
    },
  ];

  const aboutCardData = [
    {
      id: 1,
      title: "Patients Beds",
      number: 155,
    },
    {
      id: 2,
      title: "Doctors",
      number: 186,
    },
    {
      id: 3,
      title: "Nurse",
      number: 121,
    },
    {
      id: 4,
      title: "Happy Patients",
      number: 1668,
    },
  ];

  const legacyCard = [
    {
      id: 1,
      name: "Mr. Mark Hannery",
      review:
        "Exceptional care and outstanding service - a hospital that truly puts patients first.",
      rating: 3,
      url: "https://th.bing.com/th/id/OIP.7ZuYwrIdy7FFk5IXAI7bcAHaGl?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: "Mr. Mikeal Clark",
      review:
        "Efficient, reliable, and dedicated to ensuring the well-being of their patients - a hospital you can trust.",
      rating: 4,
      url: "https://th.bing.com/th/id/OIP.7ZuYwrIdy7FFk5IXAI7bcAHaGl?rs=1&pid=ImgDetMain",
    },
    {
      id: 1,
      name: "Mr. Usman Kabeer",
      review:
        "Exceptional care and outstanding service - a hospital that truly puts patients first.",
      rating: 5,
      url: "https://th.bing.com/th/id/OIP.7ZuYwrIdy7FFk5IXAI7bcAHaGl?rs=1&pid=ImgDetMain",
    },
    {
      id: 1,
      name: "Mr. Mark Hannery",
      review:
        "Exceptional care and outstanding service - a hospital that truly puts patients first.",
      rating: 3,
      url: "https://th.bing.com/th/id/OIP.7ZuYwrIdy7FFk5IXAI7bcAHaGl?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <DataContext.Provider value={{ doctorList, legacyCard, aboutCardData }}>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node,
};

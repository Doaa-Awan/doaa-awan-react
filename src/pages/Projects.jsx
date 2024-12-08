import haver from "../assets/projects/proj-haver.svg";
import emmas from "../assets/projects/proj-emmas.svg";
import contoso from "../assets/projects/proj-contoso.svg";
import weather from "../assets/projects/proj-weatherdesktop.svg";

function Projects() {
  return (
    <div className='container pgcontainer'>
      <div className='row'>
        <div className='col border'>
          <p>Non-Conformance Reporting System</p>
          <img src={haver} alt='' className='img-fluid' />
        </div>
        <div className='col border'>
          <p>Customer Relationship Management System</p>
          <img src={emmas} alt='' className='img-fluid' />
        </div>
      </div>
      <div className='row'>
        <div className='col border'>
          <p>Contoso Database PowerBI Dashboard</p>
          <img src={contoso} alt='' className='img-fluid' />
        </div>
        <div className='col border'>
          <p>Global Weather Application</p>
          <img src={weather} alt='' className='img-fluid' />
        </div>
      </div>
    </div>
  );
}

export default Projects;

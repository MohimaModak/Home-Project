import "./Banner.css";
const Banner = () => {
  return (
    <div className=" bg-slate-200 p-5">
      <div className="">
        <div className="grid grid-cols-3 gap-5 mb-5">
          <img
            src="https://s.tmimgcdn.com/scr/1200x750/290400/interior-minimal-facebook-cover-banner-design-001_290474-original.jpg"
            className="rounded-md"
          />

          <img
            src="https://s.tmimgcdn.com/scr/800x500/289400/interior-minimal-facebook-cover-banner-design-template-09_289408-original.jpg"
            className="rounded-md"
          />
          <img
            src="https://img.freepik.com/premium-vector/interior-design-social-media-facebook-cover-banner-template-premium-vector_185182-1342.jpg"
            className="rounded-md"
          />
        </div>
        <div className="grid grid-cols-3 gap-5 mb-5">
          <img
            src="https://img.freepik.com/premium-psd/furniture-fakebook-cover-web-banner-template_516730-40.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais"
            className="rounded-md"
          />

          <div className="flex justify-center items-center">
            <img src="https://theaisle.qodeinteractive.com/wp-content/uploads/2018/10/section-title-img-1.png" />
            <h1 className="font md:text-5xl text-slate-600">Dream Home</h1>
          </div>
          <img
            src="https://s.tmimgcdn.com/scr/1200x627/289900/interior-minimal-facebook-cover-banner-design-10_289956-original.jpg"
            className="rounded-md"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-5 mb-5">
          <img
            src="https://s.tmimgcdn.com/scr/800x500/289400/interior-minimal-facebook-cover-banner-design-template-10_289409-original.jpg"
            className="rounded-md"
          />
          <img
            src="https://img.freepik.com/free-psd/flat-design-home-design-template_23-2149619016.jpg"
            className="rounded-md"
          />
          <img
            src="https://s.tmimgcdn.com/scr/800x500/289400/interior-minimal-facebook-cover-banner-design-template-02_289401-original.jpg"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
